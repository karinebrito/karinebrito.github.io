
const Experience = () => {
  return (
    <section id='experience-section' className='p-10 lg:p-20 lg:pl-64 lg:min-h-screen'>
      <div className='border-b border-gray-300 mb-8 w-5/6'></div>
      <h1 className='text-4xl xs:text-2xl text-white'>Experiência</h1>
      <ol className='mt-8 grid lg:w-2/3 md:1/2'>
        <li className='rounded-md hover:bg-gray-900 transition-colors w-full p-4 flex flex-col md:flex-row'>
          <div className='flex-none lg:pr-6 md:pr-6'>
            <header className='mt-1 xs:mb-4 text-xs font-semibold text-cyan-500'>
              12/2022 - 04/2024
            </header>
          </div>
          <div className='flex-grow grid grid-rows-1'>
            <h3 className='text-white'>
              Desenvolvedora Front-end | Equals - Gestão Financeira Inteligente
            </h3>
            <p className='mt-4 text-slate-300'>
              Responsável pela manutenção e a migração de tecnologia de uma plataforma web de conciliação de vendas com cartão de crédito, 
              débito, boleto e outros meios de pagamento online, com o intuito de fornecer um acesso prático e intuitivo ao usuário.
            </p>
            <ul className='mt-2 flex flex-wrap' aria-label='Tecnologias utilizadas'>
              <li className='mr-2 mt-2'>
                <div className='flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white'>
                  Javascript
                </div>
              </li>
              <li className='mr-2 mt-2'>
                <div className='flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white'>
                  TypeScript
                </div>
              </li>
              <li className='mr-2 mt-2'>
                <div className='flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white'>
                  React
                </div>
              </li>
              <li className='mr-2 mt-2'>
                <div className='flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white'>
                  React Native
                </div>
              </li>
              <li className='mr-2 mt-2'>
                <div className='flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white'>
                  Design System
                </div>
              </li>
              <li className='mr-2 mt-2'>
                <div className='flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white'>
                  Java Server Pages
                </div>
              </li>
              <li className='mr-2 mt-2'>
                <div className='flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white'>
                  Github
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className='mt-4 rounded-md hover:bg-gray-900 transition-colors w-full p-4 flex flex-col md:flex-row'>
          <div className='flex-none md:pr-6'>
              <header className='mt-1 xs:mb-4 text-xs font-semibold text-cyan-500'>
                03/2022 - 12/2022
              </header>
          </div>
          <div className='flex-grow grid grid-rows-1'>
            <h3 className='text-white'>
              Desenvolvedora Front-end | WeeTravel
            </h3>
            <p className='mt-8 text-slate-300'>
              Responsável pela criação e a manutenção de uma plataforma web de agências de viagens, com o intuito de oferecer uma melhor 
              gestão de controle interno para as agências e automatizar o dia a dia dos agentes.
            </p>
            <ul className='mt-2 flex flex-wrap' aria-label='Tecnologias utilizadas'>
              <li className='mr-2 mt-2'>
                <div className='flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white'>
                  Javascript
                </div>
              </li>
              <li className='mr-2 mt-2'>
                <div className='flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white'>
                  TypeScript
                </div>
              </li>
              <li className='mr-2 mt-2'>
                <div className='flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white'>
                  React
                </div>
              </li>
              <li className='mr-2 mt-2'>
                <div className='flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white'>
                  Style-components
                </div>
              </li>
              <li className='mr-2 mt-2'>
                <div className='flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white'>
                  Bootstrap
                </div>
              </li>
              <li className='mr-2 mt-2'>
                <div className='flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white'>
                  Azure
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className='mt-4 rounded-md hover:bg-gray-900 transition-colors w-full p-4 flex flex-col md:flex-row'>
          <div className='flex-none md:pr-6'>
            <header className='mt-1 xs:mb-4 text-xs font-semibold text-cyan-500'>
              10/2021 - 03/2022
            </header>
          </div>
          <div className='flex-grow grid grid-rows-1'>
            <h3 className='text-white'>
              Estágio em Desenvolvimento de Software | WeeTravel
            </h3>
          </div>
        </li>
      </ol>
    </section>  
  )
}

export default Experience
