import React from 'react'

export const PhotogalleryImage = ({ index, item }) => {
    return (
        <div className={`${index === 1 || index === 2 ? 'md:col-span-2' : ''} mt-4 md:mt-0 relative group overflow-hidden rounded-2xl `}>
            <img src={item.image} alt={`Fotogalería ${index + 1}`} className='object-cover w-full h-full' />
            <div className='absolute w-full h-full left-0 top-0 right-0 bottom-0 mask-1 z-10 bg-black-950 opacity-0 transition-all duration-500 group-hover:opacity-100'></div>
            <div className='absolute w-full h-full left-0 top-0 right-0 bottom-0 z-20 opacity-0 transition-all translate-y-full group-hover:translate-y-0 duration-500 group-hover:opacity-100 flex flex-col justify-end p-4'>
                <h2 className='text-black-200 font-garamond text-4xl'>{item.text}</h2>
                <time dateTime={item.year} className='text-black-400 font-inter'>{item.year}</time>
            </div>
        </div>  
    )
}
