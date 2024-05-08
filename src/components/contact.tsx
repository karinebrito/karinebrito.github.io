import { BsEnvelopeAt } from 'react-icons/bs'
import { FaHandPointDown } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const { t } = useTranslation()

    const openEmail = () => {
    window.location.href = 'mailto:annakarinebrito@gmail.com'
  }

  return (
    <section id='contact-section' className='flex flex-col justify-center items-center p-10 lg:p-20 lg:min-h-screen'>
        <h2 className='text-6xl md:text-4xl xs:text-xl text-white mb-4 mx-4'>{t('contact.contact_me')}</h2>
        <div className='mt-20 xs:mt-8'>
            <p className='text-slate-300'>
            {t('contact.doubt')}
            </p>
        </div>
        <div className='text-white mt-20 xs:mt-8'>
            <FaHandPointDown size={40}/>
        </div>
        <div className='text-white mt-10 cursor-pointer'>
            <BsEnvelopeAt size={80} className='hover:text-cyan-500 hover:scale-105 transition-transform duration-200 ease-in-out' onClick={openEmail}/>
        </div>
    </section>
  )
}

export default Contact
