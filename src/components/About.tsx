
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  Aos.init()
  return (
 <section className='w-full flex items-center justify-center phone:my-5 my-8 tablet:pr-3 ' >
    <div data-aos='zoom-in' className='flex flex-col rounded-xl phone:bg-gradient-to-t to-blue-500 from-green-500 phone:w-11/12  tablet:bg-gradient-to-t to-blue-500 from-green-500'>
      <h1 className='mb-5 font-bold phone:text-xl tablet:text-xl text-white text-4xl'>Sobre Mim</h1>
      <p className='flex align-left justify-left text-left pl-4 pb-3 text-white tablet:text-sm phone:text-sm'>Meu nome é Pedro Henrique, faço ciência da computação na Estácio e estou no 6° período.
         Gostei da área de TI desde criança, aos meus 16 anos começei a procurar como funcionava as linguagens 
         e a construção de jogos, website, aplicativos, comecei aprendendo liguagens de marcação (CSS e HTML), 
         após isso aprendi javascript e com a prática fui conhecendo SQL, aos 20 anos entrei na faculdade 
         e consegui obter muita informação na área de tecnologia que nem imaginava, estudei um pouco de 
         linguagem C em estruturação de dados, e uma matéria com o básico de Python, no 5° período, aprendi
         vários conceitos de SQL e a facilidade de manipulação em um Banco de dados. Hoje estou evoluindo
         e conhecendo mais sobre minha área, assim que me formar quero me tornar um excelente programador. 
         </p>
    </div>
 </section>
  )
}
