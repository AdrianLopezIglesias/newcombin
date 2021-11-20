'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			this.belongsTo(models.Product, {
				key: 'id',
				foreignKey: 'product_id'
			})
			// this.product = this.belongsTo(models.Product);
      // define association here
    }
  };
  Cart.init({
    product_id: DataTypes.INTEGER,
    closed: {type: DataTypes.INTEGER, defaultValue: 0},
    discount_used: {type: DataTypes.INTEGER, defaultValue: 0},
  }, {
    sequelize,
    modelName: 'Cart',
		underscored: true
  });
  return Cart;
};