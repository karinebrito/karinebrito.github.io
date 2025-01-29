import { BsGithub, BsLinkedin } from 'react-icons/bs'
import HeroPic from '../../assets/photokb.jpeg'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import '../../hero.css'


const Hero = () => {
  const { t } = useTranslation() 
  const [showContent, setShowContent] = useState(false) 
  const { ref, inView } = useInView({ threshold: 0.5 }) 

  useEffect(() => {
    if (inView) setShowContent(true)
  }, [inView])

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/annakarinebrito/',
      icon: <BsLinkedin size={40} />,
    },
    {
      href: 'https://github.com/karinebrito',
      icon: <BsGithub size={40} />,
    },
  ]

  const renderSocialLinks = () => (
    <div className="flex mt-6 space-x-4 text-white">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500 hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  )

  const renderAboutSection = () => (
    <section
      id="about-section"
      ref={ref}
      className={`p-10 lg:p-20 lg:px-32 flex flex-col justify-center lg:min-h-screen transition-opacity duration-800 ease-in-out ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="border-b border-gray-700 w-5/6 mt-10 xs:mt-12 mb-8"></div>
      <h1 className="text-4xl xs:text-xl text-white lg:mr-4 mb-8">{t('hero.about')}</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        <div className="lg:col-span-2 text-slate-400">
          <p>{t('hero.description_complete')}</p>
          <div className="mt-8">
            {t('hero.weetravel_1')}
            <a
              href="https://tripmee.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-cyan-500 relative overflow-hidden hover-line"
            >
              {t('hero.weetravel_2')}
            </a>
            {t('hero.weetravel_3')}
            {t('hero.equals_1')}
            <a
              href="https://equals.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-cyan-500 relative overflow-hidden hover-line"
            >
              {t('hero.equals_2')}
            </a>
            {t('hero.equals_3')}
            {t('hero.ci&t_1')}
            <a
              href="https://ciandt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-cyan-500 relative overflow-hidden hover-line"
            >
              {t('hero.ci&t_2')}
            </a>
            {t('hero.ci&t_3')}
          </div>
          <p className="mt-8">{t('hero.focus')}</p>
        </div>
        <div className="lg:col-span-2 md:col-span-1">
          <div className="relative group">
            <div className="absolute inset-0 lg:w-2/4 md:w-2/4 xs:mx-auto lg:m-0 rounded-full transition-all duration-500 ease-in-out"></div>
            <img
              src={HeroPic}
              alt="Karine Photo"
              className="w-full h-full object-cover lg:w-2/4 md:w-2/4 xs:w-fit xs:mx-auto lg:m-0 rounded-full 
              transition-transform duration-500 ease-in-out transform 
              hover:rotate-6 hover:scale-110 
              hover:shadow-[0_0_15px_5px_rgba(0,255,255,0.7)]"
              style={{ aspectRatio: '1 / 1' }}
            />
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <>
      <section className="flex justify-center items-center p-10 lg:p-20 lg:px-32 lg:min-h-screen">
        <div className="md:w-full xs:w-full">
          <h1 className="mt-4 text-lg xs:text-4xl text-white">{t('hero.name')}</h1>
          <h2 className="mt-4 text-lg xs:text-xl text-white">{t('hero.developer')}</h2>
          <h3 className="mt-4 text-sm max-w text-slate-400">{t('hero.description_resume')}</h3>
          {renderSocialLinks()}
        </div>
      </section>
      {renderAboutSection()}
    </>
  )
}

export default Hero 