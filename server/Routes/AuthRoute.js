const express = require("express");
const userRegister = require("../Controllers/AuthController");
const router = express.Router();


router.post("/register", userRegister)
module.exports = router;