import { BsCodeSlash } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt1 } from 'react-icons/hi'
import ResumePdf from '../../assets/resume.pdf'
import BrazilianFlag from '../../assets/brazil.png'
import AmericanFlag from '../../assets/american.png'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Nav = () => {
  const { t, i18n } = useTranslation()
  const [toggle, setToggle] = useState(false)
  const [isNavbarFixed, setIsNavbarFixed] = useState(false)

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  function toggleMenu(isOpen: boolean) {
    if (isOpen !== toggle) {
      setToggle(isOpen)
    }
  }

  function scrollToSection(sectionId: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
  
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const openResumePdf = () => {
    window.open(ResumePdf, '_blank')
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarFixed(window.scrollY > 0)
    }
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  

  return (
    <>
      <div className={`font-roboto text-white transition duration-500 ${isNavbarFixed ? 'sticky top-0 bg-black z-50' : ''}`}>
        <div className='flex items-center justify-between px-8 py-4 lg:flex-row'>
          <div className='flex items-center'>
            <div>
              <BsCodeSlash size={26} className='text-white'/>
            </div>
            <div className='ml-10 mt-2'>
              <button onClick={() => changeLanguage('pt')} className='mr-4'>
                <img src={BrazilianFlag} alt='Brazilian Flag' className='transition-transform duration-300 transform hover:scale-110' />
              </button>
              <button onClick={() => changeLanguage('en')}>
                <img src={AmericanFlag} alt='American Flag' className='transition-transform duration-300 transform hover:scale-110' />
              </button>
            </div>
          </div>
          <div className='space-x-4 text-3x1'>
            <div className='xs:hidden md:hidden lg:block space-x-2'>
              <a href='#' onClick={(e) => scrollToSection('about-section', e)} className='hover:text-cyan-500 px-3 py-2 text-x1 cursor-pointer'>{t('nav.about')}</a>
              <a href='#' onClick={(e) => scrollToSection('experience-section', e)} className='hover:text-cyan-500 px-3 py-2 text-x1 cursor-pointer'>{t('nav.experience')}</a>
              <a href='#' onClick={(e) => scrollToSection('contact-section', e)} className='hover:text-cyan-500 px-3 py-2 text-x1 cursor-pointer'>{t('nav.contact')}</a>
              <a onClick={openResumePdf} className='hover:text-cyan-500 px-3 py-2 text-x1 cursor-pointer'>{t('nav.resume')}</a>
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
        <div className='xs:block md:block lg:hidden xs:text-xs'>
          {toggle ? (
            <div className='flex p-2'>
              <ul className='flex ml-auto'>
              <a href='#' onClick={(e) => scrollToSection('about-section', e)}>
               <li className='hover:text-cyan-500 text-white text-x1 mr-4'>{t('nav.about')}</li>
              </a>
              <a href='#' onClick={(e) => scrollToSection('experience-section', e)}>
                <li className='hover:text-cyan-500 text-white text-x1 mr-4'>{t('nav.experience')}</li>
              </a>
              <a href='#' onClick={(e) => scrollToSection('contact-section', e)}>
                <li className='hover:text-cyan-500 text-white text-x1 mr-4'>{t('nav.contact')}</li>
              </a>
              <a onClick={openResumePdf}>
                <li className='hover:text-cyan-500 text-white text-x1 mr-8'>{t('nav.resume')}</li>
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
  