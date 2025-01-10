import React from 'react'
import { Chip } from "@material-tailwind/react";

export const BlogCard = ({ item }) => {
    return (
        <article className='gap-4 flex flex-col'>
            <div className='w-full'>
                <img className='rounded-xl w-full h-full object-cover' src={item.image} alt={item.title}  />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex'><Chip value={item.sitename} /></div>
                <h1 className='font-semibold text-2xl text-black-950'>{item.title}</h1>
                {item.description && (
                    <p>{item.description}</p>
                )}
                <div className='flex'>
                    <a href={item.link} target='_blank' className='transition-all duration-200 flex items-center gap-1 group text-black-950 font-inter'>
                        <span>Leer más</span>
                        <div className="relative">
                            <svg className='w-4 h-4 text-transparent' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            <svg className='w-4 h-4 absolute left-0 top-0 group-hover:translate-x-[5px] transition-all duration-200' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                    </a>
                </div>
            </div>
        </article>
    )
}
