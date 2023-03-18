import React from 'react'
import './Header.css'
import {Link} from 'react-scroll'

export const Header = () => {
  return (
    <div className='header'>
        <div className='headerr'>
            <h1>Develop<span className='dd'>er</span>
            </h1>
        </div>
        <div className='headerl'>  
        <Link to='about' smooth={true} duration={600} >
            <h4>About me</h4>
        </Link>
        <Link to='skills' smooth={true} duration={600} >
            <h4>Skills</h4>
        </Link> 
        <Link to='experience' smooth={true} duration={600} >
            <h4>Experience</h4>
        </Link> 
        <Link to='projects' smooth={true} duration={600} >
            <h4>Projects</h4>
        </Link> 
        <Link to='contact' smooth={true} duration={600} >
            <h4>Contact</h4>
        </Link>  
        <h4 className='headerbtn' >Join with me</h4>   
        </div>
    </div>
    
  )
}
export default Header
