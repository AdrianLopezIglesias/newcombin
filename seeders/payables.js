'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('payables', [
			{
				type: "agua",
				description: "AySA",
				due_date: new Date("2021-12-15"),
				value: 600,
				codebar: 5324235,
				status: "pending",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				type: "luz",
				description: "Edenor",
				due_date: new Date("2021-12-17"),
				value: 2000,
				codebar:  123456789,
				status: "pending",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				type: "gas",
				description: "Metrogas",
				due_date: new Date("2021-12-22"),
				value: 1000,
				codebar: 412312141,
				status: "pending",
				created_at: new Date(),
				updated_at: new Date(),
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
