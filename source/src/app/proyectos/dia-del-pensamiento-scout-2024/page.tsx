import { CommonHero } from "@/components/blocks/hero";
import { Banner } from "@/components/blocks/banner";
import { GallerySection } from "@/components/blocks/gallery";
import Image from "next/image";
import Link from "next/link";
import news from "@/assets/content/news.json";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Día del Pensamiento Scout 2024",
    description: "El primer encuentro multitudinario y solidario por el Día del Pensamiento Scout celebrado en Almería a beneficio de Nuevo Futuro.",
};

export default function DPS24() {

    const projectNews = news.slice(4, 7);

    const projectImages = [
        "/assets/images/asset-37.webp", "/assets/images/asset-38.webp",
        "/assets/images/asset-39.webp", "/assets/images/asset-40.webp",
        "/assets/images/asset-41.webp", "/assets/images/asset-42.webp",
        "/assets/images/asset-43.webp", "/assets/images/asset-44.webp",
        "/assets/images/asset-45.webp", "/assets/images/asset-46.webp",
        "/assets/images/asset-47.webp", "/assets/images/asset-48.webp",
        "/assets/images/asset-49.webp", "/assets/images/asset-50.webp"
    ];

    const sponsors = [
        { img: "/assets/images/asset-34.webp", url: "https://almeriaciudad.es/", label: "almeriaciudad.es" },
        { img: "/assets/images/asset-35.webp", url: "https://www.dipalme.org/", label: "dipalme.org" },
        { img: "/assets/images/asset-36.webp", url: "https://lasallevirgendelmar.com/", label: "lasallevirgendelmar.com" }
    ];

    return (
        <main>
            <CommonHero 
                title="Día del Pensamiento Scout 2024" 
                subtitle="Este año 2024, desde el Clan Ruta Nyeri ha surgido la iniciativa de celebrar este extraordinario día en la provincia de Almería, marcando un hito al ser la primera vez que se lleve a cabo en nuestra querida ciudad." 
                image="/assets/images/asset-45.webp" 
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
                                Este año 2024, desde el Clan Ruta Nyeri ha surgido la iniciativa de celebrar este extraordinario día en la provincia de Almería, marcando un hito al ser la primera vez que se lleve a cabo en nuestra querida ciudad. 
                            </p>
                            <p className='text-neutral-600 leading-relaxed pt-2'>
                                Junto con el eslogan “Música, Familia y Deporte”, el clan ruta Nyeri y la asociación Nuevo Futuro, realizarán un encuentro presencial donde se unirán todos los Grupos Scouts que se alojan en nuestra provincia, para celebrar en familia, y con la familia, este día tan importante para nosotros.
                            </p>
                            <p className='text-neutral-600 leading-relaxed'>
                                La fecha para dicho evento será el sábado 24 de febrero, debido a la celebración oficial de este, 22 de febrero. Este gran día, contaremos con todos los colores de las pañoletas almerienses en el colegio La Salle Virgen del Mar.
                            </p>
                            <p className='text-neutral-600 leading-relaxed font-medium text-neutral-900'>
                                Dicho evento, será una celebración solidaria donde la recaudación irá destinada a la asociación Nuevo Futuro. Por sólo 3€ tendrás acceso ilimitado a nuestro toro mecánico, torneos deportivos, concierto en directo, hinchable, concurso de talentos... ¡Y mucho más!
                            </p>
                        </div>
                    </div>

                    <div className="lg:grid grid-cols-3 items-start gap-8 pt-8 border-t border-neutral-200">
                        <div className='relative lg:mb-0 mb-8 lg:sticky lg:top-24'>
                            <div className='flex items-center gap-2'>
                                <div className='w-4 h-4 bg-primary' />
                                <h2 className='uppercase text-neutral-950/50 font-bold tracking-wider text-sm'>
                                    Patrocinadores
                                </h2>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                                {sponsors.map((sponsor, idx) => (
                                    <div key={idx} className="flex flex-col justify-between items-center p-6 bg-neutral-200/50 border border-neutral-200/60 hover:bg-neutral-200 transition-colors duration-300">
                                        <div className="h-20 w-full relative mb-4">
                                            <Image 
                                                fill 
                                                className="object-contain" 
                                                src={sponsor.img} 
                                                alt={sponsor.label} 
                                            />
                                        </div>
                                        <a 
                                            href={sponsor.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors text-center"
                                        >
                                            {sponsor.label}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
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

                    <div className="-pt-4">
                        <GallerySection title="Fotogalería del Evento" images={projectImages} />
                    </div>

                </div>
            </section>

            <Banner 
                label="¿Te ha gustado este proyecto? Únete a nosotros y participa en el siguiente." 
                href="/contacto" 
                text="¡Súmate a la aventura!" 
            />
        </main>
    );
}