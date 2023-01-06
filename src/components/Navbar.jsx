import React from 'react'

const Navbar = () => {
    const navItems = ["Home", "Projects", "About", "content"]
  return (
    <div>
        <div className='container mx-auto flex justify-between'>
        <div>
           <h3>IJ</h3>
        </div>
        <div className='flex gap-16'>
            {navItems.map((item, index)  => (
                <ul>
                    <li key={index}>{item}</li>
                </ul>
            ))}
            <p>mee</p>
        </div>
        </div>
    </div>
  )
}

export default Navbar