
import {  ReactNode } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

interface ISkills{
    props:ReactNode;
    name:string;
    difficult:string;
}

export default function Skill({name,props,difficult}:ISkills) {

Aos.init();
  
  

  
    return (
  <section data-aos="flip-left" id='skill'className='flex justify-center items-center w-72 gap-2 pt-4 flex-col border-solid border-green-400 rounded-lg border-2 tablet:border-0'> 
 
      <span>{props}</span> 
        
          <p className='font-bold phone:text-md'>{name}</p>
         <p className='p-3 bg-green-400 mb-3 rounded-xl w-1/2'>{difficult}</p>
  </section>
  )
   
}
