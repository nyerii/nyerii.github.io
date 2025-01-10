import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Newsletter } from '../components/Newsletter'

import { Header } from '../components/Header';

export const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>404 Error | Asociación Juvenil Nyeri</title>
            </Helmet> 

            <Header />

            <main className='bg-black-100 pb-4'>
                
                <Banner title={"404"} subtitle={"Página no encontrada"} image={"/assets/images/asset-07.webp"} />

                <div className='px-4 py-4'>
                    <Breadcrumbs className='bg-transparent'>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/404"}>Página no encontrada</Link>
                    </Breadcrumbs>
                </div>
                
                <div className='px-4'>
                    <Newsletter/>
                </div>

            </main>

            <Footer />

        </>
    )
}
