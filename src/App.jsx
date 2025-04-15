import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Contact from './Components/Contact'

function App() {
 
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
   
<Navbar/>
  <Home/>
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
  <Footer/>
    </div>
  )
}

export default App
