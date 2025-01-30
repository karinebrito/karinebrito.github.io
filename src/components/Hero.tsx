import { BsGithub, BsLinkedin, BsFillEnvelopeAtFill} from 'react-icons/bs'
import HeroPic from '../../assets/photokb.jpeg'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import '../../hero.css'

const Hero = () => {
  const { t } = useTranslation();

  const [showHero, setShowHero] = useState(false);
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (heroInView) {
      setShowHero(true)
    }
  }, [heroInView])

  const [showAbout, setShowAbout] = useState(false);
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (aboutInView) {
      setShowAbout(true)
    }
  }, [aboutInView])

  const openEmail = () => {
    window.location.href = 'mailto:annakarinebrito@gmail.com'
  }

  return (
    <>
      <section
        ref={heroRef}
        className={`flex justify-center items-center p-10 lg:p-20 lg:px-32 lg:min-h-screen transition-opacity transition-transform duration-1000 ease-out ${
          showHero ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
        }`}
      >
      <div className="md:w-full xs:w-full">
          <div>
            <h1 className="mt-4 text-lg md:text-2xl lg:text-4xl text-white">{t('hero.name')}</h1>
          </div>
          <h2 className="mt-4 text-lg md:text-2xl lg:text-4x text-white">
          {t('hero.developer')}
          </h2>
          <div>
            <h3 className="mt-4 text-sm max-w text-slate-400">
              {t('hero.description_resume')}
            </h3>
          </div>
          <div className="flex mt-6 space-x-4 text-white">
          <a href="https://www.linkedin.com/in/annakarinebrito/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={40} className="hover:text-cyan-500 hover:scale-125 transition-transform duration-200 ease-in-out cursor-pointer"/>
          </a>
          <a href="https://github.com/karinebrito" target="_blank" rel="noopener noreferrer">
            <BsGithub size={40} className="hover:text-cyan-500 hover:scale-125 transition-transform duration-200 ease-in-out cursor-pointer"/>
          </a>
          
          <a href="https://github.com/karinebrito" target="_blank" rel="noopener noreferrer">
            <BsFillEnvelopeAtFill
              size={40} 
              onClick={openEmail} 
              className="hover:text-cyan-500 hover:scale-125 transition-transform duration-200 ease-in-out cursor-pointer"
            />
          </a>
          </div>        
      </div>
      </section>

      <section
        id="about-section"
        ref={aboutRef}
        className={`p-10 lg:p-20 lg:px-32 flex flex-col justify-center lg:min-h-screen transition-opacity transition-transform duration-1000 ease-out ${
          showAbout ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
        }`}
      >
        <div className="border-b border-gray-700 w-5/6 mt-10 xs:mt-12 mb-8"></div>
        <h1 className="text-4xl xs:text-xl text-white lg:mr-4 mb-8">{t('hero.about')}</h1>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="lg:col-span-2 text-slate-400">
            <p>{t('hero.description_complete')}</p>
            <p className="mt-8">
              <span>{t('hero.weetravel_1')}</span>
              <span> 
                <a href="https://tripmee.com.br/" target="_blank" rel="noopener noreferrer" className="ml-1 text-cyan-500 relative overflow-hidden hover-line">
                {t('hero.weetravel_2')}
                </a> 
              </span>
              <span>{t('hero.weetravel_3')}</span>
              
              <span>{t('hero.equals_1')}</span>
              <span>
                <a href="https://equals.com.br/" target="_blank" rel="noopener noreferrer" className="ml-1 text-cyan-500 relative overflow-hidden hover-line">
                  {t('hero.equals_2')}
                </a>
              </span>
              <span>
              {t('hero.equals_3')}
              </span>

              <span>{t('hero.ci&t_1')}</span>
              <span>
                <a href="https://ciandt.com/" target="_blank" rel="noopener noreferrer" className="ml-1 text-cyan-500 relative overflow-hidden hover-line">
                  {t('hero.ci&t_2')}
                </a>
              </span>
              <span>
              {t('hero.ci&t_3')}
              </span>
            </p>
            <p className="mt-8">{t('hero.focus')}</p>
          </div>
          
          <div className="lg:col-span-2 md:col-span-1">
            <div className="relative">
              <div className={`absolute inset-0 bg-cyan-900 opacity-75 lg:w-2/4 md:w-2/4 xs:mx-auto lg:m-0 rounded-full ${"hover:hidden"}`}></div>
              <img src={HeroPic} 
                alt="Karine Photo" 
                className="w-full h-full object-cover lg:w-2/4 md:w-2/4 xs:w-fit xs:mx-auto lg:m-0 hover:scale-105 transition-transform duration-200 ease-in-out rounded-full" 
                style={{ aspectRatio: '1 / 1' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero