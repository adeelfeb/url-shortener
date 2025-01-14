const express = require("express")
const Url= require("../models/url.model")

const staticRouter = express.Router()

staticRouter.get("/", async (req, res)=>{
    if(!req.user) return res.redirect("/login")
    const allUrls = await Url.find({createdBy: req.user._id})

    return res.render("home", {
        urls: allUrls
    })
})

staticRouter.get("/signup", (req, res)=>{
    return res.render("signup")
})
staticRouter.get("/login", (req, res)=>{
    return res.render("login")
})

module.exports = staticRouter