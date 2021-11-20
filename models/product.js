'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {

			//DISABLED SINCE IT IS NOT NECESSARY
			// this.hasMany(models.ComboProduct, {
			// 	sourceKey: 'id',
			// 	foreignKey: 'product_id'
			// })


			this.belongsToMany(models.Combo, {
				through: "ComboProduct",
				// key: 'id',
				// foreignKey: 'product_id',
				// targetKey: 'combo_id',
				// otherKey: 'combo_id'
			})

			// this.belongsTo(models.Cart, {
			// 	foreingKey: 'product_id'
			// })
      // define association here
    }
  };
	Product.init({
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			notNull: true,
			primaryKey: true
	},
    name: DataTypes.STRING,
    value: DataTypes.INTEGER,
    tax: DataTypes.INTEGER
  }, {
    sequelize,
		modelName: 'Product',
		underscored: true
  });
  return Product;
};