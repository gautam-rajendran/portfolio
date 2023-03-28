import React from 'react'
import './Exp.css'

const  Exp = ({number,desce,style}) => {
  return (
    <div style={{...style}} className='experience'> 
        <h1>{number}</h1>
        <p>{desce}</p>
    </div>
  )
}

export default Exp