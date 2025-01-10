import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Newsletter } from '../components/Newsletter'

import data from "../assets/content/overview.json"

import { BlogCard } from './home/components/BlogCard'
import { BannerSection } from './home/sections/BannerSection'

import { Header } from '../components/Header';

export const Actualidad = () => {
    return (
        <>
            <Helmet>
                <title>Actualidad | Asociación Juvenil Nyeri</title>
            </Helmet> 

            <Header />

            <main className='bg-black-100'>
                
                <Banner title={"Actualidad"} subtitle={"¡Todas nuestras apariciones en medios de comunicación!"} image={"/assets/images/asset-09.webp"} />

                <BannerSection link={"/proyectos/dps25/"} text={"¡El día del pensamiento scout ya esta a la vuelta de la esquina! Conoce todos los detalles del evento."} textLink={"Saber más"} linkType={"internal"} />

                <div className='px-4 py-4'>
                    <Breadcrumbs className='bg-transparent'>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/actualidad"}>Actualidad</Link>
                    </Breadcrumbs>
                </div>
                
                <div className='px-4'>
                    <Newsletter/>
                </div>

                <section className='bg-black-100 pb-4 px-4'>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-4'>
                        {data.blog.map((post, index) => (
                            <BlogCard item={post} key={index} />
                        ))}
                    </div>
                </section>

            </main>

            <Footer />

        </>
    )
}
