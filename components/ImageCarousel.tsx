"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image, { StaticImageData } from "next/image";

interface ImageCarouselProps {
    images: StaticImageData[]; // Array of image URLs
}
export const ImageCarousel = ({ images }: ImageCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);
    const intervalRef = useRef<NodeJS.Timeout>();

    // Update visible count based on viewport width
    const updateItemsPerPage = useCallback(() => {
        const width = window.innerWidth;
        const perPage = width >= 1024 ? 3 : width >= 768 ? 2 : 1;
        setItemsPerPage(perPage);
        setCurrentIndex((idx) => Math.min(idx, images.length - perPage));
    }, []);

    useEffect(() => {
        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, [updateItemsPerPage]);

    // Auto-slide setup
    const startAutoSlide = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setCurrentIndex((idx) =>
                idx >= images.length - itemsPerPage ? 0 : idx + 1
            );
        }, 3000);
    }, [itemsPerPage]);

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current!);
    }, [startAutoSlide]);

    // Manual navigation resets auto-slide
    const goToNext = useCallback(() => {
        setCurrentIndex((idx) =>
            idx >= images.length - itemsPerPage ? 0 : idx + 1
        );
        startAutoSlide();
    }, [itemsPerPage, startAutoSlide]);

    const goToPrevious = useCallback(() => {
        setCurrentIndex((idx) =>
            idx <= 0 ? images.length - itemsPerPage : idx - 1
        );
        startAutoSlide();
    }, [itemsPerPage, startAutoSlide]);

    const transformValue = `translateX(-${(100 / itemsPerPage) * currentIndex}%)`;

    return (
        <>
            <div className="relative w-full mx-auto">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                    <div
                        className="flex justify-center transition-transform duration-500 ease-in-out"
                        style={{ transform: transformValue }}
                    >
                        {images.map((imgSrc, idx) => (
                            <div
                                key={idx}
                                className="min-w-full md:min-w-[50%] lg:min-w-[33.3333%] flex-shrink-0"
                            >
                                <Image
                                    src={imgSrc}
                                    alt={`Gallery Image ${idx + 1}`}
                                    className="w-full h-96 object-cover rounded-2xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-opacity-100 text-gray-800 rounded-full p-1 shadow-lg focus:outline-none transition-opacity z-10"
                >
                    {/* Left Arrow */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M15.75 19.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.06 12l6.69 6.69a.75.75 0 010 1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-opacity-100 text-gray-800 rounded-full p-1 shadow-lg focus:outline-none transition-opacity z-10"
                >
                    {/* Right Arrow */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8.25 4.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L14.94 12 8.25 5.31a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </>
    );
};
