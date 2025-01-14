const express = require("express")
const {handleGetUrl, handleGetAnalytics, handlePostUrl} = require('../controllers/url.controller')
const urlRouter = express.Router()

urlRouter.route("/")
.post(handlePostUrl)
.get(handleGetUrl)

urlRouter.route("/analytics/:shortId")
.get(handleGetAnalytics)


module.exports = urlRouter