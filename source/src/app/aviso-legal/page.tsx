import { CommonHero } from "@/components/blocks/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aviso Legal",
    description: "Condiciones de uso e información legal del sitio web de la Asociación Juvenil Nyeri.",
};

export default function AvisoLegal() {
    return (
        <main>
            <CommonHero title="Aviso Legal" subtitle="Información legal y condiciones de uso de nuestro sitio web." image="/assets/images/asset-40.webp" />

            <section className='pb-20 pt-20 bg-neutral-50 text-neutral-950 px-4'>
                <div className='container mx-auto max-w-6xl relative'>

                    <div className="lg:grid grid-cols-3 items-start gap-8">
                        
                        <div className='relative lg:mb-0 mb-8 lg:sticky lg:top-24'>
                            <div className='flex items-center gap-2'>
                                <div className='w-4 h-4 bg-primary' />
                                <h2 className='uppercase text-neutral-950/50 font-bold tracking-wider text-sm'>
                                    Información General
                                </h2>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-6">
                            
                            <p className='md:text-3xl text-2xl font-serif font-medium text-neutral-950'>
                                El presente aviso legal regula el uso y utilización del sitio web de la Asociación Juvenil Nyeri.
                            </p>

                            <h3 className='text-2xl font-serif font-bold mt-12 mb-4'>1. DATOS IDENTIFICATIVOS</h3>
                            <p className='text-neutral-600 leading-relaxed'>
                                En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el presente sitio web (<a href="https://www.nyeri.es" className="text-primary hover:underline">www.nyeri.es</a>) es propiedad de:
                            </p>
                            <ul className="list-none p-4 text-neutral-600 space-y-2 mt-4 leading-relaxed bg-neutral-100 border border-neutral-200">
                                <li><strong>Titular:</strong> Asociación Juvenil Nyeri</li>
                                <li><strong>CIF:</strong> G75563890</li>
                                <li><strong>Domicilio:</strong> C. Rafael Calatrava nº7, 04006 Almería (Almería)</li>
                                <li><strong>Registro:</strong> Inscrita con el número 568 de la Sección 4 del registro de Asociaciones de Andalucía.</li>
                            </ul>

                            <h3 className='text-2xl font-serif font-bold mt-12 mb-4'>2. PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
                            <p className='text-neutral-600 leading-relaxed'>
                                Los derechos de propiedad intelectual del contenido de las páginas web, su diseño gráfico y códigos son titularidad de la <strong>Asociación Juvenil Nyeri</strong> y, por tanto, queda expresamente prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos de sus páginas web, ni aún citando las fuentes, salvo consentimiento expreso y por escrito de la Asociación Juvenil Nyeri.
                            </p>

                            <h3 className='text-2xl font-serif font-bold mt-12 mb-4'>3. CONDICIONES DE USO DEL SITIO WEB</h3>
                            <p className='text-neutral-600 leading-relaxed'>
                                El usuario se compromete a hacer un uso adecuado, correcto y lícito del sitio web y de sus contenidos, de conformidad con la legislación aplicable en cada momento, el presente Aviso Legal, las buenas costumbres generalmente aceptadas y el orden público. El usuario no podrá utilizar la web con fines ilícitos o que puedan dañar, inutilizar, sobrecargar o deteriorar el portal.
                            </p>

                            <h3 className='text-2xl font-serif font-bold mt-12 mb-4'>4. POLÍTICA DE ENLACES (LINKS)</h3>
                            <p className='text-neutral-600 leading-relaxed'>
                                La Asociación Juvenil Nyeri no asume responsabilidad alguna por la información contenida en páginas web de terceros a las que se pueda acceder mediante "links" o enlaces desde la página web propiedad de la Asociación Juvenil Nyeri.
                            </p>
                            <p className='text-neutral-600 leading-relaxed mt-4'>
                                La presencia de "links" o enlaces en la página web tiene una finalidad meramente informativa y en ningún caso supone sugerencia, invitación o recomendación sobre los mismos.
                            </p>

                            <h3 className='text-2xl font-serif font-bold mt-12 mb-4'>5. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h3>
                            <p className='text-neutral-600 leading-relaxed'>
                                La relación entre la Asociación Juvenil Nyeri y el usuario se regirá por la normativa española vigente. Para la resolución de cualquier controversia o conflicto que pudiera derivarse del acceso o uso de este sitio web, ambas partes se someterán expresamente a los juzgados y tribunales de la ciudad de Almería, renunciando a cualquier otro fuero que pudiera corresponderles.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}