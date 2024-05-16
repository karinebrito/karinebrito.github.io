import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const Experience = () => {
  const { t } = useTranslation()
  const [showContent, setShowContent] = useState(false)
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
    <section id="experience-section" ref={ref} className={`p-10 lg:p-20 lg:px-32 flex flex-col justify-center lg:min-h-screen transition-opacity duration-800 ease-in-out ${showContent ? "opacity-100" : "opacity-0"}`}>
      <div className="border-b border-gray-700 w-5/6 mt-10 xs:mt-12 mb-8"></div>
      <h1 className="text-4xl xs:text-xl text-white">{t('experience.experience')}</h1>
      <ol className="mt-8 grid lg:w-2/3 md:1/2">
        <a href="https://equals.com.br/" target="_blank" rel="noopener noreferrer">
          <li className="rounded-md hover:bg-gray-900 transition-colors w-full p-4 flex flex-col md:flex-row">
            <div className="flex-none lg:pr-6 md:pr-6">
              <header className="mt-1 xs:mb-4 text-xs font-semibold text-cyan-500">
                12/2022 - 04/2024
              </header>
            </div>
            <div className="flex-grow grid grid-rows-1">
              <h3 className="text-white">
                {t('experience.developer_equals')}
              </h3>
              <p className="mt-4 text-slate-400">
                 {t('experience.description_equals')}
              </p>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                <li className="mr-2 mt-2">
                  <div className="flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white">
                    Javascript
                  </div>
                </li>
                <li className="mr-2 mt-2">
                  <div className="flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white">
                    TypeScript
                  </div>
                </li>
                <li className="mr-2 mt-2">
                  <div className="flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white">
                    React
                  </div>
                </li>
                <li className="mr-2 mt-2">
                  <div className="flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white">
                    React Native
                  </div>
                </li>
                <li className="mr-2 mt-2">
                  <div className="flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white">
                    Design System
                  </div>
                </li>
                <li className="mr-2 mt-2">
                  <div className="flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white">
                    Java Server Pages
                  </div>
                </li>
                <li className="mr-2 mt-2">
                  <div className="flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white">
                    Github
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </a>
        <a href="https://tripmee.com.br/" target="_blank" rel="noopener noreferrer">
          <li className="mt-4 rounded-md hover:bg-gray-900 transition-colors w-full p-4 flex flex-col md:flex-row">
            <div className="flex-none md:pr-6">
                <header className="mt-1 xs:mb-4 text-xs font-semibold text-cyan-500">
                  10/2021 - 12/2022
                </header>
            </div>
            <div className="flex-grow grid grid-rows-1">
              <h3 className="text-white">
                {t('experience.developer_weetravel')}
              </h3>
              <p className="mt-4 text-slate-400">
                {t('experience.description_weetravel')}
              </p>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                <li className="mr-2 mt-2">
                  <div className="flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white">
                    Javascript
                  </div>
                </li>
                <li className="mr-2 mt-2">
                  <div className="flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white">
                    TypeScript
                  </div>
                </li>
                <li className="mr-2 mt-2">
                  <div className="flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white">
                    React
                  </div>
                </li>
                <li className="mr-2 mt-2">
                  <div className="flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white">
                    Styled-components
                  </div>
                </li>
                <li className="mr-2 mt-2">
                  <div className="flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white">
                    Bootstrap
                  </div>
                </li>
                <li className="mr-2 mt-2">
                  <div className="flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white">
                    Azure
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </a>
      </ol>
    </section>  
  )
}

export default Experience
