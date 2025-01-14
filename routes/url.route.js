const express = require("express")
const {handleGetUrl, handleGetAnalytics} = require('../controllers/url.controller')
const urlRouter = express.Router()

urlRouter.route("/")
.post(handleGetUrl)

urlRouter.route("/analytics/:shortId")
.get(handleGetAnalytics)


module.exports = urlRouter