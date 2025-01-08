import React from 'react'
import { Link } from 'react-router-dom'

export const CarouselCard = ({ item }) => {
    return (
        <section className='min-h-[75vh] flex items-center justify-center p-8 relative'>
            <div className='absolute w-full h-full left-0 top-0 bottom-0 right-0' style={{ background: `url(${item.image}) no-repeat center center/cover` }}></div>
            <div className='absolute w-full h-full left-0 top-0 right-0 bottom-0 z-0 bg-black-950 bg-opacity-50'></div>
            <div className='z-20 md:w-1/2 flex flex-col items-center'>
                <h1 className='text-3xl md:text-center font-inter font-bold text-black-100'>{item.title}</h1>
                <div className='w-20 h-1 bg-tall-poppy-700 my-2'></div>
                <div>
                    {item.text && (
                        <h2 className='text-center text-xl font-inter text-black-200 opacity-90'>{item.text}</h2>
                    )}
                    <div className='flex justify-center mt-2'>
                        {item.link && (
                            <>
                                {item.linkType === 'internal' ? (
                                    <Link className='hover:bg-tall-poppy-700 backdrop-blur-sm transition-all duration-200 border border-tall-poppy-700 px-4 leading-none py-2 rounded-xl text-black-100 flex justify-center items-center' to={item.link}>{item.linkText}</Link>
                                ) : (
                                    <a className='hover:bg-tall-poppy-700 transition-all backdrop-blur-sm duration-200 border border-tall-poppy-700 px-4 leading-none py-2 rounded-xl text-black-100 flex justify-center items-center' href={item.link} target='_blank'>{item.linkText}</a>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
