import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer';
import { BannerSection } from './home/sections/BannerSection';

import { Button } from "@material-tailwind/react";

import { Header } from '../components/Header';

export const Conocenos = () => {
    return (
        <>
            <Helmet>
                <title>Conocenos | Asociación Juvenil Nyeri</title>
            </Helmet> 

            <Header />

            <main className='bg-black-100 pb-4'>
                
                <Banner title={"Conocenos"} subtitle={"Conoce a la familia Nyeri."} image={"/assets/images/asset-02.webp"} />

                <BannerSection link={"/proyectos/dps25/"} text={"¡El día del pensamiento scout ya esta a la vuelta de la esquina! Conoce todos los detalles del evento."} textLink={"Saber más"} linkType={"internal"} />

                <div className='px-4 py-4'>
                    <Breadcrumbs className='bg-transparent'>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/conocenos"}>Conocenos</Link>
                    </Breadcrumbs>
                </div>

                <section className='px-4 pb-4'>
                    <h2 className='text-3xl font-inter text-black-950 font-bold'>Historia y Compromiso Scout</h2>   
                    <div className='pt-4'>
                        <p>Nyeri inició su camino como un clan ruta perteneciente a la agrupación Cabo de Venus, fundado en septiembre de 2023 y oficialmente constituido el 4 de noviembre del mismo año en Las Rozas, Abrucena. Desde sus inicios, el clan ha estado formado por scouts con una amplia trayectoria en el movimiento, quienes, gracias a su experiencia y vocación de servicio, han llevado a cabo proyectos significativos que han trascendido los límites de su rama, marcando un impacto duradero en la Asociación de Scouts Católicos de Almería e incluso ganando un lugar destacado en el Libro de Oro Andaluz.</p>
                        <p className='mt-2'>Como clan, Nyeri se dedicó plenamente a actividades relacionadas con la rama ruta y su lema: ¡Servir!. Durante su recorrido, llevaron a cabo diversos proyectos y acciones de servicio, participando en voluntariados como el Encuentro Almeriense Vecinal 2024 y las jornadas de invierno de FEBSAL, donde colaboraron en la recolección de alimentos. Su primer gran hito fue el Día del Pensamiento Scout 2024, celebrado el 24 de febrero, un evento benéfico en honor a su fundador que reunió a más de 400 personas en el Colegio La Salle Virgen del Mar, a beneficio de la Asociación Nuevo Futuro.</p>
                        <p className='mt-2'>Posteriormente, Nyeri dio un paso trascendental al fundar la conocida Asociación Juvenil Nyeri, enfocada en mejorar la vida de la infancia y juventud de Almería. Su primer gran proyecto fue una campaña de recolección de juguetes organizada en colaboración con Asisa, cuyos beneficios fueron destinados a la Asociación Ítaca. Actualmente, la Asociación continúa creciendo y expandiendo su impacto a través de nuevos eventos, voluntariados y proyectos, consolidando una comunidad comprometida con el servicio y el desarrollo social.</p>
                        <p className='mt-2'>¿Quieres saber cómo continúa la historia?</p>
                    </div>
                </section>

                <div className='flex px-4'>
                    <Link to={"/proyectos"}><Button>Proyectos</Button></Link>
                </div>

            </main>

            <Footer />
        </>
    )
}

