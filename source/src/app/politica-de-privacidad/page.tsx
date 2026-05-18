import { CommonHero } from "@/components/blocks/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidad",
    description: "Información sobre la privacidad, tratamiento y protección de los datos de los usuarios y voluntarios de la Asociación Juvenil Nyeri.",
};

export default function Privacidad() {
    return (
        <main>

            <CommonHero title="Política de Privacidad" subtitle="Transparencia y protección de tus datos personales." image="/assets/images/asset-05.webp"/>

            <section className='pb-20 pt-20 bg-neutral-50 text-neutral-950 px-4'>
                <div className='container mx-auto max-w-6xl relative'>

                    <div className="lg:grid grid-cols-3 items-start gap-8">
                        
                        <div className='relative lg:mb-0 mb-8 lg:sticky lg:top-24'>
                            <div className='flex items-center gap-2'>
                                <div className='w-4 h-4 bg-primary' />
                                <h2 className='uppercase text-neutral-950/50 font-bold tracking-wider text-sm'>Términos Legales</h2>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-6">
                            
                            <p className='md:text-3xl text-2xl font-serif font-medium text-neutral-950'>En la Asociación Juvenil Nyeri nos tomamos muy en serio la privacidad y la protección de los datos de nuestros usuarios, voluntarios y colaboradores.</p>

                            <h3 className='text-2xl font-serif font-bold mt-12 mb-4'>1. INFORMACIÓN AL USUARIO</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-neutral-950">¿Quién es el responsable del tratamiento de tus datos personales?</h4>
                                    <p className='text-neutral-600 leading-relaxed mt-1'>ASOCIACION JUVENIL NYERI es el RESPONSABLE del tratamiento de los datos personales del USUARIO y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).</p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-neutral-950 mt-6">¿Para qué tratamos tus datos personales?</h4>
                                    <p className='text-neutral-600 leading-relaxed mt-1 mb-2'>Para mantener una relación comercial con el usuario. Las operaciones previstas para realizar el tratamiento son:</p>
                                    <ul className="list-disc pl-5 text-neutral-600 space-y-2 leading-relaxed">
                                        <li>Remisión de comunicaciones comerciales publicitarias por e-mail, fax, SMS, MMS, redes sociales o cualquier otro medio electrónico o físico, presente o futuro, que posibilite realizar comunicaciones comerciales. Estas comunicaciones serán realizadas por el RESPONSABLE y estarán relacionadas con sus productos y servicios, o de sus colaboradores o proveedores, con los que este haya alcanzado algún acuerdo de promoción. En este caso, los terceros nunca tendrán acceso a los datos personales.</li>
                                        <li>Realizar estudios de mercado y análisis estadísticos.</li>
                                        <li>Tramitar encargos, solicitudes, dar respuesta a las consultas o cualquier tipo de petición que sea realizada por el USUARIO a través de cualquiera de las formas de contacto que se ponen a su disposición en la página web del RESPONSABLE.</li>
                                        <li>Remitir el boletín informativo online, sobre novedades, ofertas y promociones en nuestra actividad.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-neutral-950 mt-6">¿Por qué motivo podemos tratar tus datos personales?</h4>
                                    <p className='text-neutral-600 leading-relaxed mt-1 mb-2'>
                                        Porque el tratamiento está legitimado por el artículo 6 del GDPR de la siguiente forma:
                                    </p>
                                    <ul className="list-disc pl-5 text-neutral-600 space-y-2 leading-relaxed">
                                        <li>Con el consentimiento del USUARIO: remisión de comunicaciones comerciales y del boletín informativo.</li>
                                        <li>Por interés legítimo del RESPONSABLE: realizar estudios de mercado, análisis estadísticos, etc. y tramitar encargos, solicitudes, etc. a petición del USUARIO.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-neutral-950 mt-6">¿Durante cuánto tiempo guardaremos tus datos personales?</h4>
                                    <p className='text-neutral-600 leading-relaxed mt-1'>Se conservarán durante no más tiempo del necesario para mantener el fin del tratamiento o existan prescripciones legales que dictaminen su custodia y cuando ya no sea necesario para ello, se suprimirán con medidas de seguridad adecuadas para garantizar la anonimización de los datos o la destrucción total de los mismos.</p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-neutral-950 mt-6">¿A quién facilitamos tus datos personales?</h4>
                                    <p className='text-neutral-600 leading-relaxed mt-1'>No está prevista ninguna comunicación de datos personales a terceros salvo, si fuese necesario para el desarrollo y ejecución de las finalidades del tratamiento, a nuestros proveedores de servicios relacionados con comunicaciones, con los cuales el RESPONSABLE tiene suscritos los contratos de confidencialidad y de encargado de tratamiento exigidos por la normativa vigente de privacidad.</p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-neutral-950 mt-6">¿Cuáles son tus derechos?</h4>
                                    <p className='text-neutral-600 leading-relaxed mt-1 mb-2'>Los derechos que asisten al USUARIO son:</p>
                                    <ul className="list-disc pl-5 text-neutral-600 space-y-2 leading-relaxed">
                                        <li>Derecho a retirar el consentimiento en cualquier momento.</li>
                                        <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u oposición a su tratamiento.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-neutral-950 mt-6">Datos de contacto para ejercer sus derechos:</h4>
                                    <p className='text-neutral-600 leading-relaxed mt-1'>
                                        ASOCIACION JUVENIL NYERI.<br/>
                                        C. RAFAEL CALATRAVA, 7 - 04006 ALMERIA (Almería).<br/>
                                        E-mail: <a href="mailto:nyeri.clan@gmail.com" className="text-primary hover:underline">NYERI.CLAN@GMAIL.COM</a>
                                    </p>
                                </div>
                            </div>

                            <h3 className='text-2xl font-serif font-bold mt-12 mb-4'>2. CARÁCTER OBLIGATORIO O FACULTATIVO DE LA INFORMACIÓN FACILITADA</h3>
                            <p className='text-neutral-600 leading-relaxed'>Los USUARIOS, mediante la marcación de las casillas correspondientes y la entrada de datos en los campos, marcados con un asterisco (*) en el formulario de contacto o presentados en formularios de descarga, aceptan expresamente y de forma libre e inequívoca, que sus datos son necesarios para atender su petición, por parte del prestador, siendo voluntaria la inclusión de datos en los campos restantes. El USUARIO garantiza que los datos personales facilitados al RESPONSABLE son veraces y se hace responsable de comunicar cualquier modificación de los mismos.</p>
                            <p className='text-neutral-600 leading-relaxed mt-4'>El RESPONSABLE informa de que todos los datos solicitados a través del sitio web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al USUARIO. En caso de que no se faciliten todos los datos, no se garantiza que la información y servicios facilitados sean completamente ajustados a sus necesidades.</p>

                            <h3 className='text-2xl font-serif font-bold mt-12 mb-4'>3. MEDIDAS DE SEGURIDAD</h3>
                            <p className='text-neutral-600 leading-relaxed'>Que de conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, el RESPONSABLE está cumpliendo con todas las disposiciones de las normativas GDPR y LOPDGDD para el tratamiento de los datos personales de su responsabilidad, y manifiestamente con los principios descritos en el artículo 5 del GDPR, por los cuales son tratados de manera lícita, leal y transparente en relación con el interesado y adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados.</p>
                            <p className='text-neutral-600 leading-relaxed mt-4'>El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas para aplicar las medidas de seguridad que establecen el GDPR y la LOPDGDD con el fin de proteger los derechos y libertades de los USUARIOS y les ha comunicado la información adecuada para que puedan ejercerlos.</p>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}