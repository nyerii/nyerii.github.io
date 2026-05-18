"use client";

import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface GallerySectionProps {
    title: string;
    images: string[];
}

export const GallerySection = ({ title, images }: GallerySectionProps) => {
    
    if (!images || images.length === 0) return null;

    return (
        <section className="mt-12">
            
            <div className="flex items-center gap-4">
                <h2 className="font-bold text-2xl font-serif text-neutral-950">{title}</h2>
                <div className="border-t flex-1 border-neutral-300"></div>
            </div>

            <div className="mt-6">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="h-[300px] w-full relative overflow-hidden bg-neutral-100 shadow-sm group">
                            <Zoom>
                                <div className="w-full h-[300px] relative">
                                    <Image fill className="object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300" src={src} alt={`${title} - Foto ${index + 1}`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"/>
                                </div>
                            </Zoom>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};