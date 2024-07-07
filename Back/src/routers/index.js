const express = require("express");
const router = express.Router();
const app = require("../server");
const moviesGet = require("../controllers/index");


app.get("/", moviesGet)

module.exports = router 