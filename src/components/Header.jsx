import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";
import { Drawer, } from "@material-tailwind/react";

import Logo from "../assets/images/logo.svg"

export const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight * 0.1);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [open, setOpen] = React.useState(false);
 
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 ${isScrolled ? "bg-black-950 bg-opacity-90 backdrop-blur-[2px] shadow-2xl" : ""} transition-all duration-300`}>
                <Link to={"/"}>
                    <img src={Logo} className="h-8" alt="Logo Asoc. Juvenil Nyeri" />
                </Link>
                <nav className="md:flex hidden items-center gap-4">                    
                    <Link to={"/"} className="font-inter text-black-100 after:content-[''] relative after:absolute after:w-0 hover:after:w-full after:h-px after:bg-black-100 after:transition-all after:duration-100 after:left-1/2 after:-translate-x-1/2 after:bottom-0"><span>Inicio</span></Link>
                    <Link to={"/conocenos"} className="font-inter text-black-100 after:content-[''] relative after:absolute after:w-0 hover:after:w-full after:h-px after:bg-black-100 after:transition-all after:duration-100 after:left-1/2 after:-translate-x-1/2 after:bottom-0"><span>Sobre nosotros</span></Link>
                    <Link to={"/actualidad"} className="font-inter text-black-100 after:content-[''] relative after:absolute after:w-0 hover:after:w-full after:h-px after:bg-black-100 after:transition-all after:duration-100 after:left-1/2 after:-translate-x-1/2 after:bottom-0"><span>Actualidad</span></Link>
                    <Link to={"/fotogaleria"} className="font-inter text-black-100 after:content-[''] relative after:absolute after:w-0 hover:after:w-full after:h-px after:bg-black-100 after:transition-all after:duration-100 after:left-1/2 after:-translate-x-1/2 after:bottom-0"><span>Fotogalería</span></Link>
                    <Link to={"/proyectos"} className="font-inter text-black-100 bg-tall-poppy-700 px-4 py-2 rounded-xl flex items-center gap-0"><span className="leading-none">Proyectos</span></Link>
                </nav>
                <div className="flex items-center gap-4">
                    <a href="https://www.instagram.com/clan.nyeri/" target="_blank">
                        <svg className="w-4 h-4 fill-black-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                    <button onClick={openDrawer} className="text-black-950 flex items-center gap-2 px-4 rounded-xl bg-black-100 py-2">
                        <svg className="w-4 h-4" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5H21M3 15.5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span className="leading-none">Menu</span>
                    </button>
                </div>
            </header>


            <Drawer open={open} onClose={closeDrawer} className="fixed bg-black-950" overlayProps={{
                className: "fixed", onClick: closeDrawer,
            }}>
                <div className="flex justify-between flex-col h-full">
                    <div className="flex justify-between w-full p-4 items-center">
                        <Link to={"/"} className="">
                            <img src={Logo} className="w-20" alt="Logo Asoc. Juvenil Nyeri" />
                        </Link>
                        <button className="flex items-center gap-1 p-2 text-black-950 bg-black-100 rounded-xl" onClick={closeDrawer}>
                            <svg className="w-6 h-5" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                    </div>
                    <div className="px-4">
                        <nav className="gap-4 flex flex-col">                    
                            <ul>
                                <li className="flex"><Link to={"/"} className="font-inter text-xl text-black-100 after:content-[''] relative after:absolute after:w-0 hover:after:w-full after:h-px after:bg-black-100 after:transition-all after:duration-100 after:left-1/2 after:-translate-x-1/2 after:bottom-0"><span>Inicio</span></Link></li>
                                <li className="flex"><Link to={"/conocenos"} className="font-inter text-xl text-black-100 after:content-[''] relative after:absolute after:w-0 hover:after:w-full after:h-px after:bg-black-100 after:transition-all after:duration-100 after:left-1/2 after:-translate-x-1/2 after:bottom-0"><span>Sobre nosotros</span></Link></li>
                                <li className="flex"><Link to={"/actualidad"} className="font-inter text-xl text-black-100 after:content-[''] relative after:absolute after:w-0 hover:after:w-full after:h-px after:bg-black-100 after:transition-all after:duration-100 after:left-1/2 after:-translate-x-1/2 after:bottom-0"><span>Actualidad</span></Link></li>
                                <li className="flex"><Link to={"/proyectos"} className="font-inter text-xl text-black-100 after:content-[''] relative after:absolute after:w-0 hover:after:w-full after:h-px after:bg-black-100 after:transition-all after:duration-100 after:left-1/2 after:-translate-x-1/2 after:bottom-0"><span>Proyectos</span></Link>  </li>
                                <li className="flex"><Link to={"/fotogaleria"} className="font-inter text-xl text-black-100 after:content-[''] relative after:absolute after:w-0 hover:after:w-full after:h-px after:bg-black-100 after:transition-all after:duration-100 after:left-1/2 after:-translate-x-1/2 after:bottom-0"><span>Fotogalería</span></Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="border-t border-y-black-600 py-4 px-4">
                        <p className='font-inter text-black-50'>Copyright © {new Date().getFullYear()} <Link className='after:content-[""] relative after:absolute after:w-0 hover:after:w-full after:h-px after:bg-black-100 after:transition-all after:duration-200 after:left-1/2 after:-translate-x-1/2 after:bottom-0' to="/">Asociación Juvenil Nyeri</Link> - All rights reserved</p>
                    </div>
                </div>
            </Drawer>
        </>
    )
}
