import Link from "next/link";

interface BannerProps {
    label: string;
    href: string;
    text: string;
}

export const Banner = ({ label, href, text }: BannerProps) => {
  
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    const buttonClasses = "px-4 py-2 bg-tall-poppy-800 hover:bg-tall-poppy-900 text-neutral-100 hover:text-neutral-50 transition-all duration-200 items-center flex gap-2 cursor-pointer";

    const ExternalIcon = () => (
        <svg aria-hidden="true" className="w-4 h-4" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    );

    return (
        <div className="bg-neutral-50 p-2 w-full relative">
            <section className="p-4 bg-tall-poppy-700 flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap z-10">
                
                <p className="text-center text-neutral-100">{label}</p>

                {isExternal ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
                        <span className="leading-none">{text}</span>
                        <ExternalIcon />
                    </a>
                ) : (
                    <Link href={href} className={buttonClasses}>
                        <span className="leading-none">{text}</span>
                    </Link>
                )}

            </section>
        </div>
    );
};