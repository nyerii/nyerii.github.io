import Image from "next/image";

export interface NewsItem {
    title: string;
    entity: string;
    alt: string;
    subtitle: string;
    link: string;
    banner: string;
}

interface NewCardProps {
    data: NewsItem;
}

export const NewCard = ({ data }: NewCardProps) => {
    return (
        <article className="gap-4 flex flex-col">
              
            <div className="w-full aspect-4/3 relative overflow-hidden rounded-xl">
                <Image fill className="w-full h-full object-cover" src={data.banner} alt={data.alt} />
            </div>

            <div className="flex flex-col gap-2 grow">
                
                <div className="flex">
                    <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-neutral-900 text-white py-1.5 px-3 text-xs rounded-lg" style={{ opacity: 1 }}>
                        <span>{data.entity}</span>
                    </div>
                </div>

                <h3 className="font-semibold text-2xl text-neutral-950">{data.title}</h3>
                <p className="text-neutral-700">"{data.subtitle}"</p>

                <div className="flex mt-auto pt-2">
                    <a href={data.link} target="_blank" rel="noopener noreferrer" className="transition-all duration-200 flex items-center gap-1 group text-tall-poppy-700 hover:text-tall-poppy-500 font-sans">
                        <span>Leer más</span>
                        <div className="relative">
                            <svg className="w-4 h-4 text-transparent" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <svg className="w-4 h-4 absolute left-0 top-0 group-hover:translate-x-1.25 transition-all duration-200" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </a>
                </div>

            </div>
        </article>
    )
}
