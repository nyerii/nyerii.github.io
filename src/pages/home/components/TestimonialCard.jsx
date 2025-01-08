import React from 'react'

export const TestimonialCard = ({ testimonial, index }) => {
    return (
        <div className={`p-8 rounded-2xl bg-gray-300 ${index === 2 ? 'md:col-span-2' : ''}`}>
            <div>
                <h2 className={`text-2xl font-roboto font-semibold ${index === 2 ? 'text-center' : ''}`}>"{testimonial.text}"</h2>
            </div>
            <div className='mt-8'>
                <div>
                    <h3 className={`font-bold font-inter text-balance leading-none ${index === 2 ? 'text-center' : ''}`}>{testimonial.author}</h3>
                    <p className={`mt-2 font-inter text-balance leading-none ${index === 2 ? 'text-center' : ''}`}>{testimonial.position}</p>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}
