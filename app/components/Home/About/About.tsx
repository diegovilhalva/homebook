import React from 'react'
import { FaArrowRight, FaAward } from 'react-icons/fa6'

const About = () => {
  return (
    <div className='pt-16 pb-16 '>
        <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <div className="" data-aos="fade-right" data-aos-anchor-placement="top-center" >
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
                        <FaAward className='h-6 w-6 text-white' />
                    </div>
                    <h1 className='text-xl text-black font-semibold'>Certificado garantido</h1>
                </div>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800'>Aprenda de qualquer lugar, a qualquer hora</h1>
                <p className='mt-4 text-gray-600'>Combinamos tecnologia de ponta com conteúdo especializado para oferecer uma experiência de aprendizado única, focada nas necessidades de cada aluno.</p>
                <button className='flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 rounded-3xl bg-black text-white'>
                    <span>Saiba Mais</span>
                    <FaArrowRight />
                </button>
            </div>
            <div className="" data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="150">
                <div className="">
                    <h1 className='text-7xl lg:text-9xl font-semibold  text-black text-opacity-5'>
                        01
                    </h1>
                    <div className="-mt-10">
                        <h1 className='text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold'>Aprenda no seu tempo</h1>
                        <p className='w-[90%] lg:w-[70%] text-base text-black text-opacity-60'>Com uma abordagem prática e flexível, oferecemos cursos que se adaptam ao seu ritmo, para que você possa aprender quando e onde quiser.</p>
                    </div>
                </div>
                <div className="mt-8 w-full">
                    <h1 className='text-7xl lg:text-9xl font-semibold  text-black text-opacity-5'>
                        02
                    </h1>
                    <div className="-mt-10 ">
                        <h1 className='text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold'>Preços Acessíveis</h1>
                        <p className='w-[90%] lg:w-[70%] text-base text-black text-opacity-60'>
                        Desde o início, nos propusemos a criar uma plataforma que colocasse o aluno no centro, proporcionando uma educação acessível, de alta qualidade e sempre relevante.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About