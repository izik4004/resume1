import React from 'react'
import image from "../assets/slider4.png"

const Projects = () => {
  return (
    <div className='container mx-auto py-10'>
        <h3>Projects</h3>
        <div className='rounded-lg shadow-lg w-1/3 flex flex-col '>
            <img src={image} alt="" className='object-contain '/>
            {/* <h4></h4> */}
            <div>
            <p className='flex justify-between p-4'>
                <span>Live Demo</span>
                <span>github link</span>
            </p>
            </div>
        </div>
    </div>
  )
}

export default Projects