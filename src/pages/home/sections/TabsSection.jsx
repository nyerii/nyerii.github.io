import React from 'react'
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import image from "../../../assets/images/asset-01.webp"


export const TabsSection = () => {

    const [activeTab, setActiveTab] = React.useState("asoc");

    const dataTabs = [
        {
            label: "La Asociación",
            value: "asoc",
            desc: (
                <div>
                    <p className='font-inter text-black-950'>La <b>Asociación Juvenil Nyeri</b> fue fundada el pasado <b>3 de septiembre de 2024</b> con el propósito de profesionalizar las actividades del Clan. Desde su creación, <b>se han cumplido con éxito todos los objetivos planteados</b>, completando los proyectos de manera impecable y obteniendo valoraciones altamente positivas. Estos resultados han superado las expectativas tanto de la junta directiva como de los socios de la organización.</p>
                    <p className='mt-2 font-inter text-black-950'>En la Asociación, <b>trabajamos constantemente en la innovación y el desarrollo de nuevos proyectos que contribuyan a la mejora del entorno</b> en el que nos desenvolvemos. Además, fomentamos la participación activa a través del voluntariado.</p>
                    <p className='mt-2 font-inter text-black-950'><b>¿Te gustaría colaborar con nosotros y ser parte de este esfuerzo conjunto?</b></p>
                    <div className='flex mt-4'>
                        <Link to={"/contacto"} className='text-black-100 bg-tall-poppy-700 px-4 py-1 rounded-xl flex items-center gap-2 font-inter font-normal'>
                            <svg className='w-4 h-4' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16V12M12 8H12.01M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            <span>¡Quiero colaborar!</span>
                        </Link>
                    </div>
                </div>
            ),
        },
        {
            label: "El Clan",
            value: "clan",
            desc: (
                <div>
                    <p className='font-inter text-black-950'>El <b>Clan Nyeri</b>, es un clan ruta perteneciente a la agrupación Cabo de Venus <b>fundado en septiembre de 2023</b>, y constituido poco tiempo después, el 4 de noviembre de dicho año en las Rozas, Abrucena. El clan, está formado por miembros scouts con una larga trayectoria en el movimiento, que con su experiencia y sus ganas de servir, están realizando grandes proyectos sobrepasando los límites de la rama y haciendo historia por toda la asociación de scouts católicos almerienses, incluso, haciéndose un gran hueco en libro de oro andaluz.</p>
                    <p className='mt-2 font-inter text-black-950'>En su trayectoria como clan, este ha realizado todo tipo de actividades relacionadas a la rama ruta, y a su lema: ¡Servir!. Los grandes proyectos y las acciones de servicio realizadas hasta el momento, son solo un pequeño inicio de los grandes planes que tiene el clan a un futuro cercano.</p>
                    <p className='mt-2 font-inter text-black-950'><b>¿Quieres saber cómo continua la historia?</b></p>
                    <div className='flex mt-4'>
                        <Link to={"/conocenos"} className='text-black-100 bg-tall-poppy-700 px-4 py-1 rounded-xl flex items-center gap-2 font-inter font-normal'>
                            <svg className='w-4 h-4' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16V12M12 8H12.01M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            <span>Saber más</span>
                        </Link>
                    </div>
                </div>
            ),
        }
    ];


    return (
        <section className='lg:grid grid-cols-2 bg-black-100 px-4 pt-4'>
            <div className='md:h-auto rounded-xl h-[300px] md:order-2' style={{ background: `url(${image}) no-repeat center center/cover` }}></div>
            <div className='bg-black-100 py-4'>
                <Tabs value={activeTab}>
                    <TabsHeader className="rounded-none font-inter p-0 border-b border-black-100 bg-transparent" indicatorProps={{ className: "bg-transparent border-b-2 border-black-950 shadow-none rounded-none", }} >
                    {dataTabs.map(({ label, value }) => (
                        <Tab key={value} value={value} onClick={() => setActiveTab(value)} className={activeTab === value ? "text-black-950" : "text-black-800"}>{label}</Tab>
                    ))}
                    </TabsHeader>
                    <TabsBody>
                    {dataTabs.map(({ value, desc }) => (
                        <TabPanel key={value} value={value} className='px-0'>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
                </Tabs>
            </div>
        </section>
    )
}
