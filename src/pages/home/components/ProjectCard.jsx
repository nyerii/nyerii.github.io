import React from 'react'
import { Link } from 'react-router-dom'


export const ProjectCard = ({ project }) => {
    return (
        <div className='flex flex-col gap-2 justify-between h-[400px] p-4 bg-black-950 rounded-2xl relative overflow-hidden'>
            <div  className='flex items-center gap-2 text-black-50 font-inter z-20'>
                {project.icon === 1 ? (
                    <svg className='w-4 h-4' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 20.0872H8.61029C8.95063 20.0872 9.28888 20.1277 9.61881 20.2087L12.3769 20.8789C12.9753 21.0247 13.5988 21.0389 14.2035 20.9214L17.253 20.3281C18.0585 20.1712 18.7996 19.7855 19.3803 19.2205L21.5379 17.1217C22.154 16.5234 22.154 15.5524 21.5379 14.9531C20.9832 14.4135 20.1047 14.3527 19.4771 14.8103L16.9626 16.6449C16.6025 16.9081 16.1643 17.0498 15.7137 17.0498H13.2855L14.8311 17.0498C15.7022 17.0498 16.4079 16.3633 16.4079 15.5159V15.2092C16.4079 14.5055 15.9156 13.892 15.2141 13.7219L12.8286 13.1418C12.4404 13.0476 12.0428 13 11.6431 13C10.6783 13 8.93189 13.7988 8.93189 13.7988L6 15.0249M2 14.6L2 20.4C2 20.9601 2 21.2401 2.10899 21.454C2.20487 21.6422 2.35785 21.7951 2.54601 21.891C2.75992 22 3.03995 22 3.6 22H4.4C4.96005 22 5.24008 22 5.45399 21.891C5.64215 21.7952 5.79513 21.6422 5.89101 21.454C6 21.2401 6 20.9601 6 20.4V14.6C6 14.04 6 13.7599 5.89101 13.546C5.79513 13.3579 5.64215 13.2049 5.45399 13.109C5.24008 13 4.96005 13 4.4 13H3.6C3.03995 13 2.75992 13 2.54601 13.109C2.35785 13.2049 2.20487 13.3579 2.10899 13.546C2 13.7599 2 14.04 2 14.6ZM17.1914 3.59227C16.5946 2.34341 15.2186 1.6818 13.8804 2.32039C12.5423 2.95898 11.9722 4.4734 12.5325 5.80284C12.8787 6.62448 13.8707 8.22002 14.5781 9.31905C14.8394 9.72513 14.9701 9.92817 15.161 10.0469C15.3247 10.1488 15.5297 10.2037 15.7224 10.1974C15.9471 10.1899 16.1618 10.0794 16.5911 9.85845C17.7532 9.26033 19.4101 8.37457 20.1208 7.83614C21.2707 6.96494 21.5556 5.36359 20.6947 4.14626C19.8337 2.92892 18.3327 2.80914 17.1914 3.59227Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) : project.icon === 2 ? (
                    <svg className='w-4 h-4' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5295 8.35186C12.9571 8.75995 12.2566 9 11.5 9C9.567 9 8 7.433 8 5.5C8 3.567 9.567 2 11.5 2C12.753 2 13.8522 2.65842 14.4705 3.64814M6 20.0872H8.61029C8.95063 20.0872 9.28888 20.1277 9.61881 20.2086L12.3769 20.8789C12.9753 21.0247 13.5988 21.0388 14.2035 20.9214L17.253 20.3281C18.0585 20.1712 18.7996 19.7854 19.3803 19.2205L21.5379 17.1217C22.154 16.5234 22.154 15.5524 21.5379 14.9531C20.9832 14.4134 20.1047 14.3527 19.4771 14.8103L16.9626 16.6449C16.6025 16.9081 16.1643 17.0498 15.7137 17.0498H13.2855L14.8311 17.0498C15.7022 17.0498 16.4079 16.3633 16.4079 15.5159V15.2091C16.4079 14.5055 15.9156 13.892 15.2141 13.7219L12.8286 13.1417C12.4404 13.0476 12.0428 13 11.6431 13C10.6783 13 8.93189 13.7988 8.93189 13.7988L6 15.0249M20 6.5C20 8.433 18.433 10 16.5 10C14.567 10 13 8.433 13 6.5C13 4.567 14.567 3 16.5 3C18.433 3 20 4.567 20 6.5ZM2 14.6L2 20.4C2 20.9601 2 21.2401 2.10899 21.454C2.20487 21.6422 2.35785 21.7951 2.54601 21.891C2.75992 22 3.03995 22 3.6 22H4.4C4.96005 22 5.24008 22 5.45399 21.891C5.64215 21.7951 5.79513 21.6422 5.89101 21.454C6 21.2401 6 20.9601 6 20.4V14.6C6 14.0399 6 13.7599 5.89101 13.546C5.79513 13.3578 5.64215 13.2049 5.45399 13.109C5.24008 13 4.96005 13 4.4 13L3.6 13C3.03995 13 2.75992 13 2.54601 13.109C2.35785 13.2049 2.20487 13.3578 2.10899 13.546C2 13.7599 2 14.0399 2 14.6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) : (
                    <svg className='w-4 h-4' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.9 11.4444V14.2222M6.9 11.4444V4.77778C6.9 3.8573 7.66112 3.11111 8.6 3.11111C9.53888 3.11111 10.3 3.8573 10.3 4.77778M6.9 11.4444C6.9 10.524 6.13888 9.77778 5.2 9.77778C4.26112 9.77778 3.5 10.524 3.5 11.4444V13.6667C3.5 18.269 7.30558 22 12 22C16.6944 22 20.5 18.269 20.5 13.6667V8.11111C20.5 7.19064 19.7389 6.44444 18.8 6.44444C17.8611 6.44444 17.1 7.19064 17.1 8.11111M10.3 4.77778V10.8889M10.3 4.77778V3.66667C10.3 2.74619 11.0611 2 12 2C12.9389 2 13.7 2.74619 13.7 3.66667V4.77778M13.7 4.77778V10.8889M13.7 4.77778C13.7 3.8573 14.4611 3.11111 15.4 3.11111C16.3389 3.11111 17.1 3.8573 17.1 4.77778V8.11111M17.1 8.11111V10.8889" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
                <p>{project.type}</p>
            </div>
            <div className=' flex flex-col gap-2 text-black-50 z-20'>
                <h2 className='font-bold text-2xl'>{project.title}</h2>
                <p>{project.description}</p>
                {project.link && (
                    <div>
                        <Link to={project.link} className='transition-all duration-200 flex items-center gap-1 group text-black-50 font-inter'>
                            <span>Leer más</span>
                            <div className="relative">
                                <svg className='w-4 h-4 text-transparent' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                <svg className='w-4 h-4 absolute left-0 top-0 group-hover:translate-x-[5px] transition-all duration-200' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
            
            <div className='absolute w-full h-full left-0 top-0 bottom-0 right-0 z-10' style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, .8), transparent" }}></div>
            <div className='absolute w-full h-full left-0 top-0 bottom-0 right-0 z-0' style={{ background: `url(${project.image}) no-repeat center center/cover` }}></div>
        </div>
    )
}
