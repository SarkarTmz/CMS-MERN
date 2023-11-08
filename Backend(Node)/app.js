const { connectDatabase } = require("./database/database");
const Blog = require("./model/blogModel");

// const app = require("express")()
const express = require("express")
const app = express()
const cors = require('cors');

app.use(cors());
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

// all blogs api 
app.get("/blogs",async (req,res)=>{
    // fetching/reading all Blogs from Blog model
   const blogs =  await Blog.find()
   // check if blogs contains data or not
   if(blogs.length == 0){
    res.status(404).json({
        // status : 404,
        message : "Empty blogs"
    })
   }else{
       res.status(200).json({
        //    status : 200,
           message : "Blogs fetched successfully",
           data : blogs
        })
    }
})


// GET API -> /blogs/:id (single Blog)
app.get("/blogs/:id",async (req,res)=>{
    const id = req.params.id
 //    console.log(id)
 //    const {id} = req.params ALTERNATIVE
 //    const blog = await Blog.find({_id :id})
 //    if(blog.length == 0){
 //     res.status(404).json({
 //         message : "No blogs found with that id"
 //     })
 //    }else{
 
 //        res.status(200).json({
 //            messge : "Blog fetched successfully",
 //            data : blog
 //         })
 //     }
     // ALTERNATIVE 
     const blog = await Blog.findById(id)
     if(blog){
         res.status(200).json({
             message : "Blog fetched succesfully",
             data : blog
         })
     }else{
         res.status(404).json({
             message : "No blog found"
         })
     }
 
 })
 

// create Blog API 
app.post("/createBlog", async(req,res)=>{
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

    //    await Blog.create({
//         title : req.body.title,
//         subTitle : req.body.subTitle,
//         description : req.body.description
//     })

     //    Alternative (object destructuring)
    //    const {title,subTitle,description} = req.body

    // Insert to database logic goes here 
   await Blog.create({
        title : title  ,
        subTitle : subTitle,
        description : description
    })
})


// update 
app.patch("/blogs/:id", async(req,res)=>{
    const id = req.params.id
    const title = req.body.title
    const subTitle = req.body.subTitle
    const description = req.body.description

    // const {tit}

    await Blog.findByIdAndUpdate(id, {
        title : title,
        subTitle : subTitle,
        description : description
    })
    res.status(200).json({
        message : "Blogs updated successfully"
    })
})

// delete 
app.delete("/blogs/:id",async(req,res)=>{
    const id = req.params.id

    await Blog.findByIdAndDelete(id)

    res.status(200).json({
        message : "Blogs updated successfully"
    })
})

app.get("/about", (req,res)=>{
    res.send("Hello this is about page.")
})

app.listen(3000, (req,res)=>{
    console.log("Node is going on")
})
console.log("Successfully done")