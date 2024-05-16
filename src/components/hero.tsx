import { BsGithub, BsLinkedin } from 'react-icons/bs'
import HeroPic from '../../assets/photokb.jpeg'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import '../../hero.css'

const Hero = () => {
  const { t } = useTranslation()
  const [showContent, setShowContent] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      setShowContent(true)
    }
  }, [inView])

  return (
    <>
      <section className="flex justify-center items-center p-10 lg:p-20 lg:px-32 lg:min-h-screen">
        <div className="md:w-full xs:w-full">
            <div>
              <h1 className="mt-4 text-5xl xs:text-5xl text-white">{t('hero.name')}</h1>
            </div>
            <h2 className="mt-4 text-lg xs:text-xl text-white">
              {t('hero.developer')}
            </h2>
            <div>
              <h3 className="mt-4 max-w text-slate-400">
                {t('hero.description_resume')}
              </h3>
            </div>
            <div className="flex mt-6 space-x-4 text-white cursor-pointer">
            <a href="https://www.linkedin.com/in/annakarinebrito/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin size={40} className="hover:text-cyan-500 hover:scale-105 transition-transform duration-200 ease-in-out"/>
            </a>
            <a href="https://github.com/karinebrito" target="_blank" rel="noopener noreferrer">
              <BsGithub size={40} className="hover:text-cyan-500 hover:scale-105 transition-transform duration-200 ease-in-out"/>
            </a>
            </div>        
        </div>
      </section>

      <section id="about-section" ref={ref} className={`p-10 lg:p-20 lg:px-32 flex flex-col justify-center lg:min-h-screen transition-opacity duration-800 ease-in-out ${showContent ? "opacity-100" : "opacity-0"}`}>
        <div className="border-b border-gray-700 w-5/6 mt-10 mb-8"></div>
        <h1 className="text-4xl xs:text-2xl text-white lg:mr-4 mb-8">{t('hero.about')}</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="lg:col-span-2 text-slate-400">
            <p>{t('hero.description_complete')}</p>
            <p className="mt-8">
              <span>{t('hero.startup_1')}</span>
              <span> 
                <a href="https://tripmee.com.br/" target="_blank" rel="noopener noreferrer" className="mx-2 text-cyan-500 relative overflow-hidden hover-line">
                {t('hero.startup_2')}
                </a> 
              </span>
              <span>{t('hero.startup_3')}</span>
              <span>{t('hero.company_1')}</span>
              <span>
                <a href="https://equals.com.br/" target="_blank" rel="noopener noreferrer" className="mx-2 text-cyan-500 relative overflow-hidden hover-line">
                  {t('hero.company_2')}
                </a>
              </span>
              <span>
              {t('hero.company_3')}
              </span>
              <span>
              {t('hero.company_4')}
              </span>
            </p>
            <p className="mt-8">{t('hero.focus')}</p>
          </div>
          <div className="lg:col-span-2 md:col-span-1">
            <div className="relative">
              <div className={`absolute inset-0 bg-cyan-900 opacity-75 lg:w-2/4 md:w-2/4 xs:mx-auto lg:m-0 rounded-full ${"hover:hidden"}`}></div>
              <img src={HeroPic} alt="Karine Photo" className="w-full h-full object-cover lg:w-2/4 md:w-2/4 xs:w-fit xs:mx-auto lg:m-0 hover:scale-105 transition-transform duration-200 ease-in-out rounded-full" style={{ aspectRatio: '1 / 1' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
