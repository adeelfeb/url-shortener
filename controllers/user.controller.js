const mongoose = require("mongoose")
const User = require("../models/user.model")



const handleUserSignUp = async(req, res)=>{
    const {name, email, password} = req.body
    await User.create({
        name, email, password
    })
    return res.render("home")
}


const handleGetUser = (req, res)=>{
    console.log(req.body)
    return res.status(200).json({Message: "successful"})
}


module.exports = {
    handleGetUser,
    handleUserSignUp
}