'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Combo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			
				this.hasMany(models.ComboProduct, {
					sourceKey: 'id',
					foreignKey: 'combo_id'
				})
			
			}
  };
	Combo.init({
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			notNull: true,
			primaryKey: true
	},
    name: DataTypes.STRING,
    limit: DataTypes.INTEGER,
    priority: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Combo',
		underscored: true
  });
  return Combo;
};