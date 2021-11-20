const Sequelize = require('sequelize');
const payable = require('../models').Payable;
const schema = require('../validations/payable')

const pays = {
	async index(req, res) {
		var whereStatement = {};
		whereStatement.status = "pending";

		if (req.query.type) {
			whereStatement.type = req.query.type;
		}

		payables = await payable.findAll(
			{ include: { all: true, nested: true } ,where:  whereStatement })
			.catch(error => res.status(400).send(error))
		
		let output = await prepareOutput(payables, req.query.type)

		res.status(200).send(output)
	},


	async create(req, res) {
		const { error, value } = schema.validate(req.body);
		if (error) {
			res.status(400).send(error);
		}
		payable.create(value)
			.then(payable => res.status(201).send(payable))
			.catch(error => res.status(400).send(error))
	}
}
module.exports = pays



function prepareOutput(payables, filter) {
	let output = []

	payables.forEach(payable => {
		// let status = defineStatus(payable)
		let object = {
			id: payable.id,
			description: payable.description,
			value: payable.value,
			due_date: payable.due_date,
			status: payable.status,
			codebar: payable.codebar,
		}
		if (!filter) {
			object.type = payable.type
		}
		output.push(object)
	});
	return output;
}

function defineStatus(payable) {
	let payed = 0;
	payable.Transactions.forEach(transaction => {
		payed = payed + transaction.payment_value
	})
	switch (true) {
		case payable.value > payed:
			return "partially payed"
		case payable.value == payed:
			return "payed"
		case payable.value < payed:
			return "over payed"
		default:
			return "pending"
	}
}