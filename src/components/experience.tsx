
import EqualsPic from '../../assets/equals.png'
import Tripmee from '../../assets/tripmee.png'

const Experience = () => {
  return (
    <section id='experience-section' className='p-10 lg:p-20 lg:pl-64 lg:min-h-screen'>
        <div className='border-b border-gray-700 w-1/2 mb-8'></div>
        <h1 className='text-4xl xs:text-2xl text-white lg:mr-4'>Experiência</h1>
        <ol className='mt-10'>
          <li className='grid grid-cols-1 md:grid-cols-2 items-center'>
            <div className='flex flex-col md:flex-row self-start'>
              <div className='flex-none lg:pr-6 md:pr-6'>
                <header className='mt-1 xs:mb-4 text-xs font-semibold text-cyan-500'>
                  12/2022 - 04/2024
                </header>
              </div>
              <div className='flex-grow grid grid-rows-1'>
                <h3 className='text-white'>
                  Desenvolvedora Front-end | Equals
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
            </div>
            
            <div className='relative cursor-pointer md:self-start lg:ml-4'>
              <a href='https://equals.com.br/' target='blank'>
              <div className={`absolute inset-0 bg-cyan-900 opacity-75 lg:w-2/3 md:w-1/2 lg:ml-2 xs:w-fit xs:mx-auto ${'hover:hidden'}`}></div>
              <img src={EqualsPic} alt='Equals' className='lg:w-2/3 md:w-1/2 lg:ml-2 xs:w-fit xs:mx-auto hover:scale-105 transition-transform duration-200 ease'/>
              </a>
            </div>
          </li>

          <li className='mt-10 grid grid-cols-1 md:grid-cols-2 items-center'>
           <div className='flex flex-col md:flex-row self-start'>
            <div className='flex-none md:pr-6'>
                <header className='mt-1 xs:mb-4 text-xs font-semibold text-cyan-500'>
                  10/2021 - 12/2022
                </header>
            </div>
            <div className='flex-grow grid grid-rows-1'>
              <h3 className='text-white'>
                Desenvolvedora Front-end | WeeTravel
              </h3>
              <p className='mt-4 text-slate-300'>
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
                    Sass
                  </div>
                </li>
                <li className='mr-2 mt-2'>
                  <div className='flex items-center rounded-full bg-cyan-900 px-3 py-1 text-xs text-white'>
                    Azure
                  </div>
                </li>
              </ul>
            </div>
           </div>
            <div className='relative cursor-pointer md:self-start lg:ml-4'>
            <a href='https://tripmee.com.br/' target='blank'>
                <div className={`absolute inset-0 bg-cyan-900 opacity-75 lg:w-2/3 md:w-1/2 lg:ml-2 xs:w-fit xs:mx-auto ${'hover:hidden'}`}></div>
                <img src={Tripmee} alt='Tripmee' className='lg:w-2/3 lg:ml-2 md:w-1/2 xs:w-fit xs:mx-auto hover:scale-105 transition-transform duration-200 ease'/>
            </a>
            </div>
          </li>
        </ol>
    </section>  
  )
}

export default Experience
