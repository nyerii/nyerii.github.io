import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";

import "./global.css";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
    variable: "--font-eb-garamond",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Asociación Juvenil Nyeri",
        template: "%s | Asociación Juvenil Nyeri",
    },
    description: "Asociación juvenil de Almería nacida del escultismo. Nos mueve la vocación de servicio, el voluntariado y la creación de proyectos con impacto social.",
    keywords: ["scouts almería", "asociación juvenil", "clan nyeri", "voluntariado almería", "escultismo", "día del pensamiento scout", "nyeri", "clan nyeri"],
    authors: [{ name: "Carlos Padilla" }],
    creator: "Asociación Juvenil Nyeri",
    openGraph: {
        type: "website",
        locale: "es_ES",
        url: "https://www.nyeri.es",
        title: "Asociación Juvenil Nyeri",
        description: "Asociación juvenil de Almería dedicada a transformar nuestro entorno a través del voluntariado y el servicio.",
        siteName: "Asociación Juvenil Nyeri",
        images: [
            {
                url: "/assets/images/asset-03.webp",
                width: 1200,
                height: 630,
                alt: "Familia de la Asociación Juvenil Nyeri",
            }
        ]
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="es"
            className={`${inter.variable} ${ebGaramond.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}