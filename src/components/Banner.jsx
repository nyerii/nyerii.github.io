import React from 'react'

export const Banner = ({ title, subtitle, image }) => {
    return (
        <section className={`pt-[20vh] ${image ? "bg-black-950" : "bg-tall-poppy-800"} pb-8 relative overflow-hidden px-4`}>
            {image && (
                <div className='opacity-50 z-0 absolute left-0 top-0 right-0 bottom-0 w-full h-full' style={{ background: `url(${image}) no-repeat center center/cover ` }} ></div>
            )}
            <div className='flex flex-col justify-center z-10 mx-auto md:w-1/2'>
                <h1 className='z-10 font-garamond text-5xl text-center text-black-50 font-bold'>{title}</h1>
                <h2 className='z-10 text-xl text-center font-inter text-black-300'>{subtitle}</h2>
            </div>
        </section>  
    )
}
