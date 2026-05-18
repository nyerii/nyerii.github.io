import { Banner } from "@/components/blocks/banner";
import { HomeAbout } from "@/views/home/about";
import { HomeContact } from "@/views/home/contact";
import { HomeHero } from "@/views/home/hero";
import { HomeNews } from "@/views/home/news";
import { HomeGallery } from "@/views/home/photogallery";
import { HomeProjects } from "@/views/home/projects";
import { HomeTestimonials } from "@/views/home/testimonials";

export default function Home() {
    return (
        <main>
            <HomeHero />
            <Banner label="¡Buscamos nuevos horizontes! ¿Tienes una idea, actividad o quieres ser voluntario? Déjanos un mensaje." href="/contacto" text="¡Hablemos!" />
            <HomeAbout />
            <HomeProjects />
            <HomeTestimonials />
            <HomeNews />
            <HomeContact />
            <HomeGallery />
        </main>
    );
}