import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@material-tailwind/react";

import { ProjectCard } from '../components/ProjectCard'

export const Projects = ({ data }) => {
    return (
        <section className='px-4 bg-black-100 pt-20'>
            <div>
                <h1 className='text-3xl md:text-center font-inter text-black-950 font-bold'>Nuestros projectos, eventos y acciones de servicio</h1>
                <h2 className='text-xl md:text-center font-inter text-black-600'>"Sumamos esfuerzos para dejar huella y construir un impacto positivo."</h2>
            </div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mt-4'>
                {data.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <div className='flex justify-start mt-4'>
                <Link to={"/proyectos"}>
                    <Button className='flex gap-1 items-center'>
                        <span>más projectos</span>
                        <svg className='w-4 h-4' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Button>
                </Link>
            </div>
        </section>
    )
}
