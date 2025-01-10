import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Newsletter } from '../components/Newsletter'

import data from "../assets/content/projects.json"

import { BannerSection } from './home/sections/BannerSection'

import { ProjectCard } from './home/components/ProjectCard';

import { Header } from '../components/Header';

export const Projects = () => {
    return (
        <>
            <Helmet>
                <title>Proyectos | Asociación Juvenil Nyeri</title>
            </Helmet> 

            <Header />

            <main className='bg-black-100'>
                
                <Banner title={"Proyectos"} subtitle={"Projectos, eventos, acciones de servicio y.. ¡mucho más!"} image={"/assets/images/asset-07.webp"} />

                <BannerSection link={"/proyectos/dps25/"} text={"¡El día del pensamiento scout ya esta a la vuelta de la esquina! Conoce todos los detalles del evento."} textLink={"Saber más"} linkType={"internal"} />

                <div className='px-4 py-4'>
                    <Breadcrumbs className='bg-transparent'>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/proyectos"}>Proyectos</Link>
                    </Breadcrumbs>
                </div>

                <section className='bg-black-100 pb-4 px-4'>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-4'>
                        {data.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </section>

                <div className='px-4 pb-4'>
                    <Newsletter/>
                </div>

            </main>

            <Footer />

        </>
    )
}
