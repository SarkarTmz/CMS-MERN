import '../styles/SingleBlog.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const SingleBlog = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [blog,setBlog] = useState({})
    // DELETE BLOG
    const deleteBlog = async ()=>{
       const response =  await axios.delete("http://localhost:3000/blogs/" + id)
       if(response.status ==200){
        navigate("/")
       }
    }

    // FETCH SINGLE BLOG 
    const fetchSingleBlog = async()=>{
        const response = await axios.get("http://localhost:3000/blogs/" + id)
     
        if(response.status ==200){
            setBlog(response.data.data)
        }
    }

    useEffect(()=>{
        fetchSingleBlog()

    },[])
    
  
  return (
    <div className='single container section'>
        <h1>{blog.title}</h1>
        <h3>{blog.subTitle}</h3>
        <p>{blog.description}</p>

        <div className="mini">
            <Link to={`/update/${blog._id}`} > Update</Link>
            <button onClick={deleteBlog} >Delete</button>
           
        </div> 
    </div>
  )
}

export default SingleBlog