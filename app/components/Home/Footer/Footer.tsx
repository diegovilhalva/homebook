import Image from 'next/image'
import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
    const date = new Date()
    return (
        <div className="pt-20 pb-12 bg-black">
            <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
                <div className="">
                    <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
                    <p className='text-white text-opacity-50'>Transformando conhecimento em sucesso</p>
                    <div className="flex items-center space-x-4 mt-6">
                        <FaFacebookF className='w-6 h-6 text-[#3b5998]' />
                        <BsTwitterX className='w-6 h-6 text-gray-300' />
                        <FaYoutube className='w-6 h-6 text-[#FF0000]' />
                        <FaInstagram className='w-6 h-6 text-[#C13584]' />
                    </div>
                </div>
                <div>
                    <h1 className="footer_heading">Links Populares</h1>
                    <p className='footer_link'>Desenvolvimento Web</p>
                    <p className='footer_link'>Hacking</p>
                    <p className='footer_link'>UX/UI Design</p>
                    <p className='footer_link'>Banco de dadoas</p>
                    <p className='footer_link'>Criação de sistemas</p>
                    <p className='footer_link'>Marketing digital</p>
                </div>
                <div>
                    <h1 className="footer_heading">Links rápidos</h1>
                    <p className='footer_link'>Início</p>
                    <p className='footer_link'>Sobre</p>
                    <p className='footer_link'>Cursos</p>
                    <p className='footer_link'>Depoimentos</p>
                    <p className='footer_link'>Blog</p>
                    <p className='footer_link'>Contato</p>
                </div>
                <div>
                    <h1 className='footer_heading'>
                        Inscreva-se na nossa Newsletter
                    </h1>
                    <input type="email" placeholder='Digite seu e-mail' className='px-6 py-2 rounded-lg outline-none bg-gray-700 w-full text-white' />
                    <button className='px-6 py-2 mt-4 rounded-lg outline-none bg-rose-700 w-full text-white'>Inscrever</button>
                </div>

            </div>
            <p className='text-center mt-4 text-base text-white opacity-70'>&copy; {date.getFullYear()} Criado por Diego Vilhalva</p>

        </div>
    )
}

export default Footer