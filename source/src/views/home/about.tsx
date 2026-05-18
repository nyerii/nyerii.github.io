import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export const HomeAbout = () => {
    return (
        <section className='pb-20 pt-20 bg-neutral-50 text-neutral-950 px-4'>
            <div className='container mx-auto lg:grid max-w-6xl grid-cols-3 relative items-stretch'>

                <div className='relative lg:mb-0 mb-8'>
                    <div className='flex sticky top-20 items-center gap-2'>
                        <div className='w-4 h-4 bg-primary' />
                        <h2 className='uppercase text-neutral-950/50'>Sobre nosotros</h2>
                    </div>
                </div>

                <div className='space-y-8 lg:col-span-2'>
                    <div className='space-y-8'>
                        <p className='md:text-3xl text-2xl font-serif font-medium'>Nacimos de una <i>vocación inquebrantable de servicio</i>. Lo que comenzó a finales de 2023 como el histórico <b className='font-semibold'>Clan Nyeri</b>, impulsado por scouts con una larga trayectoria, ha evolucionado hoy hacia algo mucho mayor. Llevamos nuestro lema <i>'¡Servir!'</i> a su máxima expresión, rompiendo los límites de la rama ruta para dar vida a la actual <b className='font-semibold'>Asociación Juvenil Nyeri</b>.</p>
                        <p className='text-neutral-950/60'>Constituida en septiembre de 2024 para profesionalizar nuestras actividades, la Asociación mantiene intacta la energía de sus inicios. Trabajamos constantemente en la innovación y el desarrollo de proyectos impecables que mejoren nuestro entorno, fomentando la participación ciudadana a través del voluntariado. El ciclo del clan terminó, pero nuestra historia no ha hecho más que empezar. ¿Nos acompañas en esta nueva aventura?</p>
                    </div>
                    <div className="relative w-full h-125">
                        <Image className="object-cover" alt="" fill src="/assets/images/photogallery/70.webp" />
                    </div>
                    <Link href='/historia' className='flex'>
                        <Button className='rounded-none'>
                            <svg className='size-4' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Nuestra Historia</span>
                        </Button>
                    </Link>
                </div>
                
            </div>
        </section>
    )
}
