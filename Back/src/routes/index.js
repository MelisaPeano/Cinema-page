const { Router } = require("express");
moviesGet = require("./movieRouter")
const router = Router();
const moviesGet = require("../controllers/index");


app.get("/movies", movieRouter)

module.exports = router 