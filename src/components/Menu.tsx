
import { TfiAlignJustify } from "react-icons/tfi";

function Menu() {

  const Toggle=()=>{

    let lista=document.getElementById('lista');
    let toggle=document.getElementById('toggle');
    lista?.classList.toggle('phone:hidden');
    toggle?.classList.toggle('rotate-90')
   
  }

 

  return (
    <section id='menu' className='flex items-center justify-around w-full'>
        <div className='pb-5 phone:shrink phone:w-96 phone:pl-3 z-20'>
         <img alt={''}  src='/Logo.png' className='phone:w-20 h-20 mt-2 ' />
        </div>
        <div className='flex flex-col justify-start pb-5 phone:pr-3  '>
        <button className='text-2xl z-20 text-white  hidden phone:flex transition duration-200' onClick={Toggle} id='toggle'><TfiAlignJustify /></button>
        <div>
          <ul className='z-10 flex  justify-center gap-20 phone:gap-3 phone:w-full phone:pt-24 phone:h-64 phone:justify-around
           phone:flex-col phone:absolute phone:bg-gray-900 phone:text-white  phone:top-0
            phone:right-0  phone:hidden  tablet:flex ' id='lista' > 
          
          <li className="phone:hover:bg-white phone:hover:text-gray-900 p-3 cursor-pointer hover:text-green-400 duration-200"><a href='#menu'>Home</a> </li>
          <li className="phone:hover:bg-white phone:hover:text-gray-900 p-3 cursor-pointer hover:text-green-400 duration-200"> <a href="#footer">Contato</a></li>
          <li className="phone:hover:bg-white phone:hover:text-gray-900 p-3 cursor-pointer hover:text-green-400 duration-200"> <a href="#skill">Habilidades</a></li>
          
          </ul>
         
        </div>
     </div>
      
    </section>
  )
}

export default Menu
