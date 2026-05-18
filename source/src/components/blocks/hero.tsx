import Image from 'next/image';

interface HeroProps {
    title: string;
    subtitle: string;
    image: string;
}

export const CommonHero = ({ title, subtitle, image }: HeroProps) => {
    return (
        <section className="pt-[20vh] bg-neutral-950 pb-8 relative overflow-hidden px-4">
            
            <div className="opacity-50 z-0 absolute left-0 top-0 right-0 bottom-0 w-full h-full">
                <Image fill priority className="object-cover object-center" src={image} alt={title} />
            </div>

            <div className="relative z-10 flex flex-col justify-center mx-auto md:w-1/2 space-y-2">
                <h1 className="font-serif text-5xl text-center text-neutral-50 font-bold">{title}</h1>
                <h2 className="text-xl text-center font-sans text-neutral-300">{subtitle}</h2>
            </div>

        </section>
    );
};