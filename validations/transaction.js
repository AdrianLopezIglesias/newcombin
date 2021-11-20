const Joi = require('joi');

const schema = Joi.object({
	payment_method: Joi.string()
		.min(2)
		.max(50)
		.required(),
	credit_card_number: Joi.when('payment_method', {
			is: 'cash',
			otherwise: Joi.number().required()
		}),
	payment_value: Joi.number()
		.min(1)
		.max(100000)
		.required(),
	codebar: Joi.number()
		.min(2)
		.max(5000000000)
		.required(),
	payment_date: Joi.date()
		.required(),
})
module.exports = schema;