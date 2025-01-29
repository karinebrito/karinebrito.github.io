import React, { useState } from 'react' 
import { useTranslation } from 'react-i18next' 
import { BsCodeSlash } from 'react-icons/bs' 
import { AiOutlineClose } from 'react-icons/ai' 
import { HiMenuAlt1 } from 'react-icons/hi'
import CurriculumPdf from '../../assets/resume.pdf'
import BrazilianFlag from '../../assets/brazilian-flag.svg'
import AmericanFlag from '../../assets/american-flag.svg'

const Nav = () => {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setMenuOpen] = useState(false)

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  } 

  const toggleMenu = (isOpen: boolean) => {
    if (isOpen !== isMenuOpen) {
      setMenuOpen(isOpen)
    }
  } 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault() 
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      const url = `${window.location.href.split('#')[0]}#${sectionId}`
      window.history.pushState(null, '', url)
    }
  }

  const openCurriculumPdf = () => {
    window.open(CurriculumPdf, '_blank')
  }

  const renderLanguageButtons = () => (
    <div className="flex">
      <button onClick={() => changeLanguage('pt')} className="p-2" aria-label="Change Language to Brazilian Portuguese">
        <img src={BrazilianFlag} alt="Brazilian Flag" className="transition-transform duration-300 hover:scale-110" />
      </button>
      <button onClick={() => changeLanguage('en')} className="p-2" aria-label="Change Language to English">
        <img src={AmericanFlag} alt="American Flag" className="transition-transform duration-300 hover:scale-110" />
      </button>
    </div>
  ) 

  const renderDesktopMenu = () => (
    <div className="space-x-4 text-sm">
      <div className="hidden lg:block">
        <a href="#about-section" onClick={(e) => scrollToSection('about-section', e)} className="hover:text-cyan-500 p-4 text-xl cursor-pointer">
          {t('nav.about')}
        </a>
        <a href="#experience-section" onClick={(e) => scrollToSection('experience-section', e)} className="hover:text-cyan-500 p-4 text-xl cursor-pointer">
          {t('nav.experience')}
        </a>
        <a href="#contact-section" onClick={(e) => scrollToSection('contact-section', e)} className="hover:text-cyan-500 px-3 p-4 text-xl cursor-pointer">
          {t('nav.contact')}
        </a>
        <a onClick={openCurriculumPdf} className="hover:text-cyan-500 px-3 py-2 text-xl cursor-pointer">
          {t('nav.curriculum')}
        </a>
      </div>
    </div>
  ) 

  const renderMobileMenu = () => (
    <div className="block lg:hidden">
      {isMenuOpen ? (
        <AiOutlineClose onClick={() => toggleMenu(false)} size={26} className="text-cyan-500 cursor-pointer" aria-label="Close Menu" />
      ) : (
        <HiMenuAlt1 onClick={() => toggleMenu(true)} size={26} className="text-cyan-500" aria-label="Open Menu" />
      )}
    </div>
  ) 

  const renderMobileMenuItems = () => (
    <div className="block lg:hidden">
      {isMenuOpen && (
        <div className="flex p-2">
          <ul className="flex ml-auto">
            <a href="#about-section" onClick={(e) => scrollToSection('about-section', e)}>
              <li className="hover:text-cyan-500 text-white text-xl mr-4">{t('nav.about')}</li>
            </a>
            <a href="#experience-section" onClick={(e) => scrollToSection('experience-section', e)}>
              <li className="hover:text-cyan-500 text-white text-xl mr-4">{t('nav.experience')}</li>
            </a>
            <a href="#contact-section" onClick={(e) => scrollToSection('contact-section', e)}>
              <li className="hover:text-cyan-500 text-white text-xl mr-4">{t('nav.contact')}</li>
            </a>
            <a onClick={openCurriculumPdf}>
              <li className="hover:text-cyan-500 text-white text-xl mr-8">{t('nav.curriculum')}</li>
            </a>
          </ul>
        </div>
      )}
    </div>
  )

  return (
    <div className="text-white lg:z-50 border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-slate-950 supports-backdrop-blur:bg-slate/60 sticky top-0 z-50">
      <div className="flex items-center justify-between lg:px-32 px-10 py-4 lg:flex-row">
        <div className="flex items-center">
          <div className="pt-4 pr-4 pb-4">
            <a href="#" onClick={scrollToTop}>
              <BsCodeSlash size={20} className="text-white hover:text-cyan-500" aria-label="Initial icon" />
            </a>
          </div>
          {renderLanguageButtons()}
        </div>
        {renderDesktopMenu()}
        {renderMobileMenu()}
      </div>
      {renderMobileMenuItems()}
    </div>
  )
} 

export default Nav