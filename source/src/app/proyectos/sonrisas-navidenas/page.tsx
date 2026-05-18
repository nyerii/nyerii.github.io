import { CommonHero } from "@/components/blocks/hero";
import { Banner } from "@/components/blocks/banner";
import Image from "next/image";
import Link from "next/link";
import news from "@/assets/content/news.json";
import { GallerySection } from "@/components/blocks/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sonrisas Navideñas",
    description: "Nuestra primera gran campaña solidaria de recogida de juguetes en Almería en colaboración con ASISA y la Asociación Ítaca.",
};

export default function SonrisasNavidenas() {
    
    const projectNews = news.slice(0, 3);

    const projectImages = [
        "/assets/images/asset-29.webp",
        "/assets/images/asset-27.webp",
        "/assets/images/asset-32.webp",
        "/assets/images/asset-30.webp",
        "/assets/images/asset-28.webp",
        "/assets/images/asset-31.webp"
    ];

    return (
        <main>
            <CommonHero 
                title="Sonrisas Navideñas" 
                subtitle="Nyeri se enorgullece de presentar su primera campaña solidaria: una recogida de juguetes para que todos los niños y jóvenes de Almería puedan disfrutar de la magia de la Navidad." 
                image="/assets/images/asset-23.webp" 
            />

            <section className='pb-20 pt-20 bg-neutral-50 text-neutral-950 px-4'>
                <div className='container mx-auto max-w-6xl relative space-y-24'>

                    <div className="lg:grid grid-cols-3 items-start gap-8">
                        <div className='relative lg:mb-0 mb-8 lg:sticky lg:top-24'>
                            <div className='flex items-center gap-2'>
                                <div className='w-4 h-4 bg-primary' />
                                <h2 className='uppercase text-neutral-950/50 font-bold tracking-wider text-sm'>
                                    El Proyecto
                                </h2>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-6">
                            <p className='md:text-3xl text-2xl font-serif font-medium text-neutral-950 leading-tight'>
                                La recién fundada asociación juvenil Nyeri, comprometida con la mejora de la vida de los jóvenes y niños de nuestra comunidad, se enorgullece en anunciar su primer proyecto oficial: una ambiciosa y solidaria campaña de recogida de juguetes para que todos los niños y jóvenes de la ciudad de Almería puedan experimentar la alegría de recibir un regalo en nuestra próxima Navidad. 
                            </p>
                            <p className='text-neutral-600 leading-relaxed pt-2'>
                                Esta iniciativa nace del profundo deseo de los miembros de Nyeri de hacer una diferencia tangible en la vida de aquellos que más lo necesitan, especialmente en estas fechas tan significativas, cuando la ilusión y la esperanza juegan un papel fundamental en el desarrollo emocional de los más pequeños.
                            </p>
                            <p className='text-neutral-600 leading-relaxed'>
                                Nyeri ha sido creada con el firme propósito de generar un impacto positivo en la comunidad, brindando apoyo y recursos a los jóvenes en riesgo de exclusión social, a aquellos que viven en condiciones de pobreza, y a todos aquellos que, por diversas circunstancias, se encuentran en situación de vulnerabilidad. Conscientes de las crecientes desigualdades y los desafíos económicos que enfrentan muchas familias en Almería, esta campaña de recogida de juguetes busca tender una mano amiga, asegurando que ningún niño se quede sin una sonrisa en estas fiestas.
                            </p>
                            <p className='text-neutral-600 leading-relaxed'>
                                El proyecto se ha diseñado con una visión integral, abordando no solo la recolección de juguetes nuevos y en buen estado, sino también la concienciación sobre la importancia de la solidaridad y la participación activa de la comunidad. Para Nyeri, este no es solo un esfuerzo de caridad, sino un llamado a la acción colectiva, donde cada ciudadano de Almería puede contribuir a hacer de esta Navidad un momento inolvidable para todos los niños, sin excepción.
                            </p>
                            <p className='text-neutral-600 leading-relaxed'>
                                En un mundo donde, a menudo, las diferencias económicas se traducen en diferencias de oportunidades y experiencias, la asociación Nyeri quiere demostrar que, con un poco de empatía y compromiso social, es posible reducir esas brechas y ofrecer a todos los niños una Navidad llena de amor, felicidad y esperanza. Esta campaña de recogida de juguetes no solo busca cumplir el deseo de un niño de recibir un regalo, sino también infundir un sentido de pertenencia y cuidado en cada uno de ellos, recordándoles que son valorados y queridos por su comunidad.
                            </p>
                            <p className='text-neutral-600 leading-relaxed font-medium text-neutral-900'>
                                Con este primer proyecto, Nyeri no solo da el primer paso en su misión de crear un entorno más justo e inclusivo para la juventud de Almería, sino que también sienta las bases para futuras iniciativas que continuarán promoviendo los valores de solidaridad, igualdad y cooperación. Nyeri invita a todos los ciudadanos a sumarse a esta noble causa, a contribuir con lo que puedan y a ser parte del cambio que tanto necesita nuestra sociedad. Porque, al final, no se trata solo de juguetes, sino de construir juntos un futuro más brillante para nuestros jóvenes y para nuestra ciudad.
                            </p>
                        </div>
                    </div>

                    <div className="lg:grid grid-cols-3 items-start gap-8">
                        <div className='relative lg:mb-0 mb-8 lg:sticky lg:top-24'>
                            <div className='flex items-center gap-2'>
                                <div className='w-4 h-4 bg-primary' />
                                <h2 className='uppercase text-neutral-950/50 font-bold tracking-wider text-sm'>
                                    Colaboración
                                </h2>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-6">
                            <p className='md:text-3xl text-2xl font-serif font-medium text-neutral-950 leading-tight'>
                                La Asociación Juvenil Nyeri trabajará en colaboración con la Asociación Ítaca para destinar la totalidad de los juguetes recogidos en su campaña de Navidad a los niños y jóvenes que forman parte de Ítaca. 
                            </p>
                            <p className='text-neutral-600 leading-relaxed pt-2'>
                                Esta decisión se basa en los lazos compartidos entre ambas organizaciones, ya que tanto Nyeri como Ítaca están profundamente vinculadas a los valores del escultismo, que promueven la educación, el servicio y el compromiso social.
                            </p>
                            <p className='text-neutral-600 leading-relaxed'>
                                La Asociación Ítaca, conocida por su incansable labor humanitaria y su dedicación a mejorar la calidad de vida de menores y jóvenes en zonas desfavorecidas, se alinea perfectamente con los objetivos de Nyeri. Ítaca no solo trabaja para romper las barreras de exclusión social, económica y cultural, sino que también se esfuerza por generar cambios significativos en las conductas y hábitos de los jóvenes, ayudándoles a integrarse plenamente en la sociedad.
                            </p>
                            <p className='text-neutral-600 leading-relaxed'>
                                ASISA Almería se suma a este proyecto solidario, aportando su compromiso con el bienestar y desarrollo integral de la comunidad. Como empresa dedicada a la salud y al cuidado de las personas, ASISA refuerza el impacto de la iniciativa, contribuyendo a que más niños y jóvenes puedan disfrutar de una Navidad llena de ilusión y esperanza.
                            </p>

                            <div className="mt-8 pt-6 border-t border-neutral-200">
                                <a 
                                    href="https://asociacionitaca.org" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center gap-2 font-bold text-primary hover:text-tall-poppy-800 transition-colors"
                                >
                                    Visitar asociacionitaca.org
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="-mt-4">
                        <GallerySection title="Fotogalería del Proyecto" images={projectImages} />
                    </div>

                    <div className="pt-8 border-t border-neutral-200">
                        <div className='flex items-center gap-2 mb-8'>
                            <div className='w-4 h-4 bg-primary' />
                            <h2 className='uppercase text-neutral-950/50 font-bold tracking-wider text-sm'>
                                Impacto en Medios
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {projectNews.map((item, index) => {
                                const newsImage = item.banner || "/assets/images/dps25/62.webp";
                                
                                return (
                                    <article key={index} className="w-full flex flex-col gap-4">
                                        <div className="w-full h-48 sm:h-[220px] relative overflow-hidden bg-neutral-100 -xl">
                                            <Image 
                                                fill 
                                                className="object-cover" 
                                                src={newsImage} 
                                                alt={item.alt || item.title} 
                                            />
                                            <span className="absolute top-3 left-3 bg-neutral-900/60 backdrop-blur-xs text-white text-xs uppercase font-sans font-bold py-1 px-2.5 rounded-md">
                                                {item.entity}
                                            </span>
                                        </div>
                                        <div className="flex flex-col grow justify-between">
                                            <div className="space-y-2">
                                                <h3 className="text-xl font-bold font-sans text-neutral-950 line-clamp-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-neutral-600 text-sm font-sans line-clamp-3 leading-relaxed">
                                                    {item.subtitle}
                                                </p>
                                            </div>
                                            <div className="pt-4">
                                                {item.link && (
                                                    <Link 
                                                        href={item.link} 
                                                        target={item.link.startsWith("http") ? "_blank" : "_self"} 
                                                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined} 
                                                        className="relative group inline-flex items-center gap-2 text-primary font-sans font-bold text-sm"
                                                    >
                                                        <span>Leer más</span>
                                                        <div className="relative w-4 h-4">
                                                            <svg className="w-4 h-4 text-transparent absolute" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <svg className="w-4 h-4 absolute left-0 top-0 group-hover:translate-x-1 transition-all duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </section>

            <Banner 
                label="¿Quieres proponer una campaña similar o colaborar en futuros proyectos?" 
                href="/contacto" 
                text="Ponte en contacto" 
            />
        </main>
    );
}