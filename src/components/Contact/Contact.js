import React from 'react'
import './Contact.css'
import {Facebook,Instagram,LinkedIn} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Element } from 'react-scroll';

const Contact = () => {
  return (
   <Element id='contact' className='bbb'>
    <h1>Contacts</h1>
    <div className='Contact_container'>
        <p>
            Email: <span>gowthamrajendran4272@gmail.com</span>
        </p>
        <p>
            Github: <span>gautam-rajendran</span>
        </p>
        <div className='Contact_icons'>
           <a href='www.google.com'>
              <IconButton>
                 <LinkedIn/>
              </IconButton>
           </a>
           <a href='www.google.com'>
              <IconButton>
                 <Instagram/>
              </IconButton>
           </a>
           <a href='www.google.com'>
              <IconButton>
                 <Facebook/>
              </IconButton>
           </a>
        </div>
        
    </div>

   </Element>
  )
}

export default Contact