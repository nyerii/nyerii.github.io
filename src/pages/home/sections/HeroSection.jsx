import { Link } from "react-router-dom"

export const HeroSection = () => {
    return (
        <section className='relative p-4 min-h-screen bg-black-100 flex items-center justify-center' style={{ background: `url(/assets/images/asset-03.webp) no-repeat center center/cover` }}>
            <div className="bg-black-950 w-full h-full left-0 top-0 right-0 bottom-0 z-10 absolute opacity-75"></div>
            <div className='flex flex-col gap-2 z-20'>
                <div className="flex justify-center"><p className="px-3 cursor-default py-1 border border-black-700 rounded-xl text-center font-inter text-sm text-black-200">Conoce nuestros próximos proyectos <Link to={"/proyectos"} className="text-tall-poppy-500">aquí</Link></p></div>
                <h1 className='text-6xl font-garamond leading-none font-medium cursor-default'>
                    <p className='text-center text-black-50'>Asociación Juvenil <span className='text-tall-poppy-700 text-center'>Nyeri</span></p>
                </h1>
                <h2 className='text-black-100 cursor-default text-center font-inter'>¡Scouts que disfrutan del servicio hacia los demás! Es la hora de cambiar el mundo.</h2>
                <div className="flex items-center gap-4 justify-center pt-2">
                    <Link to={"/conocenos"} className="hover:bg-tall-poppy-700 transition-all duration-200 border border-tall-poppy-700 px-4 leading-none py-2 rounded-xl text-black-100 flex justify-center items-center">
                        <span>Conocenos</span>
                    </Link>
                    <Link to={"/contato"} className="text-black-200 transition-all duration-200 flex items-center gap-1 group">
                        <span>Colabora con nosotros</span>
                        <div className="relative">
                            <svg className='w-4 h-4 text-transparent' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            <svg className='w-4 h-4 absolute left-0 top-0 group-hover:translate-x-[5px] transition-all duration-200' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}
