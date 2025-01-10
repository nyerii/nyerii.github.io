import { Helmet } from "react-helmet-async"

import { Footer } from "../../components/Footer"

import { HeroSection } from "./sections/HeroSection"
import { Photogallery } from "./sections/Photogallery"
import { BannerSection } from "./sections/BannerSection"
import { TabsSection } from "./sections/TabsSection"
import { Testimonials } from "./sections/Testimonials"
import { CarouselSection } from "./sections/CarouselSection"
import { Projects } from "./sections/Projects"
import { NewsSection } from "./sections/NewsSection"
import { Contact } from "./sections/Contact"

import data from "../../assets/content/overview.json"

import { Header } from "../../components/Header"

export const Home = () => {
    return (
        <>
            <Helmet>
                <title>Asociación Juvenil Nyeri</title>
            </Helmet>    

            <Header />    

            <main>
                <HeroSection />
                <BannerSection link={"/proyectos/dps25/"} text={"¡El día del pensamiento scout ya esta a la vuelta de la esquina! Conoce todos los detalles del evento."} textLink={"Saber más"} linkType={"internal"} />
                <CarouselSection data={data.news} logos={[]} />
                <TabsSection />
                <Projects data={data.projects} />
                <Testimonials data={data.testimonials} />
                <NewsSection data={data.blog} />
                <Contact />
                <Photogallery data={data.photogallery} />
            </main>

            <Footer />
        
        </>
    )
}
