import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Día del Pensamiento Scout 2025",
    description: "Segunda edición del gran evento scout en Almería. Compra de entradas, voluntariado y programa del DPS 2025 a beneficio de Nuevo Futuro.",
};

export default function DPS25Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}