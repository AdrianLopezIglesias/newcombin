const Sequelize = require('sequelize');
const combo_product = require('../models').ComboProduct;
const product = require('../models').Product; module.exports = {
	index(_, res) {
		return product.findAll({ include: { all: true, nested: true }})
			.then(product => res.status(200).send(product))
			.catch(error => res.status(400).send(error))
	}

};