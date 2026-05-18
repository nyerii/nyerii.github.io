"use client";

import React, { useState } from "react";

export const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const emailTo = "nyericlan@gmail.com";
        const subject = encodeURIComponent(`Propuesta/Contacto de ${name} - Asociación Nyeri`);
        const body = encodeURIComponent(
            `Nombre: ${name}\n` +
            `Correo de contacto alternativo: ${email}\n\n` +
            `Mensaje/Propuesta:\n${message}`
        );
        window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    };

    return (
        <div className="space-y-8">

            <h3 className="font-bold text-3xl">Súmate a la aventura</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                
                <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre*" type="text" className="w-full min-w-0 border-b border-b-neutral-300 text-lg font-light pb-2 outline-0 focus:border-b-neutral-500" />
                <input required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo Electrónico*" type="email" className="w-full min-w-0 border-b border-b-neutral-300 text-lg font-light pb-2 outline-0 focus:border-b-neutral-500" />
                <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Cuéntanos tu idea o propuesta..." type="text" className="w-full min-w-0 border-b border-b-neutral-300 text-lg font-light pb-2 outline-0 focus:border-b-neutral-500" />
                
                <button type="submit" className="w-full flex items-center gap-2 bg-primary hover:bg-primary/80 py-2 px-4 text-neutral-50 mt-4">
                    <svg className="size-4" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4V5.4C4 8.76031 4 10.4405 4.65396 11.7239C5.2292 12.8529 6.14708 13.7708 7.27606 14.346C8.55953 15 10.2397 15 13.6 15H20M20 15L15 10M20 15L15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium">Escríbenos</span>
                </button>

            </form>

        </div>
    )
}
