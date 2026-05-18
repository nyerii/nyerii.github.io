import Image from "next/image";
import testimonials from "@/assets/content/testimonials.json";

export const HomeTestimonials = () => {
  
    const featuredTestimonial = testimonials[0];
    const secondTestimonial = testimonials[1];
    const thirdTestimonial = testimonials[2];

    return (
        <section className="pb-20 bg-neutral-50 text-neutral-950 px-4">
            <div className="container mx-auto max-w-6xl relative">

                <div className="w-full space-y-4 mb-8">
                    <div className="flex md:justify-center items-center gap-2">
                        <div className="w-4 h-4 bg-primary" />
                        <h2 className="uppercase text-neutral-950/50">Testimonios</h2>
                    </div>
                    <div className="space-y-1">
                        <h2 className="md:text-center font-bold text-3xl">El respaldo de nuestra comunidad</h2>
                        <p className="md:text-center text-neutral-950/75">"Dos años de historias que inspiran y avalan nuestro compromiso."</p>
                    </div>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-5 items-stretch gap-4">
          
                    {featuredTestimonial && (
                        <div className="md:p-8 p-4 space-y-4 bg-neutral-200/50 lg:col-span-3 flex flex-col justify-center">
                            <h3 className="font-bold text-2xl md:text-3xl">"{featuredTestimonial.testimonial}"</h3>
                            <div className="space-y-3 pt-2">
                                <div>
                                    <p className="font-semibold">{featuredTestimonial.person.name}</p>
                                    <p className="text-neutral-950/50 text-sm">{featuredTestimonial.person.job}</p>
                                </div>
                                <div className="h-12.5 relative aspect-3/1">
                                    <Image fill className="object-contain object-left" src={featuredTestimonial.image} alt={featuredTestimonial.organisation} />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="space-y-4 lg:col-span-2 flex flex-col justify-between">
            
                        {secondTestimonial && (
                            <div className="md:p-8 p-4 space-y-4 bg-neutral-200/50 flex-1 flex flex-col justify-between">
                                <h3 className="font-bold text-xl">"{secondTestimonial.testimonial}"</h3>
                                <div className="space-y-3 pt-2">
                                    <div>
                                        <p className="font-semibold">{secondTestimonial.person.name}</p>
                                        <p className="text-neutral-950/50 text-sm">{secondTestimonial.person.job}</p>
                                    </div>
                                    <div className="h-12.5 relative aspect-3/1">
                                        <Image fill className="object-contain object-left" src={secondTestimonial.image} alt={secondTestimonial.organisation}/>
                                    </div>
                                </div>
                            </div>
                        )}

                        {thirdTestimonial && (
                            <div className="md:p-8 p-4 space-y-4 bg-neutral-200/50 flex-1 flex flex-col justify-between">
                                <h3 className="font-bold text-xl">"{thirdTestimonial.testimonial}"</h3>
                                <div className="space-y-3 pt-2">
                                    <div>
                                        <p className="font-semibold">{thirdTestimonial.person.name}</p>
                                        <p className="text-neutral-950/50 text-sm">{thirdTestimonial.person.job}</p>
                                    </div>
                                    <div className="h-12.5 relative aspect-3/1">
                                        <Image fill className="object-contain object-left" src={thirdTestimonial.image} alt={thirdTestimonial.organisation} />
                                    </div>
                                </div>
                            </div>
                        )}
            
                    </div>
                </div>

            </div>
        </section>
    );
};