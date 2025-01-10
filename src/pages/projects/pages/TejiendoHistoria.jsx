import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { Helmet } from 'react-helmet-async'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import { Banner } from '../../../components/Banner';
import { Footer } from '../../../components/Footer';
import { BannerSection } from '../../home/sections/BannerSection';
import { Header } from '../../../components/Header';

export const TejiendoHistoria = () => {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1,
    });

    const openLightbox = (index) => {
        setLightboxController({ toggler: !lightboxController.toggler, slide: index + 1, });
    };

    const images = [
        "/assets/images/asset-24.webp", 
        "/assets/images/asset-25.webp"
    ]

    return (
        <>
            <Helmet>
                <title>Tejiendo Historia | Asociación Juvenil Nyeri</title>
            </Helmet> 

            <Header />

            <main className='bg-black-100'>
                
                <Banner title={"Tejiendo Historia"} subtitle={"En el marco del XXV Aniversario de la ADE almeriense, desde el Clan Ruta Nyeri presentamos el 'Proyecto TH25: Tejiendo Historia'. Una iniciativa que busca conmemorar un cuarto de siglo de compromiso, trabajo y pasión por el escultismo en nuestra ciudad, Almería."} image={"/assets/images/asset-10.webp"} />

                <BannerSection link={"/proyectos/"} text={"¡Nuevos proyectos en camino! ¿Quieres conocer más?"} textLink={"Descubrir"} linkType={"internal"} />

                <div className='px-4 py-4'>
                    <Breadcrumbs className='bg-transparent'>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/proyectos"}>Proyectos</Link>
                        <Link to={"/proyectos/tejiendo-historia"}>Tejiendo Historia</Link>
                    </Breadcrumbs>
                </div>

                <section className='px-4 pb-8'>
                    <h2 className='text-3xl font-inter text-black-950 font-bold'>El Proyecto</h2>   
                    <div className='pt-4'>
                        <p>En el marco del XXV Aniversario de la ADE almeriense, desde el Clan Ruta Nyeri presentamos el "Proyecto TH25: Tejiendo Historia". Una iniciativa que busca conmemorar un cuarto de siglo de compromiso, trabajo y pasión por el escultismo en nuestra ciudad, Almería. En la celebración de este evento tan significativo, es esencial que cada detalle refleje la rica historia, el compromiso y la pasión que han caracterizado a nuestra asociación a lo largo de estos años.</p>
                        <p className='mt-2'>Para ello, se diseño una ilustración, en la que se representaba la escena de San Jorge contra el dragón; para posteriormente asentarla como el Logo del XV San Jorge Asociativo Almeriense, celebrado desde el 19 hasta el 21 de abril 2024 en Castala, Almería.</p>
                        <p>Finalmente, esta maravillosa ilustración, se imprimió en insignias, para que todos los participantes de la celebración tengan un precioso recuerdo conmemorativo.</p>
                    </div>
                </section>

                <section className='px-4 pb-8'>
                    <h2 className='text-3xl font-inter text-black-950 font-bold'>Fotogaleria</h2>   
                    <div className='grid sm:grid-cols-2 gap-4 mt-4'>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img onClick={() => openLightbox(index)} src={image} alt="Extrajob Scout - Tejiendo Historia, Almeria" className='w-full h-full object-cover rounded-xl' />
                            </div>
                        ))}
                        <FsLightbox toggler={lightboxController.toggler} sources={images} slide={lightboxController.slide}/>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    )
}

