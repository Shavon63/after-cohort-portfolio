import React from 'react'
import { Link } from 'react-router-dom'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import './home.css'

function Home() {
  return (
    <div className='home'>
        <div className='photo'>
        <img href= "../assets/headshot.jpg" />
        </div>
                <div className='about'>
            <h2>Hi, My Name is Shavon </h2>
            <div className='promt'>
            <button><Link to="https://docs.google.com/document/d/1oiA_fnzx5cGoKzDaFf6rReXinmHberXqmtjkrKhDBp0/edit">Resume</Link></button>
                <p>A fullstack developer with a talent for clean code & beautiful designs. My working career started with cars as a "Paint Tech" and then learned the skills to become a "Interior & Exterior Refinery Tech" in which I then started my own business. I then decided to persue my true passion in tech, of building, designing and watching peoples imaginations come alive by my hands. I believe i can be a huge asset to any company interested in me.</p>
                <GitHub/>
                <Email/>
                <LinkedIn/>
            </div>
        </div>
        <div className='skills'>
            <h1>Stack skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-end</h2>
                    <span>ReactJS, Django, HTML, CSS, NPM, Bootstrap, MaterialUI, Framer Motion </span>
                </li>
                <li className='item'>
                    <h2>Backend-end</h2>
                    <span>MongoDB, Java, ExpressJS, PSQL</span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>JavaScript, Java, Python, C+</span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home