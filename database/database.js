const mongoose = require("mongoose")


exports.connectDatabase = async()=>{
    // connecting to database 
// jaba samma database sanga connect hudainw wait gar
 await mongoose.connect("mongodb+srv://root:root@cluster0.ncitkkq.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
 console.log("Database connected successfully")
}
