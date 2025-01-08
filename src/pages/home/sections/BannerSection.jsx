import { Link } from "react-router-dom"

export const BannerSection = ({ text, textLink, link, linkType }) => {
    return (
        <section className='p-4 w-full bg-tall-poppy-700 flex items-center justify-center gap-4 flex-wrap shadow-2xl z-10'>
            <p className='text-center font-inter text-black-100'>{text}</p>
            {linkType === "internal" ? (
                <Link to={link} className="px-4 py-2 bg-tall-poppy-800 rounded-xl text-black-100 hover:text-black-50 transition-all duration-200 items-center flex gap-2">
                    <span className="leading-none">{textLink}</span>
                    <svg className="w-4 h-4" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </Link>
            ) : (
                <a href={link} target="_blank" className="px-4 py-2 bg-tall-poppy-800 rounded-xl text-black-100 hover:text-black-50 transition-all duration-200 items-center flex gap-2">
                    <span className="leading-none">{textLink}</span>
                    <svg className="w-4 h-4" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </a>
            )}
        </section>
    )
}
