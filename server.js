const express = require("express");
const app = express();
const methodOverride = require("method-override");


app.use(methodOverride("_method"));


// HOMEPAGE
app.get("/", (req, res) => {
  res.json({ 
    message: "Recipe App API is working",
    array: ["Seth", "Chadwick"],
  });
});

// app.use("/api/auth", require("./controllers/authController.js"));
// app.use("/api/users", require("./controllers/usersController.js"));
// app.use("/api/meals", require("./controllers/mealssController.js"));

// app.listen(process.env.PORT, () => {
//   console.log("Nodemon listening");
// });

app.listen(3005, () => {
  console.log("Recipe App API is listening");
});