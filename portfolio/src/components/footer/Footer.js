import { GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
    <div className='socialMedia'>
        <LinkedIn/>
        <GitHub/>
    </div> 
    <p> & copy: 2023 topdevtech.com</p>   
    </div>
  )
}

export default Footer