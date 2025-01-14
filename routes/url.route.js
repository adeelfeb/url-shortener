const express = require("express")
const {handleGetUrl, handlePostUrl} = require('../controllers/url.controller')
const urlRouter = express.Router()

urlRouter.route("/")
.post(handlePostUrl)
.get(handleGetUrl)



module.exports = urlRouter