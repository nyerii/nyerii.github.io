import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import { Banner } from '../../components/Banner';
import { Footer } from '../../components/Footer';
import { BannerSection } from '../home/sections/BannerSection';

import { Button } from "@material-tailwind/react";

export const PoliticaPrivacidad = () => {
    return (
        <>
            <Helmet>
                <title>Conocenos | Asociación Juvenil Nyeri</title>
            </Helmet> 

            <main className='bg-black-100 pb-4'>
                
                <Banner title={"Política de Privacidad"} subtitle={"Asociación Juvenil Nyeri"} />

                <BannerSection link={"/proyectos/dps25/"} text={"¡El día del pensamiento scout ya esta a la vuelta de la esquina! Conoce todos los detalles del evento."} textLink={"Saber más"} linkType={"internal"} />

                <div className='px-4 py-4'>
                    <Breadcrumbs className='bg-transparent'>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/politica-de-privacidad/"}>Política de Privacidad</Link>
                    </Breadcrumbs>
                </div>

                <section className='px-4 pb-4'>
                    <h2 className='text-3xl font-inter text-black-950 font-bold'>1. INFORMACIÓN AL USUARIO</h2>   
                    <div className='pt-4'>
                        <p><b>¿Quién es el responsable del tratamiento de tus datos personales?</b></p>
                        <p className='mt-1'>ASOCIACION JUVENIL NYERI es el RESPONSABLE del tratamiento de los datos personales del USUARIO y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).</p>

                        <p className='mt-4'><b>¿Para qué tratamos tus datos personales?</b></p>
                        <p className='mt-1'>Para mantener una relación comercial con el usuario. Las operaciones previstas para realizar el tratamiento son:</p>
                        <ul className='pl-4'>
                            <li className='mt-1'>- Remisión de comunicaciones comerciales publicitarias por e-mail, fax, SMS, MMS, redes sociales o cualquier otro medio electrónico o físico, presente o futuro, que posibilite realizar comunicaciones comerciales. Estas comunicaciones serán realizadas por el RESPONSABLE y estarán relacionadas con sus productos y servicios, o de sus colaboradores o proveedores, con los que este haya alcanzado algún acuerdo de promoción. En este caso, los terceros nunca tendrán acceso a los datos personales.</li>
                            <li className='mt-1'>- Realizar estudios de mercado y análisis estadísticos.</li>
                            <li className='mt-1'>- Tramitar encargos, solicitudes, dar respuesta a las consultas o cualquier tipo de petición que sea realizada por el USUARIO a través de cualquiera de las formas de contacto que se ponen a su disposición en la página web del RESPONSABLE.</li>
                            <li className='mt-1'>- Remitir el boletín informativo online, sobre novedades, ofertas y promociones en nuestra actividad.</li>
                        </ul>

                        <p className='mt-4'><b>¿Por qué motivo podemos tratar tus datos personales?</b></p>
                        <p className='mt-1'>Porque el tratamiento está legitimado por el artículo 6 del GDPR de la siguiente forma:</p>
                        <ul className='pl-4'>
                            <li className='mt-1'>- Con el consentimiento del USUARIO: remisión de comunicaciones comerciales y del boletín informativo. </li>
                            <li className='mt-1'>- Por interés legítimo del RESPONSABLE: realizar estudios de mercado, análisis estadísticos, etc. y tramitar encargos, solicitudes, etc. a petición del USUARIO.</li>
                        </ul>

                        <p className='mt-4'><b>¿Durante cuánto tiempo guardaremos tus datos personales?</b></p>
                        <p className='mt-1'>Se conservarán durante no más tiempo del necesario para mantener el fin del tratamiento o existan prescripciones legales que dictaminen su custodia y cuando ya no sea necesario para ello, se suprimirán con medidas de seguridad adecuadas para garantizar la anonimización de los datos o la destrucción total de los mismos.</p>

                        <p className='mt-4'><b>¿A quién facilitamos tus datos personales?</b></p>
                        <p className='mt-1'>No está prevista ninguna comunicación de datos personales a terceros salvo, si fuese necesario para el desarrollo y ejecución de las finalidades del tratamiento, a nuestros proveedores de servicios relacionados con comunicaciones, con los cuales el RESPONSABLE tiene suscritos los contratos de confidencialidad y de encargado de tratamiento exigidos por la normativa vigente de privacidad.</p>

                        <p className='mt-4'><b>¿Cuáles son tus derechos?</b></p>
                        <p className='mt-1'>Los derechos que asisten al USUARIO son:</p>
                        <ul className='pl-4'>
                            <li className='mt-1'>- Derecho a retirar el consentimiento en cualquier momento.</li>
                            <li className='mt-1'>- Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u oposición a su tratamiento.</li>
                            <li className='mt-1'>- Derecho a presentar una reclamación ante la autoridad de control (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.</li>
                        </ul>

                        <p className='mt-4'><b>Datos de contacto para ejercer sus derechos:</b></p>
                        <p className='mt-1'>ASOCIACION NUEVO FUTURO ALMERIA.</p>
                        <p className='mt-1'>C. RAFAEL CALATRAVA, 7 - 04006 ALMERIA (Almería).</p>
                        <p className='mt-1'>E-mail: NYERI.CLAN@GMAIL.COM</p>
                    </div>
                </section>

                <section className='px-4 pb-4 pt-4'>
                    <h2 className='text-3xl font-inter text-black-950 font-bold'>2. CARÁCTER OBLIGATORIO O FACULTATIVO DE LA INFORMACIÓN FACILITADA POR EL USUARIO</h2>   
                    <p className='mt-4'>Los USUARIOS, mediante la marcación de las casillas correspondientes y la entrada de datos en los campos, marcados con un asterisco (*) en el formulario de contacto o presentados en formularios de descarga, aceptan expresamente y de forma libre e inequívoca, que sus datos son necesarios para atender su petición, por parte del prestador, siendo voluntaria la inclusión de datos en los campos restantes. El USUARIO garantiza que los datos personales facilitados al RESPONSABLE son veraces y se hace responsable de comunicar cualquier modificación de los mismos. El RESPONSABLE informa de que todos los datos solicitados a través del sitio web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al USUARIO. En caso de que no se faciliten todos los datos, no se garantiza que la información y servicios facilitados sean completamente ajustados a sus necesidades.</p>
                </section>

                <section className='px-4 pb-4 pt-4'>
                    <h2 className='text-3xl font-inter text-black-950 font-bold'>3. MEDIDAS DE SEGURIDAD</h2>   
                    <div className='pt-4'>
                        <p>Que de conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, el RESPONSABLE está cumpliendo con todas las disposiciones de las normativas GDPR y LOPDGDD para el tratamiento de los datos personales de su responsabilidad, y manifiestamente con los principios descritos en el artículo 5 del GDPR, por los cuales son tratados de manera lícita, leal y transparente en relación con el interesado y adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados. </p>
                        <p className='mt-1'>El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas para aplicar las medidas de seguridad que establecen el GDPR y la LOPDGDD con el fin de proteger los derechos y libertades de los USUARIOS y les ha comunicado la información adecuada para que puedan ejercerlos. </p>
                    </div>
                </section>

                
            </main>

            <Footer />
        </>
    )
}

