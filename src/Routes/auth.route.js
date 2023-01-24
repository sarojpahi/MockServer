const express = require("express");
const { signup, login } = require("../Controller/auth.controller");

const app = express.Router();
app.get("/", (req, res) => {
  res.send("Server running fine");
});
app.post("/register", signup);
app.post("/login", login);

module.exports = app;
