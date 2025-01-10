import React from 'react'
import { Link } from 'react-router-dom'

import Logo from "../assets/images/logo.svg"

export const Footer = () => {

    const dataLinks = [
        [
            {
                text: "Inicio",
                to: "/"
            },
            {
                text: "Sobre Nosotros",
                to: "/conocenos"
            },
            {
                text: "Fotogalería",
                to: "/fotogaleria"
            },
            {
                text: "Contacto",
                to: "/contacto"
            }
        ], [
            {
                text: "Actualidad",
                to: "/actualidad"
            },
            {
                text: "Proyectos",
                to: "/proyectos"
            },
            {
                text: "Día del Pensamiento Scout 2025",
                to: "/proyectos/dps25"
            }
        ],
        [
            {
                text: "Política de Privacidad",
                to: "/politica-de-privacidad"
            },
            {
                text: "Aviso Legal",
                to: "/aviso-legal/"
            }
        ]

    ]

    return (
        <footer className='p-20 flex justify-center flex-col gap-8 bg-black-950 relative overflow-hidden'>
            
            <div className="opacity-30 z-0 absolute -left-1/2 -top-1/2">
                <img src={Logo} alt="Logo de la Asociación Juvenil Nyeri" className='md:w-[150vw] w-auto md:h-auto h-[130vh]' />
            </div>

            <div className="flex gap-4 justify-start flex-wrap md:gap-12 z-10">
                {dataLinks.map((linkgroup, index) => (
                    <nav className='flex flex-col gap-1 justify-end' key={index}>
                        <ul>
                            {linkgroup.map((links, i) => (
                                <li key={i}>
                                    <Link to={links.to} className='text-black-50 after:content-[""] after:absolute after:w-0 hover:after:w-full after:h-px after:bg-black-100 after:transition-all after:duration-200 after:left-1/2 after:-translate-x-1/2 after:bottom-0 relative text-left no-underline text-nowrap font-inter'>{links.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}
            </div>

            <div className='z-10'>
                <p className='mb-2 font-inter text-black-50 leading-none'><a className='after:content-[""] relative after:absolute after:w-0 hover:after:w-full after:h-px after:bg-black-100 after:transition-all after:duration-200 after:left-1/2 after:-translate-x-1/2 after:bottom-0' href="mailto:nyericlan@gmail.com">nyericlan@gmail.com</a></p>
                <p className='font-inter leading-none text-black-50'>Copyright © {new Date().getFullYear()} <Link className='after:content-[""] relative after:absolute after:w-0 hover:after:w-full after:h-px after:bg-black-100 after:transition-all after:duration-200 after:left-1/2 after:-translate-x-1/2 after:bottom-0' to="/">Asociación Juvenil Nyeri</Link> - All rights reserved</p>
                <p className='mt-2 leading-none font-inter text-black-50'>Developed by <a href="https://cpadlab.github.io/" target="_blank" className='after:content-[""] relative after:absolute after:w-0 hover:after:w-full after:h-px after:bg-black-100 after:transition-all after:duration-200 after:left-1/2 after:-translate-x-1/2 after:bottom-0'>Carlos Padilla</a></p>
            </div>

    </footer>

    )
}
