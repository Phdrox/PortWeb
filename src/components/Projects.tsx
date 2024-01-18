

function Projects() {
  return (
   
        
<div className="flex flex-col gap-5"> 
        
    <h1 className="text-3xl font-bold phone:text-2xl tablet:text-2xl">Projetos</h1>
    <div className="flex gap-1 flex-wrap w-full justify-around phone:gap-4">
      <a href='https://noob-house.vercel.app' className="w-5/12 phone:w-11/12"><img src="/Project1.png" alt="project" className='rounded w-full brightness-50  hover:brightness-100 duration-200' /></a>
      <a href='https://onfilms.vercel.app' className="w-5/12 phone:w-11/12"><img src="/Project2.png" alt="project" className='rounded w-full brightness-50 hover:brightness-100 duration-200'/></a>
    </div>
</div>
  )
}

export default Projects
