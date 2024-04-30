import {BsCodeSlash} from 'react-icons/bs'

const Nav = () => {
    return (
      <>
      <div className="flex items-center justify-between p-10 lg:flex-row bg-black text-white">
          <div>
            <BsCodeSlash size={26}/>
          </div>
          <div className="space-x-4 text-white text-3x1 font-roboto">
           <a href="#" className="hover:text-purple-400 rounded-md px-3 py-2 text-x1">Sobre</a>
           <a href="#" className="hover:text-purple-400 rounded-md px-3 py-2 text-x1">Experiência</a>
           <a href="#" className="hover:text-purple-400 rounded-md px-3 py-2 text-x1">Projetos</a>
          </div>
      </div>
      </>
    )
  }
  
  export default Nav
  