import React from 'react'
import '../styles/Header.css'
import { NavLink } from 'react-router-dom'



const Header = () => {
  return (
    <>
    <header>
        <div className="container">
          
            <nav>
              <h2> MERN</h2>
              <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">Create Blogs</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </ul>
            </nav>
        
        </div>
        </header>
    </>
  )
}

export default Header