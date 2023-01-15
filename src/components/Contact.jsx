import React from 'react'

const Contact = () => {
  return (
    <div className='container mx-auto  flex h-screen justify-center items-center'>
        {/* <h1 className='text-5xl font-bold italic text-center py-8'>Contact</h1> */}
    <div className=' flex justify-center'>
        <div className=' p-10 shadow-lg gap-10 flex'>
            <div className=''>
                <h3 className='text-xl font-bold'>Get in Touch</h3>
                <div className='flex justify-between py-8'>
                    <input type="email" name="" id="" className='border'/>
                    <input type="number" name="" id="" className='border'/>
                </div>
                <textarea name="" id="" cols="20" rows="6" className='border w-full'></textarea>
               
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