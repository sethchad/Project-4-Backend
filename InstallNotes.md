### Packages

Steps for initial CLI commands for NPM and Sequelize install, as well as creating and seeding the database.  

* Note: This was only needed for the initial build, and ```npm install``` will install all needed dependencies for a user who downloads this code. 

Express
- npm init
- npm install express
- npm install method-override --save

Sequelize
- npm install sequelize-cli sequelize pg
- npx sequelize init
- createdb recipe_app_dev
- npx sequelize model:generate --name Meal --attributes name:string,imageUrl:string,location:string,directions:string
- npx sequelize model:generate --name Ingredient --attributes description:string,mealId:integer
- npx sequelize model:generate --name User --attributes name:string,username:string,password:string
- npx sequelize model:generate --name UserMeal --attributes userId:integer,mealId:integer
- npx sequelize seed:generate --name demo-user-meal-ingredient
- npx sequelize db:migrate
- npx sequelize db:seed:all
- Undoing migration
  * npx sequelize db:migrate:undo:all