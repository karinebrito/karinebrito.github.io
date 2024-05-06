import { BsCodeSlash } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt1 } from 'react-icons/hi'
import { useState } from 'react'

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  function toggleMenu(isOpen: boolean) {
    if (isOpen !== toggle) {
      setToggle(isOpen);
    }
  }

  function scrollToSection() {
    const section = document.getElementById('about-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <div className='text-white font-roboto'>
        <div className='flex items-center justify-between p-10 lg:flex-row'>
          <div>
            <BsCodeSlash size={26} className='text-white'/>
          </div>
          <div className='space-x-4 text-3x1'>
            <div className='xs:hidden ssm:hidden lg:block space-x-2'>
              <a href="#" onClick={scrollToSection} className="hover:text-cyan-500 rounded-md px-3 py-2 text-x1 cursor-pointer">Sobre</a>
              <a href="#" className="hover:text-cyan-500 rounded-md px-3 py-2 text-x1 cursor-pointer">Experiência</a>
              <a href="#" className="hover:text-cyan-500 rounded-md px-3 py-2 text-x1 cursor-pointer">Resumo</a>
            </div>
            <div className='xs:block ssm:block lg:hidden'>
              {toggle ? (
                <AiOutlineClose onClick={() => toggleMenu(false)} size={26} className='text-cyan-500 cursor-pointer'/>
              ) : (
                <HiMenuAlt1 onClick={() => toggleMenu(true)} size={26} className='text-cyan-500'/>
              )}
            </div>
          </div>
        </div>
        <div className='xs:block ssm:block lg:hidden'>
          {toggle ? (
            <div className='flex p-10'>
              <ul className='ml-auto'>
                <li className='hover:text-cyan-500 text-white text-x1 mb-2'>Sobre</li>
                <li className='hover:text-cyan-500 text-white text-x1 mb-2'>Experiência</li>
                <li className='hover:text-cyan-500 text-white text-x1 mb-2'>Resumo</li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

  
  export default Nav
  