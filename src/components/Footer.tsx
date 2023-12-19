import {  FormEvent,useRef } from 'react'
import emailjs from "@emailjs/browser";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

import Aos from 'aos';
import 'aos/dist/aos.css';







export default function Footer() {
Aos.init()
var fomulario= useRef<any>('');
 

const submitEmail=(e:FormEvent<HTMLFormElement>)=>{
 e.preventDefault()
 emailjs.sendForm('service_8a1uytl', 'template_xnhm6cn',fomulario.current, 'VumdI4nUsZPw2FE9L')
 .then((result) => {
     console.log(result.text);
 }, (error) => {
     console.log(error.text);
 });
};
 
 

  
return (
<section id='footer' className=' text-black flex mt-20 phone:items-center tablet:items-center justify-center w-full pb-10 phone:flex-col tablet:flex-col gap-32'>
      <div className='tablet:w-full '>
        <h2 className='text-white font-bold text-xl'>Redes sociais</h2>
        <ul className='text-white flex text-4xl gap-10 p-5 tablet:flex tablet:items-center  tablet:justify-center tablet:gap-32 tablet:py-12 '>
            <li><a data-aos='zoom-in' href="https://github.com/Phdrox" target='_blank'><SlSocialGithub className='hover:text-gray-400 duration-200'/></a></li>
            <li><a data-aos='zoom-in' href="https://twitter.com/Ph_Ximenes21" target='_blank'><TiSocialTwitter className='hover:text-sky-400 duration-200'/></a></li>
            <li><a data-aos='zoom-in' href="https://www.linkedin.com/in/phmx-o-o-0b5a6a220/" target='_blank'><TiSocialLinkedin className='hover:text-sky-500 duration-200'/></a></li>
            <li><a data-aos='zoom-in' href="https://www.instagram.com/ph_ximeness/" target='_blank'><SlSocialInstagram className='hover:text-pink-500 duration-200'/></a></li>
        </ul>
      </div>
     
    <form ref={fomulario} onSubmit={submitEmail} className='flex flex-col  justify-center gap-2 bg-white phone:w-10/12  p-4 rounded-lg tablet:w-3/4 w-6/12'>
    <h2 className='p-2 text-white font-bold m-3  rounded p-2 bg-blue-500 '>Envie seu E-mail</h2>
      <label className='text-green-500 text-left font-medium '>Nome</label>
      <input type="text" name="from_name" className='h-10 rounded placeholder:pl-2 border-2 w-full' placeholder='Insira seu Nome'/>
      <label className='text-green-500 text-left font-medium'>Email</label>
      <input type="email" name="user_email" className='w-full h-10 rounded placeholder:pl-2 border-2' placeholder='Insira seu e-mail'/>
      <label className='text-green-500 text-left font-medium'>Mensagem</label>
      <textarea name="message" className='w-full h-72 placeholder:pl-2 rounded border-2'  placeholder='Escreva sua mensagem...'/>
      <input type="submit" value="Enviar" className='text-white bg-gradient-to-r to-blue-500 
      from-green-400 p-3 w-full rounded cursor-pointer my-3 transition duration-75 
      hover:bg-gradient-to-r hover:to-black hover:from-black 
      hover:text-green-400  '  />
    </form>
</section>
  )
}

