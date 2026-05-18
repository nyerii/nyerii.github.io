import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
    [
        { name: "Inicio", href: "/" },
        { name: "Sobre Nosotros", href: "/conocenos" },
        { name: "Fotogalería", href: "/fotogaleria" },
        { name: "Contacto", href: "/contacto" },
    ],
    [
        { name: "Actualidad", href: "/actualidad" },
        { name: "Proyectos", href: "/proyectos" }
    ],
    [
        { name: "Política de Privacidad", href: "/politica-de-privacidad" },
        { name: "Aviso Legal", href: "/aviso-legal" },
    ],
];

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/asociación-nyeri/",
        svgPath: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/clan.nyeri/",
        svgPath: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
    }
];

const linkHoverEffect = "text-neutral-50 after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-px after:bg-neutral-100 after:transition-all after:duration-200 after:left-1/2 after:-translate-x-1/2 after:bottom-0 relative text-left no-underline text-nowrap font-sans";

export const Footer = () => {
  
    const currentYear = new Date().getFullYear();

    return (
        <footer className="p-20 bg-neutral-950 relative overflow-hidden">

            <div className="opacity-30 z-0 absolute -left-1/2 -top-1/2 md:w-[150vw] w-auto md:h-auto h-[130vh] aspect-square">
                <Image fill className="object-contain" src="/assets/logo.svg" alt="Logo de la Asociación Juvenil Nyeri" />
            </div>

            <div className="container gap-8 flex justify-center relative flex-col mx-auto max-w-6xl">

                <hr className="pt-10 md:block hidden opacity-50" />

                <div className="z-10 flex items-center gap-4">
                    {socialLinks.map((social) => (
                        <a key={social.name}href={social.href} target="_blank" rel="noopener noreferrer"aria-label={social.name}className="transition-transform duration-200">
                            <svg className="size-4 fill-neutral-100" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                <path d={social.svgPath}></path>
                            </svg>
                        </a>
                    ))}
                </div>

                <div className="flex gap-4 justify-start flex-wrap md:gap-12 z-10 md:flex-row flex-col">
                    {navigationLinks.map((group, groupIndex) => (
                        <nav key={groupIndex} className="flex flex-col gap-1 justify-end">
                            <ul className="space-y-1">
                                {group.map((link) => (
                                    <li key={link.name}>
                                        <Link className={linkHoverEffect} href={link.href}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>

                <div className="z-10 space-y-2">
                    <p className="font-sans text-neutral-50 leading-none"><a className={linkHoverEffect} href="tel:+34643360327">+34 643 36 03 27</a></p>
                    <p className="font-sans text-neutral-50 leading-none"><a className={linkHoverEffect} href="mailto:contacto@nyeri.es">contacto@nyeri.es</a></p>
                </div>

                <div className="z-10 border-t border-neutral-800/60 pt-4">
                    <p className="font-sans leading-none text-neutral-400 text-sm">Copyright © {currentYear}{" "}<Link className={linkHoverEffect} href="/">Asociación Juvenil Nyeri</Link>{" "}- All rights reserved</p>
                </div>

    

            </div>
        </footer>
    );
};