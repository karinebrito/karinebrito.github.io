import { BsGithub, BsLinkedin } from 'react-icons/bs'
import HeroPic from '../../assets/photokb.jpeg'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className='flex justify-center items-center p-10 lg:p-20 lg:px-32 lg:min-h-screen'>
        <div className='md:w-full xs:w-full'>
            <div>
              <h1 className='text-3xl md:text-2xl xs:text-xl text-cyan-500'>{t('hero.hi_my_name')}</h1>
            </div>
            <div>
              <h2 className='mt-4 text-8xl md:text-6xl xs:text-4xl text-white'>{t('hero.name')}</h2>
            </div>
            <div>
              <h3 className='mt-4 text-xl xs:text-lg text-slate-300'>
              {t('hero.description_resume')}
              </h3>
            </div>
            <div className='flex mt-10 space-x-4 text-white cursor-pointer'>
            <a href='https://www.linkedin.com/in/annakarinebrito/' target='_blank' rel='noopener noreferrer'>
              <BsLinkedin size={40} className='hover:text-cyan-500 hover:scale-105 transition-transform duration-200 ease-in-out'/>
            </a>
            <a href='https://github.com/karinebrito' target='_blank' rel='noopener noreferrer'>
              <BsGithub size={40} className='hover:text-cyan-500 hover:scale-105 transition-transform duration-200 ease-in-out'/>
            </a>
            </div>        
        </div>
      </section>

      <section id='about-section' className='p-10 lg:p-20 lg:px-32 lg:min-h-screen'>
        <div className='border-b border-gray-700 w-5/6 mt-10 mb-8'></div>
        <h1 className='text-4xl xs:text-2xl text-white lg:mr-4 mb-8'>{t('hero.about')}</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
          <div className='lg:col-span-2 text-slate-300'>
            <p>{t('hero.description_complete')}</p>
            {[
              { label: t('hero.startup_1'), link: 'https://tripmee.com.br/', linkText: t('hero.startup_2') },
              { label: t('hero.company_1'), link: 'https://equals.com.br/', linkText: t('hero.company_2') },
            ].map(({ label, link, linkText }, index) => (
              <p key={index} className='mt-8'>
                {label} <a href={link} target='_blank' rel='noopener noreferrer' className='text-cyan-500 hover:underline'>{linkText}</a> {t(`hero.${index === 0 ? 'startup_3' : 'company_3'}`)}
              </p>
            ))}
            <p className='mt-8'>{t('hero.focus')}</p>
          </div>
          <div className='lg:col-span-2 md:col-span-1'>
            <div className='relative'>
              <div className={`absolute inset-0 bg-cyan-900 opacity-75 lg:w-1/2 md:w-2/4 xs:mx-auto lg:m-0 rounded-md ${'hover:hidden'}`}></div>
              <img src={HeroPic} alt='Karine Photo' className='lg:w-1/2 md:w-2/4 xs:w-fit xs:mx-auto lg:m-0 hover:scale-105 transition-transform duration-200 ease-in-out rounded-md'/>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Hero
