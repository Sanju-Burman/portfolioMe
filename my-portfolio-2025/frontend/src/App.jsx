import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import ContactMe from './components/Contact/ContactMe'

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Home />
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
