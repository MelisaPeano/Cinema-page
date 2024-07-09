const { Router } = require("express");
const { testControler } = require("../controller");
const { moviesControler } =require("../controller/apiPeliculas");
const router = Router();


router.get("/", testControler);
router.post("/", moviesControler);

module.exports = router 