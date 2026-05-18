import { CommonHero } from "@/components/blocks/hero";
import { ContactForm } from "@/components/form/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto",
    description: "¿Tienes una idea, duda o quieres sumarte a nuestra asociación? Ponte en contacto con nosotros para colaborar o ser voluntario.",
};

export default function Contacto() {
    return (
        <main>
            <CommonHero 
                title="Contacto" 
                subtitle="¿Tienes una idea, duda o quieres sumarte? ¡Hablemos!" 
                image="/assets/images/photogallery/38.webp"
            />

            <section className='pb-20 pt-20 bg-neutral-50 text-neutral-950 px-4'>
                <div className='container mx-auto max-w-6xl relative'>
                    
                    <div className="lg:grid lg:grid-cols-2 gap-12 items-start">
                        
                        <div className="space-y-8 mb-12 lg:mb-0 lg:sticky lg:top-24">
                            <div>
                                <div className='flex items-center gap-2 mb-4'>
                                    <div className='w-4 h-4 bg-primary' />
                                    <h2 className='uppercase text-neutral-950/50 font-bold tracking-wider text-sm'>
                                        Ponte en contacto
                                    </h2>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-neutral-950 mb-4">
                                    Estamos aquí para escucharte
                                </h3>
                                <p className="text-neutral-600 leading-relaxed text-lg">
                                    Si quieres proponer una actividad solidaria, necesitas ayuda para un proyecto social, o simplemente te apetece ser miembro en la Asociación Juvenil Nyeri, no dudes en escribirnos. ¡Toda ayuda y buena idea es bienvenida!
                                </p>
                            </div>

                            <div className="space-y-6 pt-6 border-t border-neutral-200">
                                
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-neutral-200/60 flex items-center justify-center text-neutral-600">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-0.5">Email</p>
                                        <a href="mailto:nyeri.clan@gmail.com" className="text-lg font-medium text-neutral-950 hover:text-primary transition-colors">
                                            nyericlan@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-neutral-200/60 flex items-center justify-center text-neutral-600">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-0.5">Teléfono</p>
                                        <a href="tel:+34643360327" className="text-lg font-medium text-neutral-950 hover:text-primary transition-colors">
                                            +34 643 36 03 27
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-neutral-200/60 flex items-center justify-center text-neutral-600">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-0.5">Sede</p>
                                        <p className="text-lg font-medium text-neutral-950">
                                            C. Rafael Calatrava, 7 - Almería
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}