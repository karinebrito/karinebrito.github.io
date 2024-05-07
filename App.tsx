import Nav from './src/components/nav.tsx'
import Hero from './src/components/hero.tsx'
import Experience from './src/components/experience.tsx'
import Contact from './src/components/contact.tsx'
import Footer from './src/components/footer.tsx'
import './src/i18n.tsx'

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
