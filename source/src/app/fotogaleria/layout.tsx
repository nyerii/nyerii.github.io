import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fotogalería",
    description: "Revive nuestra historia en fotografías. Los mejores momentos de nuestros campamentos, proyectos solidarios y eventos scouts.",
};

export default function FotogaleriaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}