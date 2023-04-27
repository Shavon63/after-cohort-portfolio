import { GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
    <div className='socialMedia'>
        <Link to="https://www.linkedin.com/in/shavon-white-devop-full-stack/"><LinkedIn/></Link>
        <Link to="https://github.com/Shavon63?tab=repositories"><GitHub/></Link>
    </div> 
    <p> & copy: 2023 topdevtech.com</p>   
    </div>
  )
}

export default Footer