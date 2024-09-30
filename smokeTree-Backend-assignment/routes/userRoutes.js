const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.registerUser);

router.post("/register", (res) => {
  console.log("POST request received at /register");
  res.send("Route is working!");
});

module.exports = router;
