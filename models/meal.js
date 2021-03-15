'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Meal.hasMany(models.Ingredient, { foreignKey: "mealId" });
      Meal.belongsToMany(models.User, {
        through: "UserMeal",
        foreignKey: "mealId",
        otherKey: "userId",
      });
    }
  };
  Meal.init({
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Meal',
  });
  return Meal;
};