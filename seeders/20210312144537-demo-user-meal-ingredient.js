'use strict';

const { Sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let meals = await queryInterface.bulkInsert("Meals", [
      { 
        name: "Cajun Spiced Fish Tacos", 
        imageUrl: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg', 
        location: "Cedar Falls, IA",
        directions: "Cooking in a cajun spice and cayenne pepper marinade makes this fish super succulent and flavoursome. Top with a zesty dressing and serve in a tortilla for a quick, fuss-free main that's delightfully summery. <br /> On a large plate, mix the cajun spice and cayenne pepper with a little seasoning and use to coat the fish all over.\r\n\r\nHeat a little oil in a frying pan, add in the fish and cook over a medium heat until golden. Reduce the heat and continue frying until the fish is cooked through, about 10 minutes. Cook in batches if you don’t have enough room in the pan.\r\n\r\nMeanwhile, prepare the dressing by combining all the ingredients with a little seasoning.\r\nSoften the tortillas by heating in the microwave for 5-10 seconds. Pile high with the avocado, lettuce and spring onion, add a spoonful of salsa, top with large flakes of fish and drizzle over the dressing." 
      },
      { 
        name: "Pizza Express Margherita", 
        imageUrl: 'https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg', 
        location: "Moline, IL",
        directions: "1. Preheat the oven to 230°C.\r\n\r\n2. Add the sugar and crumble the fresh yeast into warm water.\r\n\r\n3. Allow the mixture to stand for 10 – 15 minutes in a warm place (we find a windowsill on a sunny day works best) until froth develops on the surface.\r\n\r\n4. Sift the flour and salt into a large mixing bowl, make a well in the middle and pour in the yeast mixture and olive oil.\r\n\r\n5. Lightly flour your hands, and slowly mix the ingredients together until they bind.\r\n\r\n6. Generously dust your surface with flour.\r\n\r\n7. Throw down the dough and begin kneading for 10 minutes until smooth, silky and soft.\r\n\r\n8. Place in a lightly oiled, non-stick baking tray (we use a round one, but any shape will do!)\r\n\r\n9. Spread the passata on top making sure you go to the edge.\r\n\r\n10. Evenly place the mozzarella (or other cheese) on top, season with the oregano and black pepper, then drizzle with a little olive oil.\r\n\r\n11. Cook in the oven for 10 – 12 minutes until the cheese slightly colours.\r\n\r\n12. When ready, place the basil leaf on top and tuck in!"
      },
    ]);

    let ingredients = await queryInterface.bulkInsert("Ingredients", [
      { description: "2 tbsp cajun seasoning", mealId: 1 },
      { description: "1 tsp cayenne pepper", mealId: 1 },
      { description: "4 fillets white fish", mealId: 1 },
      { description: "1 sliced avocado", mealId: 1 },
      { description: "1 diced onion", mealId: 1 },
      { description: "8 flour tortillas", mealId: 1 },
      { description: "150ml water", mealId: 2 },
      { description: "1 tsp sugar", mealId: 2 },
      { description: "15g yeast", mealId: 2 },
      { description: "225g all purpose flour", mealId: 2 },
      { description: "1 1/2 tsp salt", mealId: 2 },
      { description: "1 cup mozzarella", mealId: 2 },
      { description: "1 sliced tomato", mealId: 2 },
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
