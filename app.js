const { connectDatabase } = require("./database/database");
const Blog = require("./model/blogModel");

// const app = require("express")()
const express = require("express")
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// DATABASE CONNECTION FUNCTION
connectDatabase()

app.get("/", (req,res)=>{
    // res.send("Hello this is Home page.")
    res.json({
        name : "Sonam Tamang",
        code : 30
    })
})



// create Blog API 
app.post("/createBlog", async(req,res)=>{
   await Blog.create({
        title : req.body.title,
        subTitle : req.body.subTitle,
        description : req.body.description
    })
    res.json({
        status : 201,
        message : "Blog created succesfully"
    })
    // Alternative 
    // res.status(200).json({
    //     message : "Blog created successfully"
    // })



    const title = req.body.title;
    const subTitle = req.body.subTitle
    const description = req.body.description

     //    Alternative (object destructuring)
    //    const {title,subTitle,description} = req.body

    // Insert to database logic goes here 
   await Blog.create({
        title : title  ,
        subTitle : subTitle,
        description : description
    })
})





app.get("/about", (req,res)=>{
    res.send("Hello this is about page.")
})

app.listen(3000, (req,res)=>{
    console.log("Node is going on")
})
console.log("Successfully done")