import { CommonHero } from "@/components/blocks/hero";
import { Banner } from "@/components/blocks/banner";
import { GallerySection } from "@/components/blocks/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tejiendo Historia",
    description: "Proyecto conmemorativo del XXV Aniversario de la ADE almeriense con el diseño de insignias exclusivas del San Jorge Asociativo.",
};

export default function TejiendoHistoria() {
    
    const projectImages = [
        "/assets/images/asset-24.webp",
        "/assets/images/asset-25.webp"
    ];

    return (
        <main>
            <CommonHero 
                title="Tejiendo Historia" 
                subtitle="En el marco del XXV Aniversario de la ADE almeriense, desde el Clan Ruta Nyeri presentamos el 'Proyecto TH25: Tejiendo Historia'. Una iniciativa que busca conmemorar un cuarto de siglo de compromiso, trabajo y pasión por el escultismo en nuestra ciudad, Almería." 
                image="/assets/images/asset-10.webp" 
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
                                En el marco del XXV Aniversario de la ADE almeriense, desde el Clan Ruta Nyeri presentamos el "Proyecto TH25: Tejiendo Historia". Una iniciativa que busca conmemorar un cuarto de siglo de compromiso, trabajo y pasión por el escultismo en nuestra ciudad, Almería. En la celebración de este evento tan significativo, es esencial que cada detalle refleje la rica historia, el compromiso y la pasión que han caracterizado a nuestra asociación a lo largo de estos años.
                            </p>
                            <p className='text-neutral-600 leading-relaxed pt-2'>
                                Para ello, se diseñó una ilustración en la que se representaba la escena de San Jorge contra el dragón, para posteriormente asentarla como el Logo del XV San Jorge Asociativo Almeriense, celebrado desde el 19 hasta el 21 de abril de 2024 en Castala, Almería.
                            </p>
                            <p className='text-neutral-600 leading-relaxed font-medium text-neutral-900'>
                                Finalmente, esta maravillosa ilustración se imprimió en insignias para que todos los participantes de la celebración tengan un precioso recuerdo conmemorativo.
                            </p>
                        </div>
                    </div>

                    <div className="-mt-4">
                        <GallerySection title="Fotogalería del Proyecto" images={projectImages} />
                    </div>

                </div>
            </section>

            <Banner 
                label="¡Buscamos nuevos horizontes! ¿Tienes una idea, actividad o quieres ser voluntario? Déjanos un mensaje." 
                href="/contacto" 
                text="¡Hablemos!" />
        </main>
    );
}