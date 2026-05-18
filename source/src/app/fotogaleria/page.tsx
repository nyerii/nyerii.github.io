"use client";

import React, { useState, useEffect, useRef } from "react";
import { CommonHero } from "@/components/blocks/hero";
import { GallerySection } from "@/components/blocks/gallery";
import albumsData from "@/assets/content/albums.json";

const ALBUMS_PER_PAGE = 3;

export default function Fotogaleria() {
    
    const [visibleCount, setVisibleCount] = useState(ALBUMS_PER_PAGE);
    
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                const target = entries[0];
                if (target.isIntersecting) {
                    setVisibleCount((prev) => Math.min(prev + ALBUMS_PER_PAGE, albumsData.length));
                }
            },
            {
                root: null,
                rootMargin: "400px",
                threshold: 0.1,
            }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };

    }, []);

    const visibleAlbums = albumsData.slice(0, visibleCount);

    return (
        <main className="bg-neutral-50 pb-20">
            
            <CommonHero title="Fotogalería" subtitle="Nuestra historia en fotografías." image="/assets/images/dps25/11.webp" />

            <div className="container mx-auto max-w-6xl px-4 pt-10">
                
                {visibleAlbums.map((album, index) => (
                    <GallerySection key={index} title={album.title} images={album.images} />
                ))}

                {visibleCount < albumsData.length && (
                    <div ref={loaderRef} className="w-full h-32 flex items-center justify-center mt-12">
                        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                
                {visibleCount >= albumsData.length && (
                    <div className="w-full text-center mt-16 text-neutral-400 font-sans">
                        <p>Has llegado al final de nuestra galería fotográfica</p>
                    </div>
                )}

            </div>
        </main>
    );
}