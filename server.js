const express = require("express");
const app = express();
const methodOverride = require("method-override");
const cors = require("cors");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(methodOverride("_method"));


// HOMEPAGE ROUTE
app.get("/", (req, res) => {
  res.json({ 
    message: "Recipe Book API is working",
    array: ["Seth", "Chadwick"],
  });
});

// CONTROLLER AND ROUTES
app.use("/api/meals", require("./controllers/mealsController.js"));


app.listen(process.env.PORT, () => {
  console.log("Nodemon listening");
});
