import React from 'react'
import { Link } from 'react-router-dom'

import { PhotogalleryImage } from '../components/PhotogalleryImage'

export const Photogallery = ({ data }) => {
    return (
        <section className='bg-black-950 pb-8'>

            <div className='px-4 mx-auto flex items-center justify-between mt-8 bg-black-950'>
                <h1 className='text-3xl md:text-center font-inter text-black-50 font-bold'>Fotogalería</h1>    
                <Link to={"/fotogaleria"} className='flex items-center gap-2 text-black-50 group relative opacity-80 hover:opacity-100 transition-all duration-200'>
                    <span>Ver completa</span>
                    <div className='relative'>
                        <svg className='w-4 h-4 text-transparent' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <svg className='w-4 h-4 absolute left-0 top-0 group-hover:translate-x-[5px] transition-all duration-200' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
            </div>
            <div className='px-4 mx-auto md:grid grid-cols-3 gap-4 mt-8'>
                {data.map((item, index) => (
                    <PhotogalleryImage key={index} index={index} item={item}/>
                ))}
            </div>
            
        </section>
    )
}
