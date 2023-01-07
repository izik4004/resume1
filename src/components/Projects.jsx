import React from "react";
import image from "../assets/item7.png";

const Projects = () => {
  return (
    <div className="container mx-auto py-10">
      <h3 className="text-3xl text-center py-8">Projects</h3>
      {/* <div> */}
        <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer w-1/3">
          {/* <a href="#" className="block w-full h-full"> */}
            <img
              alt="blog photo"
              src={image}
              className="object-cover w-full h-96 relative"
            />
            <div className="flex justify-between p-4 bg-white dark:bg-gray-800">
              <p className="font-medium text-indigo-500 text-md">
                Live Demo
              </p>
              <p>Github</p>
              
            </div>
          {/* </a> */}
        </div>
      </div>
    
  );
};

export default Projects;
