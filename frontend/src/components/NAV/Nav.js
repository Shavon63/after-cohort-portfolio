import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {Reorder} from "@mui/icons-material"
import './nav.css'

function Nav() {
    const [showNav, setShowNav] = useState(false)
    const toggleButton =()=>{
        setShowNav(!showNav)
    } 
    const location = useLocation()
    useEffect(()=> {
        setShowNav(false)
    }, [location])

  return (
    <div className="navbar" id= {showNav? 'open' : 'close' }>
        <div className='toggleButton'>
            <button onClick={toggleButton}> 
                <Reorder/>
            </button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
            <Link to="https://docs.google.com/document/d/1oiA_fnzx5cGoKzDaFf6rReXinmHberXqmtjkrKhDBp0/edit?usp=sharing">Resume</Link>
        </div>
        </div>
  )
}

export default Nav