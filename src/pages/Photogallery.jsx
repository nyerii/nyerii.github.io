import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { Helmet } from 'react-helmet-async'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer';
import { BannerSection } from './home/sections/BannerSection';

import data from "../assets/content/phtogallery.json"
import { Gallery } from './projects/components/Gallery';

export const Photogallery = () => {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1,
    });
    
    const openLightbox = (index) => {
        setLightboxController({ toggler: !lightboxController.toggler, slide: index + 1, });
    };

    return (
        <>
            <Helmet>
                <title>Fotogalería | Asociación Juvenil Nyeri</title>
            </Helmet> 

            <main className='bg-black-100 pb-4'>
                
                <Banner title={"Fotogalería"} subtitle={"Nuestra historia en fotografías."} image={"/assets/images/asset-02.webp"} />

                <BannerSection link={"/proyectos/dps25/"} text={"¡El día del pensamiento scout ya esta a la vuelta de la esquina! Conoce todos los detalles del evento."} textLink={"Saber más"} linkType={"internal"} />

                <div className='px-4 py-4'>
                    <Breadcrumbs className='bg-transparent'>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/fotogaleria"}>Fotogaleria</Link>
                    </Breadcrumbs>
                </div>

                <div className='px-4 pb-4'>
                    {data.slice().reverse().map((section, index) => (
                        <section key={index} className={`${index === 0 ? "" : "mt-8"}`}>
                            <div className='flex items-center gap-4'>
                                <h2 className='font-bold'>{section.title}</h2>
                                <div className='border-t flex-1 border-t-black-800'></div>
                            </div>
                            <div className='mt-4'>
                                <Gallery data={section.photos}/>
                            </div>
                        </section>
                    ))}
                </div>

            </main>

            <Footer />
        </>
    )
}

