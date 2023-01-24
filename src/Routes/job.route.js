const express = require("express");
const { getJob, postJob } = require("../Controller/job.controller");

const app = express.Router();
app.get("/", getJob);
app.post("/", postJob);

module.exports = app;
