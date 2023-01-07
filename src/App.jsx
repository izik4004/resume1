import About from "./components/About"
import Contact from "./components/Contact"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

function App() {

  return (
    <div className="app">
        <Navbar/>
        <HeroSection/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default App
