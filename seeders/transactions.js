'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('transactions', [
			{
				payment_method: "credit_card",
				credit_card_number: 4546111122223333,
				payment_value: 1000,
				codebar: 123456789,
				payment_date: new Date("2021-10-20"),
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				payment_method: "debit_card",
				credit_card_number: 45461111122223333,
				payment_value: 500,
				codebar: 412312141,
				payment_date: new Date("2021-11-16"),
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				payment_method: "cash",
				credit_card_number: "",
				payment_value: 1000,
				codebar: 123456789,
				payment_date: new Date("2021-11-16"),
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
