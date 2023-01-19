const express = require("express");
const {
  findBug,
  createBug,
  updateBug,
  deleteBug,
} = require("../Controller/bug.controller");
const Bugs = require("../Model/bug.module");
const app = express.Router();

app.get("/", findBug);
app.post("/", createBug);
app.patch("/", updateBug);
app.delete("/", deleteBug);
module.exports = app;
