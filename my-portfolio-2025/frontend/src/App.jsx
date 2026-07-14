import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import ContactMe from './components/Contact/ContactMe'

function App() {
  return (
    <>
      <div className='App'>
        <div className="shooting-star"></div>
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <ContactMe />
        <Footer />
      </div>
    </>
  )
}

export default App
