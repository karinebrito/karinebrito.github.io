import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next' 
import { useInView } from 'react-intersection-observer' 
import Footer from './Footer' 

const Contact = () => {
  const { t } = useTranslation() 
  const [showContent, setShowContent] = useState(false) 
  const { ref, inView } = useInView({ threshold: 0.3 }) 

  const openEmail = () => {
    window.location.href = 'mailto:annakarinebrito@gmail.com'
  }

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 200)

      return () => clearTimeout(timer)
    }
  }, [inView])

  return (
    <section id="contact-section" ref={ref} className="bg-slate-900">
      <div
        className={`flex flex-col justify-center items-center text-center lg:text-justify p-10 lg:px-32 transition-opacity duration-800 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2 className="text-xl text-white xs:mt-40">{t('contact.contact_me')}</h2>
        <div className="mt-4 text-slate-400">
          <p>{t('contact.doubt')}</p>
        </div>
        <div className="flex flex-col">
          <button
            onClick={openEmail}
            className="mt-4 p-2 text-sm text-white rounded border-2 transition-transform transform hover:scale-110"
          >
            {t('contact.say_hello')}
          </button>
          <div className="mt-20">
            <Footer />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact