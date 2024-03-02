/* eslint-disable no-unused-vars */
import Navbar from './components/Navbar/Navbar.jsx'
import About from './components/About/About.jsx'
import Data from './components/Data/Data.jsx'
import Skills from './components/Skills/Skills.jsx'
import Work from './components/Work/Work.jsx'
import Certificate from './components/Certificates/Certificate.jsx'
import Footer from './components/Footer/Footer.jsx'


import './App.css'

function App() {
  return (
    <>
     <Navbar />
     <About />
     <Data />
     <Skills/>
     <Work />
     <Certificate />
     <Footer />
    </>
  )
}

export default App
