const express = require("express");
const app = express();
const methodOverride = require("method-override");

// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");
const cors = require("cors");
const createError = require("http-errors");


app.use(cors());
// app.use(cookieParser());
app.use(express.json());
app.use(methodOverride("_method"));


// HOMEPAGE
app.get("/", (req, res) => {
  res.json({ 
    message: "Recipe Book API is working",
    array: ["Seth", "Chadwick"],
  });
});


app.use("/api/meals", require("./controllers/mealsController.js"));

app.listen(process.env.PORT, () => {
  console.log("Nodemon listening");
});
