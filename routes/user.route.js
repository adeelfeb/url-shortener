const express = require("express")
const {handleGetUser, handleUserSignUp} = require("../controllers/user.controller")

const userRoute = express.Router()

userRoute.route("/")
.post(handleUserSignUp)


module.exports  = userRoute