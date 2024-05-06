import { BsGithub, BsLinkedin, BsEnvelopeAt } from 'react-icons/bs'
import HeroPic from '../../img/photokb.jpeg'

const Hero = () => {
  return (
    <>
      <section className='flex justify-center items-start p-20 h-screen'>
        <div className='lg:w-2/3 ssm:w-full xs:w-full'>
            <div>
              <h1 className='text-4x1 text-cyan-500'>Olá, meu nome é</h1>
            </div>
            <div>
              <h2 className='mt-10 text-7xl text-white'>Karine Brito.</h2>
            </div>
            <div>
              <h3 className='mt-10 text-xl text-slate-300'>
                Sou uma desenvolvedora front-end com experiência na construção de interfaces digitais de alta qualidade e focada em desenvolver telas interativas e acessíveis.
              </h3>
            </div>
            <div className='flex mt-10 space-x-4 text-white cursor-pointer'>
              <BsLinkedin size={40} className='hover:text-cyan-500'/>
              <BsGithub size={40} className='hover:text-cyan-500 ml-6'/>
              <BsEnvelopeAt size={40} className='hover:text-cyan-500 ml-6'/>
            </div>        
        </div>
      </section>


      <section id='about-section' className='p-20 lg:pl-64 h-screen'>
        <h2 className='text-4xl text-white'>Sobre</h2>
        <div className='grid lg:grid-cols-4 md:grid-col-1 gap-10'>
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
            <p className='mt-8'>
              As tecnologias que mais tenho utilizado:
            </p>
            
            <ul className='grid lg:grid-cols-2 md:grid-cols-3 gap-2'>
              <li className='p-4 relative flex items-center'>
                <div className='absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-500'></div>
                JavaScript
              </li>
              <li className='p-4 relative flex items-center'>
                <div className='absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-500'></div>
                TypeScript
              </li>
              <li className='p-4 relative flex items-center'>
                <div className='absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-500'></div>
                React
              </li>
              <li className='p-4 relative flex items-center'>
                <div className='absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-500'></div>
                Bootstrap
              </li>
            </ul>
          </div>     

          <div className='lg:col-span-2 lg:mt-10'>
            <div className='relative'>
              <div className={`absolute inset-0 bg-cyan-900 opacity-75 lg:w-1/2 md:w-1/2 md:mx-auto lg:m-0 ${'hover:hidden'}`}>
              </div>
              <img src={HeroPic} alt='Foto da Karine' className='lg:w-1/2 md:w-1/2 md:mx-auto lg:m-0 hover:scale-105 transition-transform duration-200 ease-in-out'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
