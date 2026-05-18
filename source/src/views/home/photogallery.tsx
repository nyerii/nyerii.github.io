import Image from "next/image";
import Link from "next/link";

export const HomeGallery = () => {
    return (
        <section className="bg-neutral-950 pb-20 pt-20 px-4">
            <div className="container mx-auto max-w-6xl relative">
        
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                        <h2 className="text-3xl font-bold font-sans text-neutral-50">Fotogalería</h2>
                    </div>
                    <Link className="flex items-center gap-2 text-neutral-400 group relative hover:text-neutral-50 transition-all duration-200 text-sm font-sans" href="/fotogaleria">
                        <span>Ver completa</span>
                        <div className="relative w-4 h-4">
                            <svg className="w-4 h-4 text-transparent absolute" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg className="w-4 h-4 absolute left-0 top-0 group-hover:translate-x-[5px] transition-all duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
                    <div className="h-80 md:h-[380px] relative group overflow-hidden rounded-2xl bg-neutral-900">
                        <Image fill className="object-cover transition-transform duration-500 group-hover:scale-105" src="/assets/images/asset-02.webp" alt="Campamento de Almócita" />
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
                        <div className="absolute inset-0 z-20 opacity-0 transition-all translate-y-4 group-hover:translate-y-0 duration-500 group-hover:opacity-100 flex flex-col justify-end p-6">
                            <h3 className="text-neutral-200 font-serif text-3xl leading-tight">Campamento de Almócita</h3>
                            <time dateTime="2024" className="text-neutral-400 font-sans text-sm mt-1">2024</time>
                        </div>
                    </div>

                    <div className="h-80 md:h-[380px] md:col-span-2 relative group overflow-hidden rounded-2xl bg-neutral-900">
                        <Image fill className="object-cover transition-transform duration-500 group-hover:scale-105" src="/assets/images/dps25/11.webp" alt="Día del Pensamiento Scout 2025" />
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
                        <div className="absolute inset-0 z-20 opacity-0 transition-all translate-y-4 group-hover:translate-y-0 duration-500 group-hover:opacity-100 flex flex-col justify-end p-6">
                            <h3 className="text-neutral-200 font-serif text-3xl leading-tight">Día del Pensamiento Scout 2025</h3>
                            <time dateTime="2025" className="text-neutral-400 font-sans text-sm mt-1">2025</time>
                        </div>
                    </div>

                    <div className="h-80 md:h-[380px] md:col-span-2 relative group overflow-hidden rounded-2xl bg-neutral-900">
                        <Image fill className="object-cover transition-transform duration-500 group-hover:scale-105" src="/assets/images/asset-01.webp" alt="San Jorge Asociativo, Castala" />
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
                        <div className="absolute inset-0 z-20 opacity-0 transition-all translate-y-4 group-hover:translate-y-0 duration-500 group-hover:opacity-100 flex flex-col justify-end p-6">
                            <h3 className="text-neutral-200 font-serif text-3xl leading-tight">San Jorge Asociativo, Castala</h3>
                            <time dateTime="2024" className="text-neutral-400 font-sans text-sm mt-1">2024</time>
                        </div>
                    </div>

                    <div className="h-80 md:h-[380px] relative group overflow-hidden rounded-2xl bg-neutral-900">
                        <Image fill className="object-cover transition-transform duration-500 group-hover:scale-105" src="/assets/images/asset-04.webp" alt="IX Fiesta de la Primavera, G.S. Alpha" />
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
                        <div className="absolute inset-0 z-20 opacity-0 transition-all translate-y-4 group-hover:translate-y-0 duration-500 group-hover:opacity-100 flex flex-col justify-end p-6">
                            <h3 className="text-neutral-200 font-serif text-3xl leading-tight">IX Fiesta de la Primavera, G.S. Alpha</h3>
                            <time dateTime="2024" className="text-neutral-400 font-sans text-sm mt-1">2024</time>
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
    );
};