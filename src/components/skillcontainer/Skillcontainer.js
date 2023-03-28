import React from 'react'
import {Element} from 'react-scroll'
import skillimg1 from "../../assets/skillimg1.jpg"
import  LinearProgress  from '@mui/material/LinearProgress';
import './Skillcontainer.css'


function Skillcontainer() {
  return (
    <Element className='Skillcontainer' id='skills'>
        <div className='Skillcontainer_img'>
          <img src={skillimg1} alt=""/>
        </div>
        <div className='Skillcontainer_txt'>
          <h2>SKILL SET</h2>
          <div className='Skillcontainer_skillset'>
            <h5>React</h5>
            <div className='Skillcontainer_slider Skillcontainer_slider1'>
              <LinearProgress variant='determinate' value={50}/>
            </div>
          </div>
          <div className='Skillcontainer_skillset'>
            <h5>HTML</h5>
            <div className='Skillcontainer_slider Skillcontainer_slider2'>
              <LinearProgress variant='determinate' value={60}/>
            </div>
          </div>
          <div className='Skillcontainer_skillset'>
            <h5>CSS</h5>
            <div className='Skillcontainer_slider Skillcontainer_slider3'>
              <LinearProgress variant='determinate' value={50}/>
            </div>
          </div>
          <div className='Skillcontainer_skillset'>
            <h5>JavaScript</h5>
            <div className='Skillcontainer_slider Skillcontainer_slider4'>
              <LinearProgress variant='determinate' value={40}/>
            </div>
          </div>
          <div className='Skillcontainer_skillset'>
            <h5>Java</h5>
            <div className='Skillcontainer_slider Skillcontainer_slider5'>
              <LinearProgress variant='determinate' value={10}/>
            </div>
          </div>
        </div>
    </Element>
  )
}

export default Skillcontainer