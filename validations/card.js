const Joi = require('joi');

const schema = Joi.object({
	credit_card_number: Joi.number()
		.min(0)
		.max(9999888877776666)
		.required(),
})

module.exports = schema;
