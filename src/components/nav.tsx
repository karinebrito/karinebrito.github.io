import { BsCodeSlash } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt1 } from 'react-icons/hi'
import ResumePdf from '../../assets/resume.pdf'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Nav = () => {
  const { i18n } = useTranslation()
  const [toggle, setToggle] = useState(false)

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    console.log("Current language:", i18n.language)
    console.log("Changing language to:", language)
  }

  function toggleMenu(isOpen: boolean) {
    if (isOpen !== toggle) {
      setToggle(isOpen)
    }
  }

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId)
  
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openResumePdf = () => {
    window.open(ResumePdf, '_blank')
  }

  return (
    <>
      <div className='font-roboto text-white'>
        <div className='flex items-center justify-between p-10 lg:flex-row'>
          <div>
            <BsCodeSlash size={26} className='text-white'/>
          </div>
          <div>
            <button onClick={() => changeLanguage('pt')} className='mr-8'>Português</button>
            <button onClick={() => changeLanguage('en')}>Inglês</button>
          </div>
          <div className='space-x-4 text-3x1'>
            <div className='xs:hidden md:hidden lg:block space-x-2'>
              <a href='#' onClick={() => scrollToSection('about-section')} className='hover:text-cyan-500 px-3 py-2 text-x1 cursor-pointer'>Sobre</a>
              <a href='#' onClick={() => scrollToSection('experience-section')} className='hover:text-cyan-500 px-3 py-2 text-x1 cursor-pointer'>Experiência</a>
              <a href='#' onClick={() => scrollToSection('contact-section')} className='hover:text-cyan-500 px-3 py-2 text-x1 cursor-pointer'>Contato</a>
              <a onClick={openResumePdf} className='hover:text-cyan-500 px-3 py-2 text-x1 cursor-pointer'>Resumo</a>
            </div>
            <div className='xs:block md:block lg:hidden'>
              {toggle ? (
                <AiOutlineClose onClick={() => toggleMenu(false)} size={26} className='text-cyan-500 cursor-pointer'/>
              ) : (
                <HiMenuAlt1 onClick={() => toggleMenu(true)} size={26} className='text-cyan-500'/>
              )}
            </div>
          </div>
        </div>
        <div className='xs:block md:block lg:hidden'>
          {toggle ? (
            <div className='flex p-10'>
              <ul className='ml-auto'>
              <a href='#' onClick={() => scrollToSection('about-section')}>
               <li className='hover:text-cyan-500 text-white text-x1 mb-2'>Sobre</li>
              </a>
              <a href='#' onClick={() => scrollToSection('experience-section')}>
                <li className='hover:text-cyan-500 text-white text-x1 mb-2'>Experiência</li>
              </a>
              <a href='#' onClick={() => scrollToSection('contact-section')}>
                <li className='hover:text-cyan-500 text-white text-x1 mb-2'>Contato</li>
              </a>
              <a onClick={openResumePdf}>
                <li className='hover:text-cyan-500 text-white text-x1 mb-2'>Resumo</li>
              </a>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  )
}

export default Nav
  