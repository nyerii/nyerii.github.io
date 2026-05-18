import { Banner } from "@/components/blocks/banner";
import { CommonHero } from "@/components/blocks/hero";
import { AllNews } from "@/views/all-news";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Actualidad",
    description: "Todas nuestras apariciones en medios de comunicación, periódicos y televisión. Mantente al día con las noticias de la Asociación Nyeri.",
};

export default function Actualidad() {
    return (
        <main>
            <CommonHero title="Actualidad" subtitle="¡Todas nuestras apariciones en medios de comunicación!" image="/assets/images/asset-09.webp" />
            <Banner label="¡Buscamos nuevos horizontes! ¿Tienes una idea, actividad o quieres ser voluntario? Déjanos un mensaje." href="/contacto" text="¡Hablemos!" />
            <AllNews />

        </main>
    );
}