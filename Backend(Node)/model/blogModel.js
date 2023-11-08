const mongoose = require("mongoose")

const blogScheme = new mongoose.Schema({
    title : {
        type : String
    },
    subTitle : {
        type : String
    },
    description : {
        type : String
    }
},{
    timestamps : true
})

const Blog = mongoose.model("Blog", blogScheme)
module.exports = Blog