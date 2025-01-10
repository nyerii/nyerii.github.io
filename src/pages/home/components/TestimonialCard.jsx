import React from 'react'

export const TestimonialCard = ({ testimonial, index }) => {
    return (
        <div className={`p-8 rounded-2xl flex flex-col justify-between bg-gray-300 ${index === 2 ? 'md:col-span-2' : ''}`}>
            <div>
                <h2 className={`text-2xl font-roboto font-semibold ${index === 2 ? 'md:text-center' : ''}`}>"{testimonial.text}"</h2>
            </div>
            <div className={`grid-cols-2 flex flex-col gap-4 ${index === 2 ? 'flex mt-4' : 'md:grid md:mt-8 mt-4'}`}>
                <div>
                    <h3 className={`font-bold font-inter text-balance leading-none ${index === 2 ? 'md:text-center' : ''}`}>{testimonial.author}</h3>
                    <p className={`mt-2 font-inter text-balance leading-none ${index === 2 ? 'md:text-center' : ''}`}>{testimonial.position}</p>
                </div>
                <div className={`h-[50px] flex md:justify-end ${index === 2 ? 'md:justify-center' : 'md:justify-end '}`}>
                    <img src={testimonial.logo} alt={testimonial.position} className='h-full object-cover' />
                </div>
            </div>
        </div>
    )
}
