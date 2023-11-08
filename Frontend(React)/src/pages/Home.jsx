import React, { useEffect, useState, } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../styles/Home.css'

const Home = () => {
const [blogs, setBlogs] = useState([])
  //api call
  const fetchBlog = async()=>{
   const response = await axios.get('http://localhost:3000/blogs')
   setBlogs(response.data.data)
  //  console.log(response.data)
  }
  useEffect(()=>{
    fetchBlog()
  },[])
  // console.log(blogs)
  return (
   <>
      <div className="home container section">
        {
          blogs.map((blog)=>{
            return(
              <div className="card" key={blog._id}>
                <p className="card-title">{blog.title}</p>
                <p className="card-subtitle">{blog.subTitle}</p>
                <p className="card-description">{blog.description}</p>
                <Link to={`/singleBlog/${blog._id}`} >See More</Link>
              </div>
            )
          })
        }
      </div>
   </>
  )
}

export default Home