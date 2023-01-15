import { RiMoonFill } from "react-icons/ri";
import image from "../assets/zik1.jpg"
import figma from "../assets/figma.png"
import X from "../assets/x.png"
import O from "../assets/o.png"

const HeroSection = () => {
  const navItems = ["Home", "Projects", "About", "content"];
  return (
    <div className="">
      <div className=" flex items-center justify-center">
        <div className="container  flex h-screen relative ">
          <div className="w-1/3 bg-light
          ">
            <h1 className="text-5xl p-8 font-extrabold">IJ</h1>
          </div>
          <div className="w-2/3">
            <div className="flex gap-16 float-right py-8">
              {navItems.map((item, index) => (
                <ul>
                  <li key={index}>{item}</li>
                </ul>
              ))}
              <RiMoonFill />
            </div>
            <div className="flex justify-between flex-col h-3/5 my-24">
            <div className="">
                <img src={X} alt="mee" className="w-30"/>
            </div>
            <div className="flex justify-end mr-40 ">
              <img src={O} alt="me" className="w-40  " />
            </div>
            </div>
            
          </div>
          
        </div>

        <div className="me  p-20 absolute w-3/5 justify-center gap-12  bg-gradient-to-r from-[#2157F2] to-[#A6BCFA] mx-auto flex items-center ">
          <div className="w-1/3 flex justify-center">
            <div className="bg-white rounded-full p-2">
            <img src={image} alt="hi" className="w-28 rounded-full object-fit" />
            </div>
           
          </div>
          <div className="w-2/3 px-8">
            <h3 className="text-5xl">I'm Isaac John Ekanem</h3>
            <p className="py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              vitae molestias, maxime quia obcaecati accusantium quos ea, totam
              quaerat porro officia cumque consequatur numquam? Cupiditate
              recusandae magnam corporis qui tempora.
            </p>
            <button className="py-4 px-6 bg-blue-500">Download cv</button>
          </div>
        </div>
        
      </div>
     
    </div>
  );
};

export default HeroSection;
