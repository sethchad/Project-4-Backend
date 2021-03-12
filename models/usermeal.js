'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserMeal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserMeal.init({
    userId: DataTypes.INTEGER,
    mealId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserMeal',
  });
  return UserMeal;
};