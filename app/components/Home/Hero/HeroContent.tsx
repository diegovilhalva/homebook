import React from 'react'

const HeroContent = () => {
  return (
    <div>
      <h1 data-aos="fade-right" className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white'>Conhecimento que transforma vidas</h1>
      <p data-aos="fade-left" data-aos-delay="150" className="mt-6 text-sm md:text-base text-white text-opacity-60">
        Explore uma vasta gama de cursos e aprenda no seu ritmo, com professores especializados e conteúdos atualizados.
      </p>
      <div className="mt-8 flex items-center space-x-4">
        <button data-aos="zoom-in" data-aos-delay="300" className='btn bg-green-700 hover:bg-green-900 '>Ver Cursos</button>
        <button data-aos="zoom-in" data-aos-delay="450" className='btn bg-yellow-700 hover:bg-yellow-900 '>Saiba Mais</button>
      </div>
      <div className="flex items-center flex-wrap space-x-16 mt-8">
        <div className="" data-aos="fade-up" data-aos-delay="600">
          <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>160+</p>
          <p className='w-[100px] h-[3px] bg-green-600 mt-2 mb-2 rounded-lg'></p>
          <p className='md:text-lg text-sm text-white text-opacity-70'>Instrutores</p>
        </div>
        <div className="" data-aos="fade-up" data-aos-delay="750">
          <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>5000+</p>
          <p className='w-[100px] h-[3px] bg-blue-600 mt-2 mb-2 rounded-lg'></p>
          <p className='md:text-lg text-sm text-white text-opacity-70'>Alunos</p>
        </div>
        <div className="" data-aos="fade-up" data-aos-delay="900">
          <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>60+</p>
          <p className='w-[100px] h-[3px] bg-pink-600 mt-2 mb-2 rounded-lg'></p>
          <p className='md:text-lg text-sm text-white text-opacity-70'>Cursos</p>
        </div>
      </div>
    </div>
  )
}

export default HeroContent