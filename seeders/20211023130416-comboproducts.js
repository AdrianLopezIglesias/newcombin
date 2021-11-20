'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('combo_products', [
			{
				product_id: 1,
				combo_id  : 1,
				discount  : 50,
				created_at : new Date(),
				updated_at : new Date()
			},
			{
				product_id: 1,
				combo_id  : 1,
				discount  : 10,
				created_at : new Date(),
				updated_at : new Date()
			},
			{
				product_id: 2,
				combo_id  : 2,
				discount  : 10,
				created_at : new Date(),
				updated_at : new Date()
			},
			{
				product_id: 4,
				combo_id  : 2,
				discount  : 50,
				created_at : new Date(),
				updated_at : new Date()
			},
			{
				product_id: 3,
				combo_id  : 3,
				discount  : 25,
				created_at : new Date(),
				updated_at : new Date()
			},
			{
				product_id: 7,
				combo_id  : 3,
				discount  : 30,
				created_at : new Date(),
				updated_at : new Date()
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
