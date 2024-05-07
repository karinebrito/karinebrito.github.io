import { BsGithub, BsLinkedin, BsEnvelopeAt } from 'react-icons/bs'
import HeroPic from '../../img/photokb.jpeg'

const Hero = () => {

  const openEmail = () => {
    window.location.href = 'mailto:annakarinebrito@gmail.com'
  }
  
  return (
    <>
      <section className='flex justify-center items-start p-10 lg:p-20 lg:min-h-screen'>
        <div className='lg:w-1/2 md:w-full xs:w-full'>
            <div>
              <h1 className='text-3xl md:text-2xl xs:text-xl text-cyan-500'>Olá, meu nome é</h1>
            </div>
            <div>
              <h2 className='mt-10 text-8xl md:text-6xl xs:text-4xl text-white'>Karine Brito.</h2>
            </div>
            <div>
              <h3 className='mt-10 text-xl text-slate-300'>
                Sou uma desenvolvedora front-end com experiência na construção de interfaces digitais de alta qualidade e focada em desenvolver telas interativas e acessíveis.
              </h3>
            </div>
            <div className='flex mt-10 space-x-4 text-white cursor-pointer'>
            <a href='https://www.linkedin.com/in/annakarinebrito/' target='_blank' rel='noopener noreferrer'>
              <BsLinkedin size={40} className='hover:text-cyan-500 hover:scale-105 transition-transform duration-200 ease-in-out'/>
            </a>
            <a href='https://github.com/karinebrito' target='_blank' rel='noopener noreferrer'>
              <BsGithub size={40} className='hover:text-cyan-500 hover:scale-105 transition-transform duration-200 ease-in-out'/>
            </a>
              <BsEnvelopeAt size={40} className='hover:text-cyan-500 hover:scale-105 transition-transform duration-200 ease-in-out' onClick={openEmail}/>
            </div>        
        </div>
      </section>

      <section id='about-section' className='p-10 lg:p-20 lg:pl-64 lg:min-h-screen'>
      <div className='border-b border-gray-300 mb-8 w-5/6'></div>
        <h2 className='text-4xl xs:text-2xl text-white'>Sobre</h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
          <div className='lg:col-span-2 text-slate-300'>
            <p className='mt-8'>
              Olá! Meu nome é Karine e eu gosto de desenvolver o design de interfaces. 
              O meu interesse pelo desenvolvimento de software começou em 2020, quando decidi compreender o funcionamento por trás dos sites e assim 
              descobrir que posso tornar mais intuitiva a experiência de outras pessoas.
            </p>
            <p className='mt-8'>
              Tive o privilégio de trabalhar inicialmente em uma <a href='https://tripmee.com.br/' target='blank'className='text-cyan-500 hover:underline transition duration-300'>startup</a> onde dei meus primeiros passos na área de tecnologia
              e pude conhecer o mercado de trabalho. 
            </p>
            <p className='mt-8'>
              Logo depois, trabalhei em uma <a href='https://equals.com.br/' target='blank' className='text-cyan-500 hover:underline transition duration-300'>empresa de gestão e conciliação financeira</a> onde tive a oportunidade de melhorar as minhas softskills e hardskills. 
            </p>
            <p className='mt-8'>
              Atualmente o meu foco principal é estudar para desenvolver produtos mais acessíveis e inclusivos.
            </p>
          </div>     
          <div className='lg:col-span-2 md:col-span-1 lg:mt-10 md:mt-1'>
            <div className='relative'>
              <div className={`absolute inset-0 bg-cyan-900 opacity-75 lg:w-1/2 md:w-full xs:mx-auto lg:m-0 ${'hover:hidden'}`}>
              </div>
              <img src={HeroPic} alt='Foto da Karine' className='lg:w-1/2 md:w-full xs:w-fit xs:mx-auto lg:m-0 hover:scale-105 transition-transform duration-200 ease-in-out'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
