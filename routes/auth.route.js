const express = require('express');
const router = express.Router();
const AuthValidation = require("../middlewares/validation.middleware")
const { loginController, createAuth } = require('../controllers/auth.controller');

router.post("/register",AuthValidation,createAuth)
router.post("/login",loginController)

module.exports = router;