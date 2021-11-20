const Sequelize = require('sequelize');
const transaction = require('../models').Transaction;
const schema = require('../validations/transaction')

const pays = {
	async index(req, res) {
		let from = new Date(1970, 0, 1);
		let to = new Date();
		
		if (req.query.from) {
			from = req.query.from
		}
		if (req.query.to) {
			to = new Date(req.query.to);
		}

		transactions = await transaction.findAll({
			where: { payment_date: { [Sequelize.Op.between]: [from, to] } },
		})
			.catch(error => res.status(400).send(error))
		let output = await prepareOutput(transactions)
		res.status(200).send(output)
	},


	async create(req, res) {
		let { error, value } = schema.validate(req.body);
		if (value.payment_method != "cash") {
			//TODO
		}
		if (error) {
			res.status(400).send(error);
		}
		transaction.create(value)
			.then(transaction => res.status(201).send(transaction))
			.catch(transaction => res.status(400).send(error))
	}
}
module.exports = pays



function prepareOutput(transactions) {
	let output = []
	const groups = transactions.reduce((groups, item) => {
		const group = (groups[item.payment_date] || []);
		group.push(item);
		groups[item.payment_date] = group;
		return groups;
	}, {});
	for (let key in groups) {
		value = 0
		groups[key].forEach(transaction => {
			value = value + transaction.payment_value
		})
		output.push({
			payment_date: key,
			payments: value,
			quantity: groups[key].length
		})
	}

	return output;
}
