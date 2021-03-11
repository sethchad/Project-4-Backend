const express = require("express");
const app = express();
const methodOverride = require("method-override");

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const createError = require("http-errors");


// Token Verification
const verifyToken = (req, res, next) => {
  let token = req.cookies.jwt;
  // COOKIE PARSER GIVES YOU A .cookies PROP, WE NAMED OUR TOKEN jwt
  console.log("Cookies: ", req.cookies.jwt);

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
    if (err || !decodedUser) {
      return res.status(401).json({ error: "Unauthorized Request" });
    }
    req.user = decodedUser;
    // ADDS A .user PROP TO REQ FOR TOKEN USER
    console.log(decodedUser);

    next();
  });
};

app.use(cors());
app.use(cookieParser());
app.use(express.json());
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