const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/products.jsx");

router.route("/signup").post(authcontroller.signup);
router.route("/signin").post(authcontroller.signin);

module.exports = router;
