"use client";

import React, { useState, useEffect, useRef } from "react";
import { CommonHero } from "@/components/blocks/hero";
import { Banner } from "@/components/blocks/banner";
import { GallerySection } from "@/components/blocks/gallery";
import Image from "next/image";

const IMAGES_PER_PAGE = 12;

export default function DPS25() {
    
    const allImages = [
        "/assets/images/dps25/01.webp", "/assets/images/dps25/02.webp", "/assets/images/dps25/03.webp", "/assets/images/dps25/04.webp",
        "/assets/images/dps25/05.webp", "/assets/images/dps25/06.webp", "/assets/images/dps25/07.webp", "/assets/images/dps25/08.webp",
        "/assets/images/dps25/09.webp", "/assets/images/dps25/11.webp", "/assets/images/dps25/12.webp", "/assets/images/dps25/13.webp",
        "/assets/images/dps25/14.webp", "/assets/images/dps25/15.webp", "/assets/images/dps25/16.webp", "/assets/images/dps25/17.webp",
        "/assets/images/dps25/18.webp", "/assets/images/dps25/19.webp", "/assets/images/dps25/20.webp", "/assets/images/dps25/21.webp",
        "/assets/images/dps25/22.webp", "/assets/images/dps25/23.webp", "/assets/images/dps25/24.webp", "/assets/images/dps25/25.webp",
        "/assets/images/dps25/26.webp", "/assets/images/dps25/27.webp", "/assets/images/dps25/28.webp", "/assets/images/dps25/29.webp",
        "/assets/images/dps25/030.webp", "/assets/images/dps25/31.webp", "/assets/images/dps25/32.webp", "/assets/images/dps25/33.webp",
        "/assets/images/dps25/34.webp", "/assets/images/dps25/35.webp", "/assets/images/dps25/36.webp", "/assets/images/dps25/37.webp",
        "/assets/images/dps25/38.webp", "/assets/images/dps25/39.webp", "/assets/images/dps25/40.webp", "/assets/images/dps25/41.webp",
        "/assets/images/dps25/42.webp", "/assets/images/dps25/44.webp", "/assets/images/dps25/45.webp", "/assets/images/dps25/46.webp",
        "/assets/images/dps25/47.webp", "/assets/images/dps25/48.webp", "/assets/images/dps25/49.webp", "/assets/images/dps25/50.webp",
        "/assets/images/dps25/51.webp", "/assets/images/dps25/52.webp", "/assets/images/dps25/53.webp", "/assets/images/dps25/54.webp",
        "/assets/images/dps25/55.webp", "/assets/images/dps25/56.webp", "/assets/images/dps25/57.webp", "/assets/images/dps25/58.webp",
        "/assets/images/dps25/59.webp", "/assets/images/dps25/60.webp", "/assets/images/dps25/61.webp", "/assets/images/dps25/62.webp",
        "/assets/images/dps25/63.webp", "/assets/images/dps25/64.webp", "/assets/images/dps25/65.webp", "/assets/images/dps25/66.webp",
        "/assets/images/dps25/67.webp", "/assets/images/dps25/68.webp", "/assets/images/dps25/69.webp", "/assets/images/dps25/70.webp",
        "/assets/images/dps25/71.webp", "/assets/images/dps25/72.webp", "/assets/images/dps25/73.webp"
    ];

    const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleCount((prev) => Math.min(prev + IMAGES_PER_PAGE, allImages.length));
                }
            },
            { rootMargin: "400px" }
        );

        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => { if (loaderRef.current) observer.unobserve(loaderRef.current); };
    }, [allImages.length]);

    const sponsors = [
        { img: "/assets/images/asset-35.webp", url: "https://www.dipalme.org/", label: "dipalme.org" },
        { img: "/assets/images/asset-53.webp", url: "https://www.facebook.com/castilloshinchableselcorsa/", label: "fb/castilloshinchableselcorsa" },
        { img: "/assets/images/asset-36.webp", url: "https://lasallevirgendelmar.com/", label: "lasallevirgendelmar.com" }
    ];

    return (
        <main>
            <CommonHero 
                title="Día del Pensamiento Scout 2025" 
                subtitle="¡El encuentro scout más esperado del año! Un evento solidario a favor de Nuevo Futuro donde celebrar en familia el escultismo." 
                image="/assets/images/dps25/09.webp" 
            />

            <section className='pb-20 pt-20 bg-neutral-50 text-neutral-950 px-4'>
                <div className='container mx-auto max-w-6xl relative space-y-24'>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-neutral-200/50 p-8 -2xl border border-neutral-200/60 flex flex-col items-center justify-center text-center gap-4">
                            <h3 className="text-2xl font-bold font-serif text-neutral-950">¡Ya disponible!</h3>
                            <p className="text-neutral-600 text-sm md:text-base">¡No te quedes sin tu entrada! Ya disponible a la venta las entradas online del Día del Pensamiento Scout.</p>
                            <button disabled className="mt-2 px-6 py-2 bg-tall-poppy-700/50 text-white -xl flex items-center gap-2 cursor-not-allowed transition-all">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 9V3H15M21 3L12 12M10 3H7.8C6.12 3 5.28 3 4.64 3.33C4.07 3.61 3.61 4.07 3.33 4.64C3 5.28 3 6.12 3 7.8V16.2C3 17.88 3 18.72 3.33 19.36C3.61 19.93 4.07 20.39 4.64 20.67C5.28 21 6.12 21 7.8 21H16.2C17.88 21 18.72 21 19.36 20.67C19.93 20.39 20.39 19.93 20.67 19.36C21 18.72 21 17.88 21 16.2V14" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                <span className="font-medium">Comprar entradas</span>
                            </button>
                        </div>
                        <div className="bg-neutral-200/50 p-8 -2xl border border-neutral-200/60 flex flex-col items-center justify-center text-center gap-4">
                            <h3 className="text-2xl font-bold font-serif text-neutral-950">Hazte Voluntario</h3>
                            <p className="text-neutral-600 text-sm md:text-base"><b>¡Únete al Día del Pensamiento Scout!</b> Las inscripciones del voluntariado ya están abiertas. Colabora y comparte tu experiencia.</p>
                            <button disabled className="mt-2 px-6 py-2 bg-tall-poppy-700/50 text-white -xl flex items-center gap-2 cursor-not-allowed transition-all">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 9V3H15M21 3L12 12M10 3H7.8C6.12 3 5.28 3 4.64 3.33C4.07 3.61 3.61 4.07 3.33 4.64C3 5.28 3 6.12 3 7.8V16.2C3 17.88 3 18.72 3.33 19.36C3.61 19.93 4.07 20.39 4.64 20.67C5.28 21 6.12 21 7.8 21H16.2C17.88 21 18.72 21 19.36 20.67C19.93 20.39 20.39 19.93 20.67 19.36C21 18.72 21 17.88 21 16.2V14" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                <span className="font-medium">Inscribirse</span>
                            </button>
                        </div>
                    </div>

                    <div className="lg:grid grid-cols-3 items-start gap-8">
                        <div className='relative lg:mb-0 mb-8 lg:sticky lg:top-24'>
                            <div className='flex items-center gap-2'>
                                <div className='w-4 h-4 bg-primary' />
                                <h2 className='uppercase text-neutral-950/50 font-bold tracking-wider text-sm'>El Proyecto</h2>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-6">
                            <p className='md:text-3xl text-2xl font-serif font-medium text-neutral-950 leading-tight'>
                                El Día del Pensamiento Scout es un evento organizado por la Asociación Juvenil Nyeri, cuyo propósito es reunir a los Grupos Scouts de la provincia de Almería en una jornada de convivencia, aprendizaje y solidaridad.
                            </p>
                            <p className='text-neutral-600 leading-relaxed pt-2'>
                                Este año, hemos dado un paso más allá, contando con la participación de casi todos los grupos de la ciudad, además de scouts que han venido desde otras localidades para compartir esta gran celebración.
                            </p>
                            <p className='text-neutral-600 leading-relaxed'>
                                Por segundo año consecutivo, Almería ha vuelto a ser el epicentro del espíritu Scout, y desde la asociación ya estamos trabajando para que esta edición sea aún más especial. La fecha elegida es el sábado 22 de febrero de 2025 (aunque se traspasó al domingo 23, por razones climáticas), y el evento se llevó a cabo nuevamente en el colegio La Salle Virgen del Mar, donde el colorido de las pañoletas almerienses llenó cada rincón.
                            </p>
                            <p className='text-neutral-600 leading-relaxed font-medium text-neutral-900'>
                                Además, este encuentro tiene un fuerte carácter solidario, ya que, al igual que en la edición anterior, la recaudación será destinada a la asociación Nuevo Futuro.
                            </p>
                        </div>
                    </div>

                    <div className="lg:grid grid-cols-3 items-start gap-8 pt-8 border-t border-neutral-200">
                        <div className='relative lg:mb-0 mb-8 lg:sticky lg:top-24'>
                            <div className='flex items-center gap-2'>
                                <div className='w-4 h-4 bg-primary' />
                                <h2 className='uppercase text-neutral-950/50 font-bold tracking-wider text-sm'>Colaboradores</h2>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                                {sponsors.map((sponsor, idx) => (
                                    <div key={idx} className="flex flex-col justify-between items-center p-6 bg-neutral-200/50 -2xl border border-neutral-200/60 hover:bg-neutral-200 transition-colors duration-300">
                                        <div className="h-20 w-full relative mb-4">
                                            <Image fill className="object-contain" src={sponsor.img} alt={sponsor.label} />
                                        </div>
                                        <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors text-center">
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
                            <h2 className='uppercase text-neutral-950/50 font-bold tracking-wider text-sm'>Zona de Descargas</h2>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { url: "/download/comisiones.pdf", label: "Orientación a las Comisiones (PDF)" },
                                { url: "/download/plantilla-programacion.pdf", label: "Plantilla de Programación (PDF)" },
                                { url: "/download/plantilla-programacion.docx", label: "Plantilla de Programación (WORD)" },
                                { url: "/download/programacion-castores.pdf", label: "Programación de Castores (PDF)" },
                            ].map((doc, idx) => (
                                <a key={idx} href={doc.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 bg-white -xl border border-neutral-200 -sm hover:border-primary/50 hover:-md transition-all text-neutral-700 font-medium">
                                    <svg className="w-5 h-5 text-tall-poppy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                                    {doc.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="-pt-4">
                        <GallerySection title="Fotogalería del Evento" images={allImages.slice(0, visibleCount)} />
                        {visibleCount < allImages.length && (
                            <div ref={loaderRef} className="w-full h-32 flex items-center justify-center mt-8">
                                <div className="w-8 h-8 border-4 border-primary border-t-transparent -full animate-spin"></div>
                            </div>
                        )}
                        {visibleCount >= allImages.length && (
                            <div className="w-full text-center mt-12 text-neutral-400 text-sm font-sans">
                                Has llegado al final de la galería fotográfica
                            </div>
                        )}
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