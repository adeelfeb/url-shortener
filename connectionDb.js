const mongoose = require("mongoose")

const connectDb = (url)=>{
    return mongoose.connect(url)
    .then(()=>{
        console.log("Mongodb connected")
    })
    .catch((err)=>{
        console.log("Error Connecting mongdb:", err)
        
    })
}

module.exports = {
    connectDb
}