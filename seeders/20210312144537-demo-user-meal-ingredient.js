'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let meals = await queryInterface.bulkInsert("Meals", [
      { name: "Burrito" },
      { name: "Pizza" },
    ]);

    let ingredients = await queryInterface.bulkInsert("Ingredients", [
      { description: "1 lb chicken", mealId: 1 },
      { description: "1 pkg pepperoni", mealId: 2 },
    ]);

    let users = await queryInterface.bulkInsert("Users", [
      { name: "Seth" },
      { name: "Rebecca" },
    ]);

    let userMeals = await queryInterface.bulkInsert("UserMeals", [
      { userId: 1, mealId: 1 },
      { userId: 2, mealId: 2 },
    ]);
  }
};
