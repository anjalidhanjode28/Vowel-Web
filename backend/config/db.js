const mongoose = require('mongoose');
require("dotenv").config()

const connection = () =>{
    mongoose.connect(process.env.MONGO_URL).then(() =>{
        console.log({msg : "Connection Successfully!"});
    }).catch((error) =>{
        console.log({msg : "Connection Failed!", error})
    })
}

// mongoose.set("strictQuery", false)

module.exports = {
    connection
}