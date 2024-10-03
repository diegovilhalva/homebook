"use client"

import Image from 'next/image'
import React from 'react'
import {  FaBriefcase } from 'react-icons/fa6'
import Tilt from "react-parallax-tilt"
const Features = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-[80%] mx-auto ">
        <Tilt>
          <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
            <Image src={"/images/f.png"} alt='image' width={1000} height={1000} />
          </div>
        </Tilt>

        <div className="">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
              <FaBriefcase className='h-6 w-6 text-white' />
            </div>
            <h1 className='text-xl text-black font-semibold'>
              Cursos bem avaliados
            </h1>
          </div>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem]
          lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800' >Tecnologia  a Serviço do Seu Crescimento</h1>
          <div className="mt-8 mb-6">
            <h1 className='text-lg md:text-2xl text-black text-opacity-70 font-semibold'>Acesso a Conteúdos Exclusivos e Atualizados</h1>
            <p className='text-sm md:text-base text-black text-opacity-70 mt-4'>Tenha acesso a materiais de qualidade, sempre atualizados com as últimas tendências do mercado e exclusivos para nossos alunos</p>
          </div>
          <div className="mt-8 mb-6">
            <h1 className='text-lg md:text-2xl text-black text-opacity-70 font-semibold'>Plataforma Intuitiva e Fácil de Usar</h1>
            <p className='text-sm md:text-base text-black text-opacity-70 mt-4'>
              Navegue facilmente por nossos cursos e funcionalidades em uma plataforma desenvolvida para tornar seu aprendizado mais simples e agradável
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features