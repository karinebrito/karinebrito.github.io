import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const { t } = useTranslation() 
  const [showContent, setShowContent] = useState(false) 
  const { ref, inView } = useInView({ threshold: 0.5 }) 

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShowContent(true) 
      }, 200)

      return () => clearTimeout(timer)
    }
  }, [inView])

  const experiences = [
    {
      period: `08/2024 -  ${t('experience.period_present')}`,
      title: t('experience.developer_ci&t'),
      description: t('experience.description_ci&t'),
      link: 'https://ciandt.com/',
      technologies: [
        'Javascript',
        'TypeScript',
        'React',
        'GitLab',
        'React Testing',
        'Jest',
        'Design System'
      ],
    },
    {
      period: '12/2022 - 04/2024',
      title: t('experience.developer_equals'),
      description: t('experience.description_equals'),
      link: 'https://equals.com.br/',
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
      period: '10/2021 - 12/2022',
      title: t('experience.developer_weetravel'),
      description: t('experience.description_weetravel'),
      link: 'https://tripmee.com.br/',
      technologies: [
        'Javascript',
        'TypeScript',
        'React',
        'Styled-components',
        'Bootstrap',
        'Azure',
      ],
    }
  ]

  const renderTechnologyBadge = (technology: string) => (
    <li key={technology} className="mr-2 mt-2">
      <div className="flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white">
        {technology}
      </div>
    </li>
  )

  const renderExperienceItem = (experience: typeof experiences[0]) => (
    <a
      key={experience.link}
      href={experience.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <li className="mt-4 rounded-md hover:bg-gray-900 transition-colors duration-300 w-full p-4 flex flex-col md:flex-row">
        <div className="flex-none md:pr-6 min-w-[160px]">
          <header className="mt-1 xs:mb-4 text-xs font-semibold text-cyan-500">
            {experience.period}
          </header>
        </div>
        <div className="flex-grow grid grid-rows-1">
          <h3 className="text-white">{experience.title}</h3>
          <p className="mt-4 text-slate-400">{experience.description}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {experience.technologies.map(renderTechnologyBadge)}
          </ul>
        </div>
      </li>
    </a>
  )

  return (
    <section
      id="experience-section"
      ref={ref}
      className={`p-10 lg:p-20 lg:px-32 flex flex-col justify-center lg:min-h-screen transition-opacity duration-800 ease-in-out ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="border-b border-gray-700 w-5/6 mt-10 xs:mt-12 mb-8"></div>
      <h1 className="text-4xl xs:text-xl text-white">{t('experience.experience')}</h1>
      <ol className="mt-8 grid lg:w-2/3 md:1/2">
        {experiences.map(renderExperienceItem)}
      </ol>
    </section>
  )
}

export default Experience