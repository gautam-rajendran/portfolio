import React from 'react'
import {InstagramIcon,FacebookOutlined} from '@mui/icons-material';
const Contact = () => {
  return (
   <Element classname="contact" >
    <h1>Contacts</h1>
    <div>
        <p>
            Email: <span>gowthamrajendran4272@gmail.com</span>
        </p>
        <p>
            Github: <span>gautam-rajendran</span>
        </p>
        <div>
           <a href='www.google.com'>
              <iconButton/>
              <InstagramIcon/>
              
           </a>
        </div>
        
    </div>

   </Element>
  )
}

export default Contact