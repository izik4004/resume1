import React from 'react'

const HeroSection = () => {
  return (
    <div className=''>
        <div className='container mx-auto flex items-center '>
        <div className='container  flex h-screen relative'>
            <div className='w-1/3 bg-dark '>jkhjkhdsl</div>
            <div className='w-2/3'>2</div>
           
        </div>
        <div className='absolute w-3/5 gap-12 border-l rounded-3xl bg-red-500 mx-auto flex items-center p-12'>
                <div className='w-1/3 bg-white rounded-full'>
                    <img src="" alt="hi" className='py-28 '/>
                </div>
                <div className='w-2/3'>
                    <h3 className='text-5xl'>I'm Isaac John Ekanem</h3>
                    <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vitae molestias, maxime quia obcaecati accusantium quos ea, totam quaerat porro officia cumque consequatur numquam? Cupiditate recusandae magnam corporis qui tempora.</p>
                    <button className='py-2 px-6 bg-blue-500'>Download cv</button>
                </div>
            </div>
            </div>
    </div>
  )
}

export default HeroSection