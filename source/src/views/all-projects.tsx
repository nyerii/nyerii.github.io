import projectsData from "@/assets/content/projects.json";
import Image from "next/image";
import Link from "next/link";

export const AllProjects = () => {

    const firstProject = projectsData[0];

    return (
        <section className="pb-20 pt-8 bg-neutral-50 text-neutral-950 px-4">
            <div className="container mx-auto max-w-6xl relative">

                <div className="w-full space-y-4 mb-8">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-primary" />
                        <h2 className="uppercase text-neutral-950/50">Proyectos</h2>
                    </div>
                </div>

                <div className="mb-4">
                    <article className="grid md:grid-cols-2 gap-4 items-center">
                        <div className="w-full h-full relative overflow-hidden bg-neutral-100 min-h-100">
                            <Image fill className="object-cover" src={firstProject.image || "/assets/images/dps25/62.webp"} alt={firstProject.title} />
                            <span className="absolute top-3 left-3 bg-neutral-900/50 backdrop-blur-xs text-white text-xs uppercase font-sans font-bold py-1 px-2.5 rounded-md">{firstProject.type}</span>
                        </div>
                        <div className="flex flex-col md:py-12">
                            <div className="space-y-4">
                                <h3 className="md:text-3xl font-semibold text-xl md:font-serif text-neutral-950">{firstProject.title}</h3>
                                <p className="text-neutral-600 text-sm font-sans leading-relaxed">"{firstProject.subtitle}"</p>
                            </div>
                            <div className="pt-2">
                                {firstProject.link && (
                                    <Link href={firstProject.link} className="relative group inline-flex items-center gap-2 text-primary font-sans text-sm">
                                        <span>Saber más</span>
                                        <div className="relative w-4 h-4">
                                            <svg className="w-4 h-4 text-transparent absolute" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <svg className="w-4 h-4 absolute left-0 top-0 group-hover:translate-x-1 transition-all duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </article>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projectsData.slice(1).map((project, index) => {
                        const projectImage = project.image || "/assets/images/dps25/62.webp";
                        
                        return (
                            <article key={index} className="w-full flex flex-col gap-4">
                                <div className="w-full h-100 relative overflow-hidden bg-neutral-100">
                                    <Image fill className="object-cover" src={projectImage} alt={project.title} />
                                    <span className="absolute top-3 left-3 bg-neutral-900/50 backdrop-blur-xs text-white text-xs uppercase font-sans font-bold py-1 px-2.5 rounded-md">{project.type}</span>
                                </div>
                                <div className="flex flex-col grow justify-between">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold font-sans text-neutral-950 line-clamp-2">{project.title}</h3>
                                        <p className="text-neutral-600 text-sm font-sans line-clamp-4 leading-relaxed">{project.subtitle}</p>
                                    </div>
                                    <div className="pt-2">
                                        {project.link && (
                                            <Link href={project.link} className="relative group inline-flex items-center gap-2 text-primary font-sans text-sm">
                                                <span>Saber más</span>
                                                <div className="relative w-4 h-4">
                                                    <svg className="w-4 h-4 text-transparent absolute" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <svg className="w-4 h-4 absolute left-0 top-0 group-hover:translate-x-1 transition-all duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};