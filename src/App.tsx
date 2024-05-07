import Nav from './components/nav.tsx'
import Hero from './components/hero.tsx'
import Experience from './components/experience.tsx'
import Contact from './components/contact.tsx'
import Footer from './components/footer.tsx'
import './i18n.tsx'

function App() {
  return (
    <>
      <div className='bg-black'>
        <Nav />
        <Hero />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
