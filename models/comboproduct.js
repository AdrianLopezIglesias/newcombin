'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ComboProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
			this.hasOne(models.Combo, {
				sourceKey: 'combo_id',
				foreignKey: 'id'
			})
			this.belongsTo(models.Product, {
				key: 'id',
				foreignKey: 'product_id',
				as: 'associated_product'
			})
    }
  };
	ComboProduct.init({
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			notNull: true,
			primaryKey: true
	},
    product_id: DataTypes.INTEGER,
    combo_id: DataTypes.INTEGER,
    discount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ComboProduct',
		underscored: true
  });
  return ComboProduct;
};