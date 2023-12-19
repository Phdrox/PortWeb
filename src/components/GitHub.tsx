


import{IGit}from '../interface/Skill'
import { IoLocationSharp } from "react-icons/io5";
import { SlSocialGithub } from "react-icons/sl";
import Aos from 'aos';
import 'aos/dist/aos.css';


interface Users{
  user?:IGit
}

function GitHub({user}:Users) {
Aos.init()
return (
    <section className='w-full flex justify-center phone:my-8 my-24' data-aos='zoom-in'>
       <div className='phone:w-11/12 tablet:w-72 flex flex-col items-center border-2 border-blue-400 border-solid rounded-xl w-11/12'>
        <h1 className='font-bold flex items-center gap-2 pt-2 text-2xl'>GitHub <SlSocialGithub/></h1>
        <div ><img src={`${user?.avatar_url}`}   alt={'Olá'} className='rounded-full phone:w-52 h-52 border-2 border-blue-400 border-solid my-2'/></div>
        <h1 className='text-lg font-bold'>{user?.login}</h1>
       
        <div className='flex  items-center gap-2 '>
          <IoLocationSharp className='text-blue-300 text-xl'/> 
          <p>{user?.location}</p>
        </div>
        
        
        <div className='w-full flex justify-start flex-col items-center gap-2 mt-5 mb-5'>
          <div className='p-2 bg-blue-400 phone:w-72 rounded tablet:w-52 w-9/12 '>Seguidores: {user?.followers}</div>
          <div className='p-2 bg-blue-400 phone:w-72 rounded tablet:w-52 w-9/12'>Seguindo: {user?.following}</div>
           <a href="https://github.com/Phdrox" target='_black' className='p-2 border-solid border-white border-2 phone:w-72 rounded-lg w-9/12 hover:bg-white hover:text-black trasition duration-200'>Veja mais</a>
        </div>
      </div>
      
      </section>
  )
}

export default GitHub
