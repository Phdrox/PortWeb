import axios from "axios"
import GitHub from "./components/GitHub"
import Header from "./components/Header"
import Menu from "./components/Menu"
import { useEffect, useState } from "react"
import { IGit } from "./interface/Skill"
import About from "./components/About"
import Skill from "./components/Skill"
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import Footer from "./components/Footer";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';


import './App.css'

function App() {
 

  Aos.init()

const[user,setUser]=useState<IGit>()

//Realiza a requisição da Api do GitHub
useEffect(()=>{axios.get(' https://api.github.com/users/Phdrox')
  .then(res=>
    { 
      const users:IGit={
       avatar_url:res.data.avatar_url,
       followers:res.data.followers,
       following:res.data.following,
       login:res.data.login,
       location:res.data.location}
       setUser(users)
       console.log(res.data)
      }
   
       
        
       )
  },[])

  return (
    <div >
    <a href="#menu"><FaArrowAltCircleUp className=' phone:hidden fixed right-2 bottom-9 desktop:text-5xl cursor-pointer animate-pulse z-20 text-4xl'/></a>
    <Menu/>
    <Header/>
    <div className="tablet:flex w-full flex phone:flex-col">
    <GitHub user={user}/>
    <About/>
    </div> 
    <div className="flex phone:flex-col phone:gap-5 pt-7 w-full justify-center items-center py-10 gap-10"> 
    {// eslint-disable-next-line
      }
      <Skill name="React" props={<FaReact className=' p-2 border-2 border-green-400 rounded-full w-24 h-24 '/>} difficult="Básico" />
      {// eslint-disable-next-line
      }
      <Skill name="SQL" props={<DiMysql className='border-2 p-2 border-green-400 rounded-full w-24 h-24 '/>} difficult="Básico"/>
       {// eslint-disable-next-line
      }
      <Skill name="Python" props={<FaPython className='border-2 p-2 border-green-400 rounded-full w-24 h-24 '/>} difficult="Básico"/>
      <Skill name="Typescript" props={<SiTypescript className='border-2 p-2 border-green-400 rounded-full w-24 h-24 '/>} difficult="Básico"/>
    </div>
    <Footer />
   </div>
  )
}

export default App
