
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import { Banner } from '../../../components/Banner';
import { Footer } from '../../../components/Footer';
import { BannerSection } from '../../home/sections/BannerSection';

export const DPS25 = () => {

    const patrocinadores = [
        {
            href: "https://www.dipalme.org/",
            text: "dipalme.org",
            image: "/assets/images/asset-35.webp"
        }
    ]

    return (
        <>
            <Helmet>
                <title>NuevoProyecto | Asociación Juvenil Nyeri</title>
            </Helmet> 

            <main className='bg-black-100'>
                
                <Banner title={"Día del Pensamiento Scout 2025"} subtitle={"Después del fantástico evento realizado el pasado 24 de febrero de 2024, el Clan Nyeri ha decido volver a organizar el Día del Pensamiento Scout. ¡Pronto tendremos más información!."} image={"/assets/images/asset-41.webp"} />

                <BannerSection link={"/proyectos/"} text={"¡Nuevos proyectos en camino! ¿Quieres conocer más?"} textLink={"Descubrir"} linkType={"internal"} />

                <div className='px-4 py-4'>
                    <Breadcrumbs className='bg-transparent'>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/proyectos"}>Proyectos</Link>
                        <Link to={"/proyectos/dps25/"}>DPS 2025</Link>
                    </Breadcrumbs>
                </div>

                <section className='px-4 pb-4'>
                    <h2 className='text-3xl font-inter text-black-950 font-bold'>El Proyecto</h2>   
                    <div className='pt-4'>
                        <p>El Día del Pensamiento Scout es un encuentro organizado por la Asociación Juvenil Nyeri con el objetivo de congregar a todos los Grupos Scouts de la provincia de Almería. El pasado febrero del 2024, Nyeri marcó un hito al organizar por primera vez este extraordinario evento.</p>
                        <p className='mt-2'>Por segundo año consecutivo, nuestra querida ciudad de Almería volverá a celebrar tal extraordinaria celebración y desde la asociación, ya nos hemos puesto manos a la obra para volver a realizar el mejor evento Scout del Año. La fecha de la segunda edición será el próximo sábado 22 de febrero 2025. Este gran día, contaremos con todos los colores de las pañoletas almerienses en el colegio La Salle Virgen del Mar.</p>
                        <p className='mt-2'>Dicho evento, será una celebración solidaria donde la recaudación irá destinada nuevamente a la asociación Nuevo Futuro.</p>
                        <p className='mt-2'>¿Quieres saber más? ¡Pronto más información!</p>
                    </div>
                </section>

                <section className='px-4 pb-4'>
                    <h2 className='text-3xl font-inter text-black-950 font-bold'>Patrocinadores</h2>   
                    <div className='pt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                        {patrocinadores.map((pat, index) => (
                            <div key={index} className={`flex flex-col justify-between gap-2 items-center p-4 bg-gray-300 rounded-xlp ${index === 2 ? "lg:col-span-1 col-span-1 md:col-span-2" : ""}`}>
                                <div className='h-[100px]'>
                                    <img src={pat.image} className='w-full h-full object-cover' alt={pat.text} />
                                </div>
                                <div className='flex justify-center'>
                                    <a className='text-center text-sm after:content-[""] relative after:absolute after:w-0 hover:after:w-full after:h-px after:bg-black-950 after:transition-all after:duration-200 after:left-1/2 after:-translate-x-1/2 after:bottom-0' href={pat.href} target='_blank'>{pat.text}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </>
    )
}

