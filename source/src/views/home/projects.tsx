"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import projectsData from "@/assets/content/projects.json";

export const HomeProjects = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        align: "start", 
        containScroll: "trimSnaps",
        dragFree: false
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    const onSelect = useCallback((api: any) => {
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi])

    return (
        <section className='pb-20 bg-neutral-50 text-neutral-950 px-4 overflow-x-hidden'>
            <div className='w-full lg:grid lg:grid-cols-[minmax(0,1fr)_max-content] xl:grid-cols-[minmax(0,1fr)_1152px_minmax(0,1fr)] relative'>
                
                <div className='xl:col-start-2 w-full space-y-4 mb-8'>
                    <div className='flex top-0 items-center gap-2'>
                        <div className='w-4 h-4 bg-primary' />
                        <h2 className='uppercase text-neutral-950/50'>Nuestros Proyectos</h2>
                    </div>
                    <div className="space-y-1">
                        <h2 className='font-bold text-3xl'>Iniciativas que transforman nuestro entorno</h2>
                        <p className='text-neutral-950/75'>"Sumamos esfuerzos para dejar huella y construir un impacto positivo."</p>
                    </div>
                </div>

                <div className="xl:col-start-2 relative xl:col-span-2 overflow-hidden w-full" ref={emblaRef}>

                    <div className="flex gap-6 backface-hidden">
                        {projectsData.map((project, index) => {
                            const projectImage = project.image || "/assets/images/dps25/62.webp";
                            return (
                                <div key={index} className="flex-none w-72.5 sm:w-90 flex flex-col gap-4">
                  
                                    <div className="w-full h-100 relative overflow-hidden bg-neutral-100">
                                        <Image fill className="object-cover" src={projectImage} alt={project.title} />
                                        <span className="absolute top-3 left-3 bg-neutral-900/50 backdrop-blur-xs text-white text-xs uppercase font-sans font-bold py-1 px-2.5 rounded-md">{project.type}</span>
                                    </div>

                                    <div className="flex flex-col gap-2 grow justify-between">
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold font-sans text-neutral-950 line-clamp-2">{project.title}</h3>
                                            <p className="text-neutral-600 text-sm font-sans line-clamp-4 leading-relaxed">{project.subtitle}</p>
                                        </div>
                                        <div className="pt-2">
                                            {project.link && (
                                                <Link href={project.link} className="relative group inline-flex items-center gap-2 text-primary font-sans text-sm">
                                                    <span>Saber más</span>
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

                                </div>
                            );
                        })}
                    </div>

                    {canScrollPrev && (
                        <div className="absolute z-10 top-50 left-2">
                            <button className="flex p-2 group rounded-full bg-neutral-50" onClick={scrollPrev}>
                                <svg className="size-4 group-hover:text-primary" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    )}

                    {canScrollNext && (
                        <div className="absolute z-10 top-50 right-2">
                            <button className="flex p-2 group rounded-full bg-neutral-50" onClick={scrollNext}>
                                <svg className="size-4 group-hover:text-primary" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    )}

                    
                </div>

            </div>
        </section>
    );
};