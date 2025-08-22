"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image';

// const [count, setCount] = useState(0);
let isModalOpen = false;





const ZoomButton = ({
    mainImage,
}: {
    mainImage?: string | undefined;
}) => {
    const router = useRouter();

    const handleZoom = () => {
        isModalOpen = true
        console.log('Zoom button clicked');
        router.refresh()
    }

    const handleClose = () => {
        isModalOpen = false
        console.log('Zoom close clicked');
        router.refresh()
    }

    return (
        <>
            {isModalOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-pink-100  z-50"
                    onClick={() => isModalOpen = false} // Close modal on overlay click
                >
                    <div className="w-screen h-screen overflow-auto bg-neutral-50">
                        {/* Important: max-w-none keeps the image from shrinking to fit */}
                        <img
                            src={mainImage || ''}
                            alt="Full size"
                            className="block max-w-none justify-center items-center mx-auto"
                        />
                    </div>
                    {/* <div className="relative max-w-4xl max-h-[90vh] p-4 bg-white rounded-md" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={mainImage || ''}
                            alt="Large product view"
                            width={1000} // Set a large width for the modal view
                            height={800} // Set a large height
                            objectFit="contain"
                            className="w-full h-full"
                            unoptimized
                        /> */}
                    <button
                        onClick={handleClose}
                        className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-full"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {/* </div> */}
                </div>
            )}
            <button className="zoom-button" onClick={handleZoom}>
                <img src="/zoom-in.png" width={40} height={40} alt="" />

            </button>
        </>
    );
};

export default ZoomButton