import React, { useState, useEffect } from "react";
import { BlogCard } from "../components/BlogCard";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { NewsLetter } from "../components/NewsLetter";

export const NewsSection = ({ data }) => {
    const [activePage, setActivePage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);

    useEffect(() => {
        
        const updateItemsPerPage = () => {
            if (window.innerWidth < 640) { setItemsPerPage(2);} 
            else if (window.innerWidth < 1024) {setItemsPerPage(3);}
            else {setItemsPerPage(4);}
        };

        updateItemsPerPage();

        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);

    }, []);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const paginatedData = data.slice(
        (activePage - 1) * itemsPerPage,
        activePage * itemsPerPage
    );

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {setActivePage(newPage);}
    };

    return (
        <section className="pb-20 pt-10 bg-black-100 px-4">

            <div className="md:w-1/2 w-full">
                <NewsLetter />
            </div>

            {/* <div  className="md:w-1/2 w-full mt-4">
                <h1 className='text-3xl font-inter text-black-950 font-bold'>Actualidad</h1>
                <h2 className="text-xl font-inter text-black-600">Manténgase informado: Suscríbase para recibir actualizaciones exclusivas</h2>
            </div> */}

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
                {paginatedData.map((item, index) => (<BlogCard key={index} item={item} />))}
            </div>

            <div className="flex justify-center mt-6">

                <Button variant="text" className="hidden sm:flex items-center gap-2" onClick={() => handlePageChange(activePage - 1)} disabled={activePage === 1} >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                    <span>Previous</span>
                </Button>

                <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <IconButton key={page} variant={activePage === page ? "filled" : "text"} color="gray" onClick={() => handlePageChange(page)} >{page}</IconButton>
                    ))}
                </div>

                <Button variant="text" className="hidden sm:flex items-center gap-2" onClick={() => handlePageChange(activePage + 1)} disabled={activePage === totalPages}>
                    <span>Next</span>
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </Button>

            </div>

            {/* <div className="flex justify-center mt-4">
                <Link to={"/actualidad"}>
                    <Button className='flex gap-1 items-center'>
                        <span>Leer más</span>
                        <svg className='w-4 h-4' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Button>
                </Link>
            </div> */}


        </section>
    );
};