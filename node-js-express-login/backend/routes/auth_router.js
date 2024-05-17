const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth_controller");

router.route("/").post(authcontroller.login);
router.route("/signup").post(authcontroller.signup);
router.route("/login").post(authcontroller.login);

module.exports = router;
