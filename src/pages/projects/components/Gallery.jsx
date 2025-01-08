import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

export const Gallery = ({ data }) => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1,
    });

    const openLightbox = (index) => {
        setLightboxController({ toggler: !lightboxController.toggler, slide: index + 1, });
    };

    return (
        <>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                {data.map((image, index) => (
                    <div key={index} className='h-[300px]'>
                        <img src={image} className='w-full h-full object-cover rounded-xl cursor-pointer' alt="Photo" onClick={() => openLightbox(index)}/>
                    </div>
                ))}
            </div>

            <FsLightbox toggler={lightboxController.toggler} sources={data} slide={lightboxController.slide}/>

        </>
    );
};
