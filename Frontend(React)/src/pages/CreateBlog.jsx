import React, { useState } from 'react'
import '../styles/CreateBlog.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const navigate = useNavigate()
    const [data,setData] = useState({
        title : "",
        subTitle : "",
        description : ""
    })
 

    const createBlog = async (e)=>{
         e.preventDefault()
         // send above states data to api 
        const response =  await axios.post("http://localhost:3000/createBlog",data)
        if(response.status == 201){
            alert(response.data.message)
            navigate("/")
        }else{
            alert("Blog created successfully!")
            navigate("/")
        }

    }
    const handleChange = (e)=>{
        const {name,value} = e.target 
        setData({
            ...data,
            [name] : value
        })

    }
  return (
    <>
    <div className="form container section">
    <h2>Form Title</h2>
    <form onSubmit={createBlog}>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" placeholder="Enter Title" onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="subtitle">Subtitle</label>
            <input type="text" id="subtitle" name="subTitle" placeholder="Enter Subtitle"  onChange={handleChange} required  />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="4" placeholder="Enter Description" onChange={handleChange} required  ></textarea>
        </div>
        <button className="btn" type="submit">Submit</button>
    </form>
</div></>

  )
}

export default CreateBlog