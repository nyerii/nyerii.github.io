import { Banner } from "@/components/blocks/banner";
import { CommonHero } from "@/components/blocks/hero";
import { AllProjects } from "@/views/all-projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Proyectos",
    description: "Iniciativas que transforman nuestro entorno. Conoce nuestros eventos, campañas solidarias y acciones de servicio directo en Almería.",
};

export default function Projects() {
    return (
        <main>
            <CommonHero title="Proyectos" subtitle="Proyectos, eventos, acciones de servicio y.. ¡mucho más!" image="/assets/images/dps25/33.webp" />
            <Banner label="¡Buscamos nuevos horizontes! ¿Tienes una idea, actividad o quieres ser voluntario? Déjanos un mensaje." href="/contacto" text="¡Hablemos!" />
            <AllProjects />
        </main>
    );
}