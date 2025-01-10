
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import { Banner } from '../../../components/Banner';
import { Footer } from '../../../components/Footer';
import { BannerSection } from '../../home/sections/BannerSection';

import { Header } from '../../../components/Header';

export const DPS25 = () => {

    const patrocinadores = [
        {
            href: "https://www.dipalme.org/",
            text: "dipalme.org",
            image: "/assets/images/asset-35.webp"
        },
        {
            href: "https://www.facebook.com/castilloshinchableselcorsa/",
            text: "fb/castilloshinchableselcorsa",
            image: "/assets/images/asset-53.webp"
        },
        {
            href: "https://lasallevirgendelmar.com/",
            text: "lasallevirgendelmar.com",
            image: "/assets/images/asset-36.webp"
        }
    ]


    return (
        <>
            <Helmet>
                <title>Día del Pensamiento Scout 2025 | Asociación Juvenil Nyeri</title>
            </Helmet> 

            <Header />

            <main className='bg-black-100'>
                
                <Banner title={"Día del Pensamiento Scout 2025"} subtitle={"Después del fantástico evento realizado el pasado 24 de febrero de 2024, el Clan Nyeri ha decido volver a organizar el Día del Pensamiento Scout. ¡Pronto tendremos más información!."} image={"/assets/images/asset-41.webp"} />

                <BannerSection link={"https://docs.google.com/forms/d/e/1FAIpQLSfcKIx1PqnhsGuFSHj0v4sqHGduV6mqU4632SupoV34iDLdAQ/viewform"} text={"¡Únete al Día del Pensamiento Scout! Las inscripciones para las comisiones ya están abiertas."} textLink={"inscribirse"} linkType={"external"} />

                <div className='px-4 py-4'>
                    <Breadcrumbs className='bg-transparent'>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/proyectos"}>Proyectos</Link>
                        <Link to={"/proyectos/dps25/"}>DPS 2025</Link>
                    </Breadcrumbs>
                </div>

                <section className='mx-4   bg-gray-300 mb-8 p-8 rounded-xl flex flex-col items-center gap-2'>
                    <h1 className='text-black-950 text-3xl font-bold'>Comisiones Abiertas</h1>
                    <h2 className='text-xl opacity-80 text-center md:w-1/2'><b>¡Únete al Día del Pensamiento Scout!</b> Las inscripciones para las comisiones ya están abiertas. Colabora y comparte tu experiencia scout. <b>¡Participa ahora!</b></h2>
                    <div className='flex justify-center mt-2'>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfcKIx1PqnhsGuFSHj0v4sqHGduV6mqU4632SupoV34iDLdAQ/viewform" target='_blank' className='px-3 py-1 bg-tall-poppy-700 text-black-50 rounded-lg flex items-center gap-2 cursor-pointer hover:-translate-y-[3px] duration-200 transition-all'>
                            <svg className='w-4 h-4' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            <span>Inscribirse</span>
                        </a>
                    </div>
                </section>

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
                    <h2 className='text-3xl font-inter text-black-950 font-bold'>Patrocinadores y Colaboradores</h2>   
                    <div className='pt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                        {patrocinadores.map((pat, index) => (
                            <div key={index} className={`flex flex-col justify-between gap-2 items-center p-4 bg-gray-300 rounded-xl ${index === 2 ? "lg:col-span-1 col-span-1 md:col-span-2" : ""}`}>
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

                <div className='border-t border-t-black-400 mt-4 mb-8 mx-4'></div>

                <section className='px-4 pb-4'>
                    <h2 className='text-3xl font-inter text-black-950 text-center font-bold'>¡Colabora!</h2>   
                    <div className='pt-4 flex gap-4 flex-col'>
                        <p className='text-center'>El Día del Pensamiento Scout es <b>un evento para toda la comunidad</b>, ¿Quieres participar? Únete a las comisiones de redacción y <b>muestra tu espíritu scout</b>.</p>
                        <div className='flex justify-center'>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfcKIx1PqnhsGuFSHj0v4sqHGduV6mqU4632SupoV34iDLdAQ/viewform" target='_blank' className='px-3 py-1 bg-tall-poppy-700 text-black-50 rounded-lg flex items-center gap-2 cursor-pointer hover:-translate-y-[3px] duration-200 transition-all'>
                                <svg className='w-4 h-4' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Inscripción Comisiones</span>
                            </a>                            
                        </div>
                    </div>

                    <div className='border-t border-t-black-400 my-8'></div>

                    <div className='pb-8'>
                        <p><b>Documentos</b></p>
                        <div className='flex gap-4 flex-wrap mt-2'>
                            <a href="/download/comisiones.pdf" target='_blank' className='flex items-center gap-2 border-b border-b-black-300'>
                                <svg className="w-4 h-4" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Orientación a las Comisiones (PDF)</span>
                            </a>
                            <a href="/download/plantilla-programación.pdf" target='_blank' className='flex items-center gap-2 border-b border-b-black-300'>
                                <svg className="w-4 h-4" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Plantilla de Programación (PDF)</span>
                            </a>
                            <a href="/download/plantilla-programación.docx" target='_blank' className='flex items-center gap-2 border-b border-b-black-300'>
                                <svg className="w-4 h-4" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Plantilla de Programación (WORD)</span>
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    )
}

