const Joi = require('joi');

const schema = Joi.object({
	type: Joi.string()
		.alphanum()
		.min(2)
		.max(10)
		.required(),
	description: Joi.string()
		.min(2)
		.max(50)
		.required(),
	due_date: Joi.date()
		.required(),
	value: Joi.number()
		.min(1)
		.max(100000)
		.required(),
	status: Joi.string()
		.min(2)
		.max(50)
		.required(),
		codebar: Joi.number()
		.min(2)
		.max(5000000000)
		.required(),
})
module.exports = schema;