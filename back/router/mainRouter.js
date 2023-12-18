const express = require('express');
const router = express.Router();

const { getLastFilm, searchByName, searchByKeyWord } = require("../controllers/importExportData")
const { registerUser, loginUser, autologin} = require("../controllers/authController")

const registerValid = require("../modules/registerValidation")
const jsonwebtoken = require("../modules/jwtMiddle")

router.post("/Registration", registerValid, registerUser)
router.post("/Login", loginUser)
router.post("/autologin", jsonwebtoken, autologin)

router.get ("/GetFilm", getLastFilm)
router.post ("/FindFilms", searchByName)
router.post ("/SearchByKeyWord", searchByKeyWord)

module.exports = router