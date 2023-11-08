import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import CreateBlog from './pages/CreateBlog'
import SingleBlog from './pages/SingleBlog'
import UpdateBlog from './pages/UpdateBlog'


function App() {

  return (
    <>
      <Header />
      <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/create' element={<CreateBlog/>} />
              <Route path='/single' element={<SingleBlog/>} />
              <Route path='/update' element={<UpdateBlog/>} />
              <Route path='/blogs' element={<Blogs/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path="/singleBlog/:id" element={<SingleBlog /> } />
              <Route path="/update/:id" element={<UpdateBlog /> } />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
