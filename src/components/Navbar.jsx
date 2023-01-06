import {RiMoonFill} from "react-icons/ri"

const Navbar = () => {
    const navItems = ["Home", "Projects", "About", "content"]
  return (
    <div>
        <div className='container mx-auto flex justify-between items-center py-4'>
        <div>
           <h3 className="text-5xl font-extrabold">IJ</h3>
        </div>
        <div className='flex gap-16'>
            {navItems.map((item, index)  => (
                <ul>
                    <li key={index}>{item}</li>
                </ul>
            ))}
            <RiMoonFill/>
        </div>
        </div>
    </div>
  )
}

export default Navbar