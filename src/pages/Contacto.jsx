
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Newsletter } from '../components/Newsletter'

import { Header } from '../components/Header';

import { Contact } from './home/sections/Contact';

export const Contacto = () => {
    return (
        <>
            <Helmet>
                <title>Contacto | Asociación Juvenil Nyeri</title>
            </Helmet> 

            <Header />

            <main className='bg-black-100 pb-4'>
                
                <Banner title={"Contacto"} subtitle={"Formulario de Contacto"} image={"/assets/images/asset-07.webp"} />

                <div className='px-4 py-4'>
                    <Breadcrumbs className='bg-transparent'>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/contacto"}>Contacto</Link>
                    </Breadcrumbs>
                </div>

                <Contact />
                
                <div className='px-4 pt-10 pb-4'>
                    <Newsletter/>
                </div>

            </main>

            <Footer />

        </>
    )
}
