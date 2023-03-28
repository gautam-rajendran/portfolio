import React from 'react'
import { Element } from 'react-scroll'
import Project from '../projectss/Project'
import "./Projectcontainer.css"

export const Projectcontainer = () => {

    const project = [
        {
            img : "https://www.newzealand.com/assets/Operator-Database/img-1652959660-6127-25310-Alpine_Twin_IMG_1048__aWxvdmVrZWxseQo_CropResizeWzEyMDAsNjMwLDc1LCJqcGciXQ.JPG",
            title : "Book Your Rooms",
            desc : "Easy, Fast And Secure Booking With Instant Confirmation. Choose From a Wide Range of Properties",
            link : "https://startling-medovik-8b48a1.netlify.app",
        },
        {
            img : "https://www.newzealand.com/assets/Operator-Database/img-1652959660-6127-25310-Alpine_Twin_IMG_1048__aWxvdmVrZWxseQo_CropResizeWzEyMDAsNjMwLDc1LCJqcGciXQ.JPG",
            title : "Book Your Rooms",
            desc : "Easy, Fast And Secure Booking With Instant Confirmation. Choose From a Wide Range of Properties",
            link : "www.google.com",

        },
        {
            img : "https://www.newzealand.com/assets/Operator-Database/img-1652959660-6127-25310-Alpine_Twin_IMG_1048__aWxvdmVrZWxseQo_CropResizeWzEyMDAsNjMwLDc1LCJqcGciXQ.JPG",
            title : "Book Your Rooms",
            desc : "Easy, Fast And Secure Booking With Instant Confirmation. Choose From a Wide Range of Properties",
            link : "www.google.com",

        },
        {
            img : "https://www.newzealand.com/assets/Operator-Database/img-1652959660-6127-25310-Alpine_Twin_IMG_1048__aWxvdmVrZWxseQo_CropResizeWzEyMDAsNjMwLDc1LCJqcGciXQ.JPG",
            title : "Book Your Rooms",
            desc : "Easy, Fast And Secure Booking With Instant Confirmation. Choose From a Wide Range of Properties",
            link : "www.google.com",

        },
         
    ]

  return (
    
    <Element className="projectcontainer" id="projects" >
        <h1>Projects</h1>
        <p>Have a look here, I've done something for fun</p>
        <div className='projectcontainer_projects'>
            {
                project.map((project,index)=>{
                    return(
                        <Project key={index} 
                        img={project.img} 
                        title={project.title}
                        desc={project.desc}
                        link={project.link}/>
                    
                    )
                })
            }

        </div>
    </Element>
  )
}

export default Projectcontainer
