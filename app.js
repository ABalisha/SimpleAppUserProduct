const express = require("express");
const user = require("./models/user");
app = express();
const productHelper = require("./controller/helpers/index");
const jwt = require("jsonwebtoken");
const path = require("path");
const mongoose = require("mongoose");
const product = require("./models/product");
const loginController = require("./controller/login");
const cookieParser = require("cookie-parser");
const productsRoute = require("./routes/product");
const cors = require("cors");
const { authenticateToken } = require("./controller/helpers/tokenauthenticate");
const database = require("./db");
const mainRoute = require("./routes/main");
const logoutController = require("./controller/helpers/logout");
const { send, nextTick } = require("process");

// Tell the app encoding is on JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Simple post request + login Search
app.post("/loginregister", loginController.LoginSearch);

// Logout
app.get("/logout", logoutController.logout);

// Frontend Engine / EJS Files used HTML and Css
app.set("view engine", "ejs");
// Routes Post Middleware
app.use(cookieParser());
app.use("/", mainRoute);

// Register Page
app.use("/register", (req, res) => {
  res.render("register");
});

// Products route + Checking Authentication + Routing
app.use("/products", authenticateToken, productsRoute);
// Users Route
app.use("/user", require("./routes/user"));
// set views folder
app.use("/views", express.static(path.join(__dirname, "public")));
// Set the app to listen to port 3000
app.listen(3000);
//----------------------------------------------------------------------------------------------//

// // USER ROLES
// https://www.youtube.com/watch?v=jI4K7L-LI58
