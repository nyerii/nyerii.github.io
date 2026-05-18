"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Sobre nosotros", href: "/conocenos" },
    { name: "Actualidad", href: "/actualidad" },
    { name: "Fotogalería", href: "/fotogaleria" },
    { name: "Contacto", href: "/contacto" },
];

export const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.1) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkClass = "font-sans text-neutral-100 after:content-[''] relative after:absolute after:w-0 hover:after:w-full after:h-px after:bg-neutral-100 after:transition-all after:duration-200 after:left-1/2 after:-translate-x-1/2 after:bottom-0";

    return (
        <header className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 transition-all duration-300 ${isScrolled ? "bg-neutral-950/80 backdrop-blur-2xl shadow-lg" : "bg-transparent"}`}>
      
            <Link href="/" className="relative z-10">
                <Image src="/assets/logo.svg" width={120} height={32} className="h-8 w-auto" alt="Logo Asoc. Juvenil Nyeri" />
            </Link>

            <nav className="md:flex hidden items-center gap-6">
                {navLinks.map((link) => (
                    <Link key={link.name} className={linkClass} href={link.href}>
                        {link.name}
                    </Link>
                ))}
                <Link className="font-sans text-neutral-50 bg-tall-poppy-700 hover:bg-tall-poppy-600 transition-colors px-4 py-2 flex items-center" href="/proyectos">
                    <span className="leading-none font-medium">Proyectos</span>
                </Link>
            </nav>

            <div className="flex items-center gap-4">
                
                <div className="flex items-center gap-3">
                    <a href="https://www.linkedin.com/company/asociación-nyeri/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <svg className="size-4 fill-neutral-100" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/clan.nyeri/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <svg className="size-4 fill-neutral-100" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                    </a>
                </div>

                <div className="md:hidden flex">
                    <Sheet>

                        <SheetTrigger asChild>
                            <button className="text-neutral-950 flex items-center gap-2 px-4 rounded-xl bg-neutral-100 py-2 hover:bg-neutral-200 transition-colors cursor-pointer">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 8.5H21M3 15.5H21" />
                                </svg>
                                <span className="leading-none font-medium font-sans">Menu</span>
                            </button>
                        </SheetTrigger>
                
                        <SheetContent side="right" className="bg-neutral-950 border-l-neutral-800 p-4 flex flex-col">
                            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                            <nav className="flex flex-col gap-4 flex-1 items-center justify-center">
                                {navLinks.map((link) => (
                                    <Link key={link.name} href={link.href} className="text-2xl font-serif text-neutral-100 hover:text-tall-poppy-500 transition-colors">
                                        <span>{link.name}</span>
                                    </Link>
                                ))}
                                <Link href="/proyectos" className="text-2xl font-serif text-neutral-100 hover:text-tall-poppy-500 transition-colors">
                                    <span>Proyectos</span>
                                </Link>
                            </nav>
                        </SheetContent>

                    </Sheet>
                </div>

            </div>
        </header>
    );
};