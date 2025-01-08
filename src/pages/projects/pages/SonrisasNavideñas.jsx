import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Breadcrumbs, ButtonGroup, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import { Banner } from '../../../components/Banner';
import { Footer } from '../../../components/Footer';
import { BannerSection } from '../../home/sections/BannerSection';

import { BlogCard } from '../../home/components/BlogCard';

import { Gallery } from '../components/Gallery';

export const SonrisasNavideñas = () => {

    const data = [
        {
            "image": "/assets/images/asset-19.webp",
            "title": "Una campaña de recogida de juguetes muy especial.",
            "date": "2024-12-19",
            "sitename": "Inter Almeria TV",
            "link": "https://www.interalmeria.tv/tv_a_la_carta/asisa-como-alfredo-por-su-casa-19-12-24/",
            "description": "\"Decidimos organizar una 'minicampaña' y terminó siendo una gran campaña, casi 200 juguetes recogidos.\""
        },
        {
            "image": "/assets/images/asset-18.webp",
            "title": "Arranca una gran recogida de juguetes para niños y niñas usuarios de Ítaca",
            "date": "2024-11-13",
            "sitename": "La Voz de Almería",
            "link": "https://www.lavozdealmeria.com/noticia/12/almeria/283199/arranca-una-gran-recogida-de-juguetes-para-ninos-y-ninas-usuarios-de-itaca",
            "description": "Clan Nyeri, ASISA y Asociación Ítaca se unen para llevar una feliz Navidad a todos los hogares"
        },
        {
            "image": "/assets/images/asset-17.webp",
            "title": "El Clan Nyeri, la Asociación Ítaca y ASISA unen fuerzas para una Navidad llena de SONRISAS EN EL PUCHE",
            "date": "2024-09-23",
            "sitename": "Asociación Ítaca",
            "link": "https://www.asociacionitaca.org/campa%C3%B1a--sonrisas-navide%C3%B1as",
            "description": "La recién fundada Asociación Juvenil Nyeri, encabeza esta ambiciosa campaña solidaria de recogida de juguetes."
        }
    ]

    const dataImages = [
        "/assets/images/asset-29.webp", 
        "/assets/images/asset-27.webp", 
        "/assets/images/asset-32.webp",
        "/assets/images/asset-30.webp", 
        "/assets/images/asset-28.webp", 
        "/assets/images/asset-31.webp" 
    ]

    const colaboradores = [
        {
            href: "https://www.asociacionitaca.org/",
            text: "asociacionitaca.org",
            image: "/assets/images/asset-51.webp"
        },
        {
            href: "https://www.asisa.es/",
            text: "asisa.es",
            image: "/assets/images/asset-52.webp"
        }
    ]

    return (
        <>
            <Helmet>
                <title>Sonrisas Navideñas | Asociación Juvenil Nyeri</title>
            </Helmet> 
            
            <main className='bg-black-100'>
                
                <Banner title={"Sonrisas Navideñas"} subtitle={"Nyeri se enorgullece de presentar su primera campaña solidaria: una recogida de juguetes para que todos los niños y jóvenes de Almería puedan disfrutar de la magia de la Navidad."} image={"/assets/images/asset-23.webp"} />

                <BannerSection link={"/proyectos/"} text={"¡Nuevos proyectos en camino! ¿Quieres conocer más?"} textLink={"Descubrir"} linkType={"internal"} />

                <div className='px-4 py-4'>
                    <Breadcrumbs className='bg-transparent'>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/proyectos"}>Proyectos</Link>
                        <Link to={"/proyectos/sonrisas-navideñas"}>Sonrisas Navideñas</Link>
                    </Breadcrumbs>
                </div>

                <section className='px-4 py-4 border-y border-y-black-400'>
                    <div className='flex flex-wrap gap-2'>
                        <a className='px-4 py-2 border border-black-950 rounded-xl duration-200 bg-transparent transition-all hover:bg-black-950 hover:text-black-50' target='_blank' href="https://www.google.com/maps/d/edit?mid=1PO3aoyVKdlNRlEXWQOGJIfWn0Cih3VM&amp;ll=36.8408038943125%2C-2.4456221500000086&amp;z=15">Puntos de Recogida</a>
                        <a disabled className='px-4 py-2 border border-black-950 rounded-xl cursor-not-allowed opacity-50'>¡Quiero ser voluntario!</a>
                    </div>
                </section>

                <section className='px-4 py-8'>
                    <h2 className='text-3xl font-inter text-black-950 font-bold'>El Proyecto</h2>   
                    <div className='pt-4'>
                        <p>La recién fundada asociación juvenil Nyeri, comprometida con la mejora de la vida de los jóvenes y niños de nuestra comunidad, se enorgullece en anunciar su primer proyecto oficial: una ambiciosa y solidaria campaña de recogida de juguetes para que todos los niños y jóvenes de la ciudad de Almería puedan experimentar la alegría de recibir un regalo en nuestra próxima Navidad. Esta iniciativa nace del profundo deseo de los miembros de Nyeri de hacer una diferencia tangible en la vida de aquellos que más lo necesitan, especialmente en estas fechas tan significativas, cuando la ilusión y la esperanza juegan un papel fundamental en el desarrollo emocional de los más pequeños.</p>
                        <p className='mt-2'>Nyeri ha sido creada con el firme propósito de generar un impacto positivo en la comunidad, brindando apoyo y recursos a los jóvenes en riesgo de exclusión social, a aquellos que viven en condiciones de pobreza, y a todos aquellos que, por diversas circunstancias, se encuentran en situación de vulnerabilidad. Conscientes de las crecientes desigualdades y los desafíos económicos que enfrentan muchas familias en Almería, esta campaña de recogida de juguetes busca tender una mano amiga, asegurando que ningún niño se quede sin una sonrisa en estas fiestas. El proyecto se ha diseñado con una visión integral, abordando no solo la recolección de juguetes nuevos y en buen estado, sino también la concienciación sobre la importancia de la solidaridad y la participación activa de la comunidad. Para Nyeri, este no es solo un esfuerzo de caridad, sino un llamado a la acción colectiva, donde cada ciudadano de Almería puede contribuir a hacer de esta Navidad un momento inolvidable para todos los niños, sin excepción.</p>
                        <p className='mt-2'>En un mundo donde, a menudo, las diferencias económicas se traducen en diferencias de oportunidades y experiencias, la asociación Nyeri quiere demostrar que, con un poco de empatía y compromiso social, es posible reducir esas brechas y ofrecer a todos los niños una Navidad llena de amor, felicidad y esperanza. Esta campaña de recogida de juguetes no solo busca cumplir el deseo de un niño de recibir un regalo, sino también infundir un sentido de pertenencia y cuidado en cada uno de ellos, recordándoles que son valorados y queridos por su comunidad.</p>
                        <p className='mt-2'>Con este primer proyecto, Nyeri no solo da el primer paso en su misión de crear un entorno más justo e inclusivo para la juventud de Almería, sino que también sienta las bases para futuras iniciativas que continuarán promoviendo los valores de solidaridad, igualdad y cooperación. Nyeri invita a todos los ciudadanos a sumarse a esta noble causa, a contribuir con lo que puedan y a ser parte del cambio que tanto necesita nuestra sociedad. Porque, al final, no se trata solo de juguetes, sino de construir juntos un futuro más brillante para nuestros jóvenes y para nuestra ciudad.</p>
                    </div>
                </section>

                <section className='px-4 pb-8'>
                    <h2 className='text-3xl font-inter text-black-950 font-bold'>Colaboración</h2>   
                    <div className='pt-4'>
                        <p>La <b>Asociación Juvenil Nyeri</b> trabajará en colaboración con la Asociación Ítaca para destinar la totalidad de los juguetes recogidos en su campaña de Navidad a los niños y jóvenes que forman parte de Ítaca. Esta decisión se basa en los lazos compartidos entre ambas organizaciones, ya que tanto Nyeri como Ítaca están profundamente vinculadas a los valores del escultismo, que promueven la educación, el servicio y el compromiso social.</p>
                        <p className='mt-2'>La <b>Asociación Ítaca</b>, conocida por su incansable labor humanitaria y su dedicación a mejorar la calidad de vida de menores y jóvenes en zonas desfavorecidas, se alinea perfectamente con los objetivos de Nyeri. Ítaca no solo trabaja para romper las barreras de exclusión social, económica y cultural, sino que también se esfuerza por generar cambios significativos en las conductas y hábitos de los jóvenes, ayudándoles a integrarse plenamente en la sociedad.</p>
                        <p className='mt-2'><b>ASISA Almería</b> se suma a este proyecto solidario, aportando su compromiso con el bienestar y desarrollo integral de la comunidad. Como empresa dedicada a la salud y al cuidado de las personas, ASISA refuerza el impacto de la iniciativa, contribuyendo a que más niños y jóvenes puedan disfrutar de una Navidad llena de ilusión y esperanza.</p>
                    </div>
                    <div className='pt-4 grid md:grid-cols-2 grid-cols-1 gap-8'>
                        {colaboradores.map((pat, index) => (
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
                    <Gallery data={dataImages} />
                </section>

            </main>

            <Footer />
        </>
    )
}

