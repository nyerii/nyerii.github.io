import { Banner } from "@/components/blocks/banner";
import { CommonHero } from "@/components/blocks/hero";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conócenos",
    description: "Descubre la historia de la Asociación Juvenil Nyeri. De un Clan Ruta a una asociación comprometida con la juventud y el voluntariado en Almería.",
};

export default function Conocenos() {
    return (
        <main>
            <CommonHero title="Conocenos" subtitle="Conoce a la familia Nyeri." image="/assets/images/asset-02.webp" />
            <Banner label="¡Buscamos nuevos horizontes! ¿Tienes una idea, actividad o quieres ser voluntario? Déjanos un mensaje." href="/contacto" text="¡Hablemos!" />
            

            <section className='pb-20 pt-20 bg-neutral-50 text-neutral-950 px-4'>
                <div className='container space-y-8 mx-auto max-w-6xl relative'>

                    <div className="lg:grid grid-cols-3 items-stretch">
                        <div className='relative lg:mb-0 mb-8'>
                            <div className='flex sticky top-20 items-center gap-2'>
                                <div className='w-4 h-4 bg-primary' />
                                <h2 className='uppercase text-neutral-950/50'>´Nuestra historia</h2>
                            </div>
                        </div>
                        <div className="lg:col-span-2 space-y-4">
                            <p className='md:text-3xl text-2xl font-serif font-medium'>No somos solo una asociación; somos el resultado de una promesa que creció hasta desbordar sus propios límites. Pasamos de ser un pequeño grupo de rutas con ganas de cambiar su entorno, a convertirnos en una comunidad abierta, imparable y dispuesta a dejar una huella imborrable en la sociedad almeriense. Nuestra etapa scout terminó, pero nuestra verdadera ruta no ha hecho más que empezar.</p>
                            
                            <h3 className='uppercase font-semibold mt-8'>Los cimientos: El Clan que rompió los límites</h3>
                            <p className='text-neutral-950/60'>Nuestra historia comenzó a fraguarse en septiembre de 2023 como el <b>Clan Nyeri</b>, un clan ruta perteneciente a la agrupación Cabo de Venus, que quedó oficialmente constituido el 4 de noviembre de ese mismo año en Las Rozas, Abrucena. Formado por jóvenes con una larga y apasionada trayectoria en el movimiento scout, el clan nació con un objetivo claro: llevar el lema <b>"¡Servir!"</b> a su máxima expresión.</p>
                            <p className='text-neutral-950/60'>Con esa vocación por bandera, nos volcamos en acciones de impacto real. Participamos en voluntariados como el Encuentro Almeriense Vecinal y las jornadas de invierno de FESBAL. Pero nuestro primer gran hito histórico llegó el 24 de febrero de 2024 con la organización del <b>Día del Pensamiento Scout</b>. Aquel evento benéfico logró reunir a más de 400 personas en el Colegio La Salle Virgen del Mar, destinando todos los beneficios a la Asociación Nuevo Futuro. Todo este esfuerzo y dedicación no solo trascendió los límites de nuestra rama, sino que nos hizo ganar un lugar destacado en el Libro de Oro Andaluz.</p>

                            <h3 className='uppercase font-semibold mt-8'>El nacimiento de la Asociación y la consolidación solidaria</h3>
                            <p className='text-neutral-950/60'>Conscientes de que nuestra capacidad para ayudar podía ir mucho más allá, dimos un paso trascendental: la fundación de la <b>Asociación Juvenil Nyeri</b>, una estructura legal y profesional enfocada 100% en mejorar la vida de la infancia y la juventud en Almería.</p>
                            <p className='text-neutral-950/60'>El primer gran proyecto bajo este nuevo sello fue <b>"Sonrisas Navideñas"</b>. En alianza con ASISA, lanzamos una ambiciosa campaña de recogida de juguetes para asegurar que ningún niño en situación de vulnerabilidad se quedara sin la magia de la Navidad. Todos los juguetes fueron destinados a la <b>Asociación Ítaca</b>, una entidad con la que compartimos los profundos valores del escultismo y el compromiso de romper las barreras de la exclusión social.</p>
                            <p className='text-neutral-950/60'>Lejos de frenar el ritmo, el año 2025 nos coronó con un evento espectacular: la <b>segunda edición del Día del Pensamiento Scout (DPS 2025)</b>, donde volvimos a superarnos para seguir apoyando la inmensa labor de la Asociación Nuevo Futuro.</p>

                            <h3 className='uppercase font-semibold mt-8'>El fin de una era</h3>
                            <p className='text-neutral-950/60'>Como toda gran ruta, nuestra etapa como educandos llegó a su fin. En septiembre de 2025, el Clan Nyeri cerró oficialmente sus puertas. Habíamos terminado nuestra etapa scout como rutas para dar el salto natural en el movimiento: convertirnos en <b>Scouters (responsables)</b>.</p>
                            <p className='text-neutral-950/60'>Este hito vital supuso un pequeño parón estratégico para la Asociación. Necesitábamos tiempo para asumir nuestras nuevas responsabilidades, reflexionar y coger aire. Pero la Asociación Juvenil Nyeri estaba muy lejos de desaparecer; simplemente estaba tomando impulso.</p>

                            <h3 className='uppercase font-semibold mt-8'>El renacer: Abiertos a toda la comunidad</h3>
                            <p className='text-neutral-950/60'>El fuego nunca se apagó. En la Asamblea Ordinaria de mayo de 2026, la chispa volvió a prender con más fuerza que nunca. Con las energías renovadas y una madurez forjada en años de servicio, hemos vuelto a la carga con una visión mucho más ambiciosa.</p>
                            <p className='text-neutral-950/60'>Hoy, la Asociación Juvenil Nyeri <b>abre sus puertas a toda la comunidad</b>. Ya no somos solo un clan scout; somos una familia en plena expansión preparando nuevos campamentos, salidas, voluntariados y proyectos a gran escala. Hemos vuelto con muchísimas ganas de hacer crecer esta asociación y de invitar a cualquier persona que comparta nuestra pasión por ayudar a sumarse a esta gran aventura.</p>

                            <p className="mt-8">La historia continúa... <b>¿Te unes a escribir el próximo capítulo con nosotros?</b></p>

                        </div>
                        <div className="relative lg:col-span-2 lg:col-start-2 mt-8 w-full h-125">
                            <Image className="object-cover" alt="" fill src="/assets/images/photogallery/82.webp" />
                        </div>
                    </div>
                    
                </div>
            </section>

        </main>
    );
}