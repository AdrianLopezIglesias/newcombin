'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		 static associate(models) {
			this.hasMany(models.Transaction, {
				key: 'codebar',
				foreignKey: 'codebar'
			})
		}
  };
  Payable.init({
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    due_date: DataTypes.DATE,
    value: DataTypes.INTEGER,
    status: DataTypes.STRING,
    codebar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Payable',
  });
  return Payable;
};