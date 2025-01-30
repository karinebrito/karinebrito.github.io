import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'


const Experience = () => {
  const { t } = useTranslation();
  const [showContent, setShowContent] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      setTimeout(() => setShowContent(true), 200)
    }
  }, [inView])

  const experiences = [
    {
      company: 'CI&T',
      url: 'https://ciandt.com/',
      period: `08/2024 - ${t('experience.period_present')}`,
      titleKey: 'experience.developer_ci&t',
      descriptionKey: 'experience.description_ci&t',
      technologies: [
        'Javascript',
        'TypeScript',
        'React',
        'React Testing',
        'Jest',
        'Design System',
        'GitLab',
      ],
    },
    {
      company: 'Equals',
      url: 'https://equals.com.br/',
      period: '12/2022 - 04/2024',
      titleKey: 'experience.developer_equals',
      descriptionKey: 'experience.description_equals',
      technologies: [
        'Javascript',
        'TypeScript',
        'React',
        'React Native',
        'Design System',
        'Java Server Pages',
        'Github',
      ],
    },
    {
      company: 'WeeTravel',
      url: 'https://tripmee.com.br/',
      period: '10/2021 - 12/2022',
      titleKey: 'experience.developer_weetravel',
      descriptionKey: 'experience.description_weetravel',
      technologies: [
        'Javascript',
        'TypeScript',
        'React',
        'Styled-components',
        'Bootstrap',
        'Azure',
      ],
    },
  ]

  return (
    <section
      id="experience-section"
      ref={ref}
      className={`p-10 lg:p-20 lg:px-32 flex flex-col justify-center lg:min-h-screen transition-opacity duration-800 ease-in-out transform ${
        showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
      }`}
      style={{ transition: "opacity 0.8s ease-out, transform 1s ease-out" }}
    >
      <div className="border-b border-gray-700 w-5/6 mt-10 xs:mt-12 mb-8"></div>
      <h1 className="text-4xl xs:text-xl text-white">{t('experience.experience')}</h1>
      <ol className="mt-8 grid lg:w-2/3 md:w-1/2">
        {experiences.map(({ company, url, period, titleKey, descriptionKey, technologies }) => (
          <a key={company} href={url} target="_blank" rel="noopener noreferrer">
            <li className="mt-4 rounded-md hover:bg-gray-900 transition-colors w-full p-4 flex flex-col md:flex-row">
              <div className="flex-none w-36 md:pr-6">
                <header className="mt-1 xs:mb-4 text-xs font-semibold text-cyan-500">{period}</header>
              </div>

              <div className="flex-grow min-w-0">
                <h3 className="text-white">{t(titleKey)}</h3>
                <p className="mt-4 text-slate-400">{t(descriptionKey)}</p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  {technologies.map((tech) => (
                    <li key={tech} className="mr-2 mt-2">
                      <div className="flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white">{tech}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </a>
        ))}
      </ol>
    </section>
  )
}

export default Experience