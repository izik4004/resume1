import image from "../assets/zik1.jpg"

const About = () => {
  return (
    <div className='container mx-auto h-screen items-center flex'>
        {/* <h1 className='text-5xl font-bold italic text-center py-8'>About me</h1> */}
        <div className='flex  justify-center'>
        
            <div className="flex w-1/2 place-content-center">
                <img src={image} alt="" className=" w-1/2 h-1/2"/>
            </div>
            <div className="flex w-1/2 place-content-center items-center">
                <p className='text-xl'>I’m a professional and talented web developer with frontend and backend development skills.

    I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I love learning new things.

    Being a diligent, hardworking and result oriented individual, I always work towards achieving best result on each project I lay my hands on</p>
            </div>
        
        </div>
    </div>
  )
}

export default About