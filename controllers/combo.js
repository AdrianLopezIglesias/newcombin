const Sequelize = require('sequelize');
const combo_product = require('../models').ComboProduct;
const combo = require('../models').Combo; module.exports = {
	index(_, res) {
		return combo.findAll({ include: { all: true, nested: true } , subQuery:false})
			.then(combo => res.status(200).send(combo))
			.catch(error => res.status(400).send(error))
	}

};