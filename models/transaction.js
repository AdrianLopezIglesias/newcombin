'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		 static associate(models) {
			this.belongsTo(models.Transaction, {
				key: 'codebar',
				foreignKey: 'codebar'
			})
		}
  };
  Transaction.init({
    payment_method: DataTypes.STRING,
    credit_card_number: DataTypes.INTEGER,
    payment_value: DataTypes.INTEGER,
    codebar: DataTypes.INTEGER,
    payment_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};