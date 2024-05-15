import { BsEnvelopeAt } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import Footer from './footer'

const Contact = () => {
    const { t } = useTranslation()

    const openEmail = () => {
    window.location.href = 'mailto:annakarinebrito@gmail.com'
  }

  return (
    <section id='contact-section' className='flex flex-col justify-center items-left p-10 lg:px-32 lg:min-h-screen'>
        <h2 className='text-xl text-white mb-4 xs:mt-20' >{t('contact.contact_me')}</h2>
        <div className='xs:mt-4'>
            <p className='text-slate-300'>
            {t('contact.doubt')}
            </p>
        </div>
        <div className='text-white mt-2 cursor-pointer'>
            <BsEnvelopeAt size={60} className='hover:text-cyan-500 hover:scale-105 transition-transform duration-200 ease-in-out' onClick={openEmail}/>
        </div>
        <div className='mt-20'>
            <Footer />
        </div>
    </section>
  )
}

export default Contact
