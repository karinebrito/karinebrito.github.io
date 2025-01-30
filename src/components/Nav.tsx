import React, { useState } from 'react' 
import { useTranslation } from 'react-i18next' 
import { BsArrowUpSquare } from 'react-icons/bs' 
import { AiOutlineClose } from 'react-icons/ai' 
import { HiMenuAlt1 } from 'react-icons/hi'
import CurriculumPdf from '../../assets/resume.pdf'
import BrazilianFlag from '../../assets/brazilian-flag.svg'
import AmericanFlag from '../../assets/american-flag.svg'


const Nav = () => {
  const { t, i18n } = useTranslation()
  const [toggle, setToggle] = useState(false)

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  function toggleMenu(isOpen: boolean) {
    if (isOpen !== toggle) {
      setToggle(isOpen)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function scrollToSection(sectionId: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault()
  
  const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      const url = window.location.href.split('#')[0] + '#' + sectionId
      window.history.pushState(null, '', url)
    }
  }

  const openCurriculumPdf = () => {
    window.open(CurriculumPdf, "_blank")
  }

  const MenuItem = ({ sectionId, label }: { sectionId: string; label: string }) => (
    <a href={`#${sectionId}`} onClick={(e) => scrollToSection(sectionId, e)} className="hover:text-cyan-500 p-4 text-x1 cursor-pointer">
      {t(label)}
    </a>
  )

  const LanguageButton = ({ lang, flag, alt }: { lang: string; flag: string; alt: string }) => (
    <button onClick={() => changeLanguage(lang)} className="p-2" aria-label={`Change Language to ${alt}`}>
      <img src={flag} alt={alt} className="transition-transform duration-300 transform hover:scale-110" />
    </button>
  )

  return (
    <>
      <div className='text-white lg:z-50 border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-slate-950 supports-backdrop-blur:bg-slate/60 sticky top-0 z-50'>
        <div className="flex items-center justify-between lg:px-32 px-10 py-4 lg:flex-row">
          <div className="flex items-center">
            <div className='pt-4 pr-4 pb-4'>
              <a href="#" onClick={scrollToTop}>
                <BsArrowUpSquare  size={20} className="text-white hover:text-cyan-500" aria-label="Initial icon"/>
              </a>
            </div>
            <div className="flex">
              <LanguageButton lang="pt" flag={BrazilianFlag} alt="Brazilian Portuguese" />
              <LanguageButton lang="en" flag={AmericanFlag} alt="English" />
            </div>
          </div>
          <div className="space-x-4 text-md">
            <div className="xs:hidden md:hidden lg:block">
              <MenuItem sectionId="about-section" label="nav.about" />
              <MenuItem sectionId="experience-section" label="nav.experience" />
              <MenuItem sectionId="contact-section" label="nav.contact" />
              <a onClick={openCurriculumPdf} className="hover:text-cyan-500 px-3 py-2 text-x1 cursor-pointer">{t('nav.curriculum')}</a>
            </div>
            <div className="xs:block md:block lg:hidden">
              {toggle ? (
                <AiOutlineClose onClick={() => toggleMenu(false)} size={26} className="text-cyan-500 cursor-pointer" aria-label="Close Menu"/>
              ) : (
                <HiMenuAlt1 onClick={() => toggleMenu(true)} size={26} className="text-cyan-500" aria-label="Open Menu"/>
              )}
            </div>
          </div>
        </div>
        <div className="xs:block md:block lg:hidden xs:text-xs">
          {toggle ? (
            <div className="flex p-2">
              <ul className="flex ml-auto">
              <a href="#about-section" onClick={(e) => scrollToSection('about-section', e)}>
               <li className="hover:text-cyan-500 text-white text-x1 mr-4">{t('nav.about')}</li>
              </a>
              <a href="#experience-section" onClick={(e) => scrollToSection('experience-section', e)}>
                <li className="hover:text-cyan-500 text-white text-x1 mr-4">{t('nav.experience')}</li>
              </a>
              <a href="#contact-section" onClick={(e) => scrollToSection('contact-section', e)}>
                <li className="hover:text-cyan-500 text-white text-x1 mr-4">{t('nav.contact')}</li>
              </a>
              <a onClick={openCurriculumPdf}>
                <li className="hover:text-cyan-500 text-white text-x1 mr-8">{t('nav.curriculum')}</li>
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