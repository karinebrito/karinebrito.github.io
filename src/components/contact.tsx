import { useTranslation } from 'react-i18next'
import Footer from './footer'

const Contact = () => {
    const { t } = useTranslation()

    const openEmail = () => {
    window.location.href = 'mailto:annakarinebrito@gmail.com'
  }

  return (
    <section id='contact-section' className='bg-gray-900 flex flex-col justify-center items-left p-10 lg:px-32'>
        <h2 className='text-xl text-white xs:mt-20' >{t('contact.contact_me')}</h2>
        <div className='xs:mt-4'>
            <p className='text-slate-300'>
            {t('contact.doubt')}
            </p>
        </div>
        <div>
            <button onClick={openEmail} className='mt-4 p-4 text-white border-2 rounded-md transition-transform transform hover:scale-110'>
                Diga Oi!
            </button>
            <div className='mt-20'>
                <Footer />
            </div>
        </div>
    </section>
  )
}

export default Contact
