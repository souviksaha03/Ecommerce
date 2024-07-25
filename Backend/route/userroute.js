const express= require("express");
const { createUser, LoginUser, logout } = require("../Controll/userCtl");
const router =  express.Router();

router.route("/userProfile").post(createUser)
router.route("/login").post(LoginUser)
router.route("/logout").get(logout)
module.exports = router;