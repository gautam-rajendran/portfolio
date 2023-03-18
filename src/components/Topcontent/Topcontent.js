import React from 'react'
import './Topcontent.css'
import {Link} from 'react-scroll'

const Topcontent = () => {
  return (
    <div className='Topcontent'>
        <div className='myinfo'>
            <h1>Mr.Gautham Raasendiran</h1>
            <p>Learner of web developing</p>
            <a href='www.google.com'>
                <button className='dbtn'>
                    Download CV
                </button>
            </a>
            <Link to='projects' smooth={true} duration={500} >
                <button className='mwbtn'>My Work</button>
            </Link>
        </div>
    </div>
  )
}

export default Topcontent