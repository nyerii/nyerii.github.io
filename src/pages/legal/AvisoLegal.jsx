import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import { Banner } from '../../components/Banner';
import { Footer } from '../../components/Footer';
import { BannerSection } from '../home/sections/BannerSection';

import { Button } from "@material-tailwind/react";

import { Header } from '../../components/Header';

export const AvisoLegal = () => {
    return (
        <>
            <Helmet>
                <title>Conocenos | Asociación Juvenil Nyeri</title>
            </Helmet> 

            <Header />

            <main className='bg-black-100 pb-4'>
                
                <Banner title={"Aviso Legal"} subtitle={"Asociación Juvenil Nyeri"} />

                <BannerSection link={"/proyectos/dps25/"} text={"¡El día del pensamiento scout ya esta a la vuelta de la esquina! Conoce todos los detalles del evento."} textLink={"Saber más"} linkType={"internal"} />

                <div className='px-4 py-4'>
                    <Breadcrumbs className='bg-transparent'>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/aviso-legal/"}>Aviso Legal</Link>
                    </Breadcrumbs>
                </div>

                <section className='px-4 pb-4'>
                    <p>El presente aviso legal regula el uso del sitio web www.clannyeri.com de la Asociación Juvenil Nyeri con CIF: G75563890  con domicilio en C. Rafael Calatrava no7 con el numero de inscripción 568 de la Sección 4 del registro de Asociaciones de Andalucía.</p>
                    <p className='mt-2'>Los derechos de propiedad intelectual del contenido de las páginas web y códigos son titularidad de la Asociación Juvenil Nyeri y, por tanto, queda prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos de sus páginas web ni aún citando las fuentes, salvo consentimiento por escrito de la Asociación Juvenil Nyeri.</p>
                    <p className='mt-2'>La Asociación Juvenil Nyeri no asume responsabilidad alguna por la información contenida en páginas web de terceros a las que se pueda acceder mediante “links” o enlaces desde la página web propiedad de la Asociación Juvenil Nyeri. La presencia de “links” o enlaces en la página web de la Asociación Juvenil Nyeri tiene como finalidad meramente informativa y en ningún caso supone sugerencia, invitación o recomendación sobre los mismos.</p>
                </section>

                
            </main>

            <Footer />
        </>
    )
}

