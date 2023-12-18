const jwt = require("jsonwebtoken")
const sendRes = require("../modules/sendRes")
const secretKey = "#l$D524!Z%g8h6l*5)56GBsa9";

module.exports = (req, res, next) => {

    const token = req.headers['authorization']


    if (!token) return sendRes(res, false, null, "no auth token")

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return sendRes(res, false, null , "auth error")
        req.body.user = user
        return next()
    })
}