import React from 'react'
import {Element} from 'react-scroll'
import Exp from '../expcontent/Exp'
import './Experience.css'

const Experience = () => {
  return (
    <Element className='Experiencecontainer' id='experience'>
        <h1>Experience</h1>
        <div className='expbox'>
           <Exp number="10+" desce="Clients"/>
           <Exp number="10+" desce="Clients" style={{backgroundColor: "orange"}} />
           <Exp number="10+" desce="Clients"/>
           <Exp number="10+" desce="Clients"/>
        </div>

    </Element>
  )
}

export default Experience