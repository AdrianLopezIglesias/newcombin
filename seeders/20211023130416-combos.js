'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('combos', [
			{
				name     : 'Breakfast for two',
				limit    : 0,
				priority : 10,
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				name     : 'Full breakfast',
				limit    : 0,
				priority : 10,
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				name     : 'Green breakfast',
				limit    : 0,
				priority : 10,
				created_at: new Date(),
				updated_at: new Date()
			}
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
