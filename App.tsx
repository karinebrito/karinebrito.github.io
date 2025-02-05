import Nav from './src/components/Nav.tsx'
import Hero from './src/components/Hero.tsx'
import Experience from './src/components/Experience.tsx'
import Contact from './src/components/Contact.tsx'
import './src/i18n.tsx'

function App() {
  return (
    <>
      <div className='bg-slate-950'>
        <Nav />
        <div id="main-content">
          <Hero />
          <Experience />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
