'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('products', [{
			name     : 'Small Coffee',
			value    : 4,
			tax      : 20,
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			name     : 'Big coffee',
			value    : 6,
			tax      : 20,
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			name     : 'Green tea',
			value    : 3,
			tax      : 20,
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			name     : 'Banana pancakes',
			value    : 5,
			tax      : 40,
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			name     : 'Orange juice',
			value    : 5,
			tax      : 20,
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			name     : 'Grilled cheese sandwich',
			value    : 7,
			tax      : 40,
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			name     : 'Nuts and seeds',
			value    : 4,
			tax      : 0,
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
