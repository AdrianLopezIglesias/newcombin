'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('carts', [
			{
				product_id: 1,
				closed: 0,
				discount_used: 0,
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				product_id: 1,
				closed: 0,
				discount_used: 0,
				created_at: new Date(),
				updated_at: new Date()
			},
			// {
			// 	product_id: 1,
			// 	closed: 0,
			// 	discount_used: 1,
			// 	created_at: new Date(),
			// 	updated_at: new Date()
			// },
			{
				product_id: 7,
				closed: 0,
				discount_used: 0,
				created_at: new Date(),
				updated_at: new Date()
			},
			// {
			// 	product_id: 4,
			// 	closed: 0,
			// 	discount_used: 0,
			// 	created_at: new Date(),
			// 	updated_at: new Date()
			// },
			// {
			// 	product_id: 5,
			// 	closed: 0,
			// 	discount_used: 0,
			// 	created_at: new Date(),
			// 	updated_at: new Date()
			// },
			// {
			// 	product_id: 2,
			// 	closed: 0,
			// 	discount_used: 0,
			// 	created_at: new Date(),
			// 	updated_at: new Date()
			// },
			// {
			// 	product_id: 1,
			// 	closed: 0,
			// 	discount_used: 0,
			// 	created_at: new Date(),
			// 	updated_at: new Date()
			// },
			{
				product_id: 3,
				closed: 0,
				discount_used: 0,
				created_at: new Date(),
				updated_at: new Date()
			},

		], {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example: 
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	}
};
