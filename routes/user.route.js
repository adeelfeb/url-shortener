const express = require("express")
const {handleGetUser, handleUserSignUp, handleUserLogin} = require("../controllers/user.controller")

const userRoute = express.Router()

userRoute.route("/")
.post(handleUserSignUp)

userRoute.route("/login").post(handleUserLogin)


module.exports  = userRoute