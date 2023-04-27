import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"
import './experience.css'

function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='darkblue'>
        <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='Current'
            iconStyle={{background: 'darkblue', color: '#fff'}}
            icon={<SchoolIcon/>}
            >
                <h3 className='vertical-timeline-element-title'> General Assembly</h3>
                <p>Fullstack Engineer Certificate</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className='vertical-timeline-element--work'
            date='20018-current'
            iconStyle={{background: 'rgb(238, 238, 21)', color: '#fff'}}
            icon={<WorkIcon/>}
            >
                <h3 className='vertical-timeline-element-title'> New Genesis Autospa</h3>
                <p>Business Owner providing high quality car modifications and detailing.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className='vertical-timeline-element--work'
            date='2015-2018'
            iconStyle={{background: 'rgb(238, 238, 21)', color: '#fff'}}
            icon={<WorkIcon/>}
            >
                <h3 className='vertical-timeline-element-title'> Anytime Auto Repair</h3>
                <p>Paint/Interior Refinery Specialist</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='2013-2015'
            iconStyle={{background: 'darkblue', color: '#fff'}}
            icon={<SchoolIcon/>}
            >
                <h3 className='vertical-timeline-element-title'> KingsBorough Community College</h3>
                <p>Some College Credits</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='2009-2013'
            iconStyle={{background: 'darkblue', color: '#fff'}}
            icon={<SchoolIcon/>}
            >
                <h3 className='vertical-timeline-element-title'> Highschool for Innovations and Media</h3>
                <p>Highschool Diploma</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        <div>
            <button className='resume-button'><Link to="https://docs.google.com/document/d/1oiA_fnzx5cGoKzDaFf6rReXinmHberXqmtjkrKhDBp0/edit">Resume</Link></button>
        </div>
    </div>
  )
}

export default Experience