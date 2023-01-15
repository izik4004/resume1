import React from 'react'

const Contact = () => {
  return (
    <div className='container mx-auto mb-20 h-screen'>
        <h1 className='text-5xl font-bold italic text-center py-8'>Contact</h1>
    <div className=' flex justify-center'>
        <div className='w-2/3 p-10 shadow-lg gap-10 flex'>
            <div className='w-1/2'>
                <h3>Get in Touch</h3>
                <div className='flex justify-between py-8'>
                    <input type="email" name="" id="" className='border'/>
                    <input type="number" name="" id="" className='border'/>
                </div>
                <textarea name="" id="" cols="30" rows="10" className='border w-full'></textarea>
               
            </div>
            <div className='w-1/2 flex flex-col '>
                <p>llljlkd</p>
                <p>hjdjklkjkldjl</p>
                <p>jhkjsjkkjs</p>
            </div>
            
        </div>
        
    </div>
    </div>
  )
}

export default Contact