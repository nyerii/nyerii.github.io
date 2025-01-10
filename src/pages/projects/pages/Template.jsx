import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import { Banner } from '../../../components/Banner';
import { Footer } from '../../../components/Footer';
import { BannerSection } from '../../home/sections/BannerSection';

export const NuevoProyecto = () => {
    return (
        <>
            <Helmet>
                <title>NuevoProyecto | Asociación Juvenil Nyeri</title>
            </Helmet> 

            <main>
                
                <Banner title={"Proyectos"} subtitle={"Projectos, eventos, acciones de servicio y.. ¡mucho más!"} image={"/assets/images/asset-07.webp"} />

                <BannerSection link={"/proyectos/"} text={"¡Nuevos proyectos en camino! ¿Quieres conocer más?"} textLink={"Descubrir"} linkType={"internal"} />

                <div className='px-4 py-4'>
                    <Breadcrumbs className='bg-transparent'>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/proyectos"}>Proyectos</Link>
                    </Breadcrumbs>
                </div>

                <section>
                    
                </section>

            </main>

            <Footer />
        </>
    )
}

