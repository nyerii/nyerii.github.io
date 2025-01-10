import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import { Banner } from '../../../components/Banner';
import { Footer } from '../../../components/Footer';
import { BannerSection } from '../../home/sections/BannerSection';

import { BlogCard } from '../../home/components/BlogCard';
import { Gallery } from '../components/Gallery';

import { Header } from '../../../components/Header';

export const DPS24 = () => {

    const patrocinadores = [
        {
            href: "https://almeriaciudad.es/",
            text: "almeriaciudad.es",
            image: "/assets/images/asset-34.webp"
        },
        {
            href: "https://www.dipalme.org/",
            text: "dipalme.org",
            image: "/assets/images/asset-35.webp"
        },
        {
            href: "https://lasallevirgendelmar.com/",
            text: "lasallevirgendelmar.com",
            image: "/assets/images/asset-36.webp"
        }
    ]

    const data = [
        {
            "image": "/assets/images/asset-14.webp",
            "title": "El Día del Pensamiento Scout: Un Éxito",
            "date": "2024-03-07",
            "sitename": "MSC Almería",
            "link": "https://mscalmeria.webnode.es/l/dia-del-pensamiento-scouts/",
            "description": "La jornada del pasado 24 de febrero liderada por el clan Nyeri, invitó a todos los grupos scout a reunirse en \"La Salle\", donde se recaudó un gran donativo para la Asociación Nuevo Futuro y se entregó el famoso Kit \"Baden Powell\"."
        },
        {
            "image": "/assets/images/asset-15.webp",
            "title": "Los scouts celebrarán el Día Mundial del Pensamiento Scout",
            "date": "2024-02-22",
            "sitename": "La Voz de Almería",
            "link": "https://www.lavozdealmeria.com/noticia/11/pequealmeria/270197/los-scouts-de-almeria-celebraran-el-sabado-el-dia-mundial-del-pensamiento-scout",
            "description": "Por primera vez se celebrará el Día del Pensamiento Scout en Andalucía "
        },
        {
            "image": "/assets/images/asset-13.webp",
            "title": "Antonio José Soler y Raúl Moya en 'Como Alfredo por su casa'",
            "date": "2024-02-19",
            "sitename": "Inter Almeria TV",
            "link": "https://www.interalmeria.tv/tv_a_la_carta/antonio-jose-soler-y-raul-moya-como-alfredo-por-su-casa-19-02-24/",
            "description": "Es un día en el que celebramos los que nos mueve: \"El Escultismo\"."
        }
    ]

    const images = [
        "/assets/images/asset-37.webp",
        "/assets/images/asset-38.webp",
        "/assets/images/asset-39.webp",
        "/assets/images/asset-40.webp",
        "/assets/images/asset-41.webp",
        "/assets/images/asset-42.webp",
        "/assets/images/asset-43.webp",
        "/assets/images/asset-44.webp",
        "/assets/images/asset-45.webp",
        "/assets/images/asset-46.webp",
        "/assets/images/asset-47.webp",
        "/assets/images/asset-48.webp",
        "/assets/images/asset-49.webp",
        "/assets/images/asset-50.webp",
    ]

    return (
        <>
            <Helmet>
                <title>Día del Pensamiento Scout 2024 | Asociación Juvenil Nyeri</title>
            </Helmet> 

            <Header />

            <main className='bg-black-100'>
                
                <Banner title={"Día del Pensamiento Scout 2024"} subtitle={"Este año 2024, desde el Clan Ruta Nyeri ha surgido la iniciativa de celebrar este extraordinario día en la provincia de Almería, marcando un hito al ser la primera vez que se lleve a cabo en nuestra querida ciudad."} image={"/assets/images/asset-45.webp"} />

                <BannerSection link={"/proyectos/dps25/"} text={"¡Pronto la II Edición del Día del Pensamiento Scout! ¿Te lo vas a perder?"} textLink={"Más información"} linkType={"internal"} />

                <div className='px-4 py-4'>
                    <Breadcrumbs className='bg-transparent'>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/proyectos"}>Proyectos</Link>
                        <Link to={"/proyectos/dps24/"}>DPS 2024</Link>
                    </Breadcrumbs>
                </div>

                <section className='px-4 pb-4'>
                    <h2 className='text-3xl font-inter text-black-950 font-bold'>El Proyecto</h2>   
                    <div className='pt-4'>
                        <p>Este año 2024, desde el Clan Ruta Nyeri ha surgido la iniciativa de celebrar este extraordinario día en la provincia de Almería, marcando un hito al ser la primera vez que se lleve a cabo en nuestra querida ciudad. Junto con el eslogan “Música, Familia y Deporte”, el clan ruta Nyeri y la asocición Nuevo Futuro, realizarán un encuentro presencia donde se unirán todos los Grupos Scouts que se alojan en nuestra provincia, para celebrar en familia, y con la familia, este día tan importante para nosotros.</p>
                        <p className='mt-2'>La fecha para dicho evento será el sábado 24 de febrero, debido a la celebración oficial de este, 22 de febrero. Este gran día, contaremos con todos los colores de las pañoletas almerienses en el colegio La Salle Virgen del Mar.</p>
                        <p className='mt-2'>Dicho evento, será una celebración solidaria donde la recaudación irá destinada a la asociación Nuevo Futuro. Por sólo 3€ tendras acceso ilimitado a nuestro toro mecánico, torneos deportivos, concierto en directo, hinchable, concurso de talentos, ... ¡Y mucho más!</p>
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

                <section className='pb-4 px-4'>
                    <h2 className='text-3xl font-inter text-black-950 font-bold'>Noticias</h2>   
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-4'>
                        {data.map((post, index) => (
                            <BlogCard item={post} key={index} />
                        ))}
                    </div>
                </section>

                <section className='pb-8 px-4 flex flex-col gap-4'>
                    <h2 className='text-3xl font-inter text-black-950 font-bold'>Fotogalería</h2>   
                    <Gallery data={images} />
                </section>

            </main>

            <Footer />
        </>
    )
}

