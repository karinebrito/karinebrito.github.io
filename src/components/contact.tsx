import { BsEnvelopeAt } from 'react-icons/bs'
import { FaHandPointDown } from 'react-icons/fa'

const Contact = () => {

    const openEmail = () => {
    window.location.href = 'mailto:annakarinebrito@gmail.com'
  }

  return (
    <section id='contact-section' className='flex flex-col justify-center items-center p-10 lg:p-20 lg:min-h-screen'>
        <h2 className='text-6xl md:text-4xl xs:text-xl text-white mb-4 mx-4'>Entre em contato</h2>
        <div className='mt-20 xs:mt-8'>
            <p className='text-slate-300'>
                Caso tenha alguma dúvida ou apenas queira dizer oi, farei o possível para entrar em contato com você!
            </p>
        </div>
        <div className='text-white mt-20 xs:mt-8'>
            <FaHandPointDown size={40}/>
        </div>
        <div className='text-white mt-10 cursor-pointer'>
            <BsEnvelopeAt size={40} className='hover:text-cyan-500 hover:scale-105 transition-transform duration-200 ease-in-out' onClick={openEmail}/>
        </div>
    </section>
  )
}

export default Contact
