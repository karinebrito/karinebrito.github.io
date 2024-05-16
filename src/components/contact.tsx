import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Footer from './footer'

const Contact = () => {
    const { t } = useTranslation()
    const [showContent, setShowContent] = useState(false)

    const openEmail = () => {
    window.location.href = "mailto:annakarinebrito@gmail.com"
    }

    const { ref, inView } = useInView({
    threshold: 0.5,
    })

    useEffect(() => {
        if (inView) {
        setTimeout(() => {
            setShowContent(true)
        }, 200)
        }
    }, [inView])

    return (
        <section id="contact-section" ref={ref} className="bg-gray-900">
            <div className={`flex flex-col justify-center items-center p-10 lg:px-32 transition-opacity duration-800 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="text-xl text-white xs:mt-20" >{t('contact.contact_me')}</h2>
                <div className="xs:mt-4">
                    <p className="text-slate-300">
                    {t('contact.doubt')}
                    </p>
                </div>
                <div className="flex flex-col">
                    <button onClick={openEmail} className="mt-4 p-4 text-white border-2 rounded-md transition-transform transform hover:scale-110">
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
