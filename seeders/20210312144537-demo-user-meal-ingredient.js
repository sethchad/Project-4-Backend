'use strict';

const { Sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let meals = await queryInterface.bulkInsert("Meals", [
      { 
        name: "Spicy Tacos", 
        imageUrl: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg', 
        location: "Cedar Falls, IA" 
      },
      { 
        name: "Pizza", 
        imageUrl: 'https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg', 
        location: "Moline, IL" 
      },
    ]);

    let ingredients = await queryInterface.bulkInsert("Ingredients", [
      { description: "1 lb chicken", mealId: 1 },
      { description: "1 pkg tortillas", mealId: 1 },
      { description: "1 avocado", mealId: 1 },
      { description: "1 lb mozzarella", mealId: 2 },
      { description: "1 lb tomatoes", mealId: 2 },
      { description: "3 cups flour", mealId: 2 },
    ]);

    let users = await queryInterface.bulkInsert("Users", [
      { name: "Seth" },
      { name: "Rebecca" },
    ]);

    let userMeals = await queryInterface.bulkInsert("UserMeals", [
      { userId: 1, mealId: 1 },
      { userId: 2, mealId: 2 },
    ]);
  },

  // added the down feature
  down: async (queryInterface, Sequelize) => {},
};
