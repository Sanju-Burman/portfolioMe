// import { useState } from 'react'
import Navbar from './components/navbars/navbar'
// import Intro from './components/intro/intro'
import Skills from './components/skills/skills'
import Education from './components/educations/education'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'
import { ContactMe } from './components/contact/ContactMe'
import Home from './components/home/Home'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Navbar />
        <Home />
        {/* <Intro /> */}
        <Skills />
        <Projects />
        <Education />
        <ContactMe />
        <Footer />
      </div>
    </>
  )
}

export default App
