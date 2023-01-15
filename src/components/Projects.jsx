import React from "react";
import image from "../assets/item7.png";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="container mx-auto  h-screen">
       <h1 className='text-5xl font-bold italic text-center py-8'>Projects</h1>
      {/* <div> */}
     
     <div className="flex gap-6 flex-wrap place-content-center">
      {projects.map((project, index) => (     
        <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer w-1/4">
            <img
              alt="blog photo"
              src={image}
              className="object-cover w-full h-52 relative"
            />
            <div className="flex justify-between p-4 bg-white dark:bg-gray-800">
              <p className="font-medium text-indigo-500 text-md">
                {project.name}
              </p>
              <p>Github</p>
              
            </div>
        </div>
         ))}
        </div>
      </div>
    
  );
};

export default Projects;
