

import { TypeAnimation } from 'react-type-animation'





function Header() {

 
    'use client'
  return (
    <div id='home' className='flex justify-around tablet:justify-between pt-10 phone:items-center  phone:justify-center phone:flex-col gap-10 w-full tablet:w-full tablet:flex-row ' >
       <div className='flex flex-col phone:flex-col gap-3 tablet:pl-4 tablet:flex-col phone:w-full'>
      
       <h1 className='
        font-extrabold text-white flex flex-col 
       tablet:text-2xl
       phone:text-3xl
       text-4xl
       '
        > 
       <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 text-7xl tablet:text-5xl phone:text-5xl mt-6'>Olá, eu sou </span>
       <TypeAnimation sequence={[
         'Ximenes',500,
         'Desenvolvedor Web',1000,
         `Programador`,500,
         ]} wrapper='span' repeat={Infinity} speed={30}/>
       </h1> 
        <div className=' w-full flex flex-col items-center mt-20'>
            
            <a  href='#footer'className='p-4 bg-gradient-to-r from-green-400 to-blue-400  
             hover:bg-gradient-to-r hover:from-blue-400 hover:to-green-400  
             cursor-pointer rounded-full w-64 mb-7
             
             ' >Entre em contato</a>
            
            <a className=' rounded-full border-white  transition-color duration-300  solid border-2 p-4 w-64 hover:bg-white hover:text-black' href='/Currículo.docx' download>Currículo</a>
        </div>

       </div>
       <div className=''>
       <img src='/memoji.png' width={290} height={290} className='tablet:w-78 tablet:h-78 w-96 phone:w-34'  alt='memoji' />
       </div>
    </div>
  )
}

export default Header
