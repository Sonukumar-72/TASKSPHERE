const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../controllers/userController");

router.post("/register", registerUser); // for creating new user
router.post("/login", loginUser);       // for logging in

module.exports = router;
