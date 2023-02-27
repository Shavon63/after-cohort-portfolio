import React from 'react'
import ProjectItems from '../../components/projectItems/ProjectItems'
import mealprepnyc from "../../assets/mealprepnyc.jpeg"
import tripquery from "../../assets/tripquery.jpeg"
import gameq from "../../assets/gameq.jpeg"
import './projects.css'

function Projects() {
  return (
    <div className='projects'>
        <h1> My personal Projects</h1>
        <div className='projectList'>
            <ProjectItems name="Trip Query" image={tripquery}/> 
            <ProjectItems name="Meal Prep NYC" image={mealprepnyc}/>
            <ProjectItems name="gameq" image={gameq}/>
        </div>
    </div>
  )
}

export default Projects