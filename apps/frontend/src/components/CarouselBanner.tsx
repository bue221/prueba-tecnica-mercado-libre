"use client";
import React, { useState, useEffect, useRef } from "react";

interface CarouselBannerProps {
    images: string[];
    autoPlayInterval?: number;
    height?: {
        mobile: string;
        desktop: string;
    };
    showArrows?: boolean;
    showGradient?: boolean;
    showDots?: boolean;
}

const CarouselBanner: React.FC<CarouselBannerProps> = ({
    images,
    autoPlayInterval = 4000,
    height = {
        mobile: "300px",
        desktop: "520px"
    },
    showArrows = true,
    showGradient = true,
    showDots = true
}) => {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, autoPlayInterval);
        return () => clearInterval(interval);
    }, [autoPlayInterval, images.length]);

    // Swipe handlers
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const diff = touchStartX.current - touchEndX.current;
            if (diff > 50) {
                // Swipe left
                nextSlide();
            } else if (diff < -50) {
                // Swipe right
                prevSlide();
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    return (
        <div className="w-full bg-gradient-to-b from-yellow-100 to-[#ebebeb] -z-10 flex flex-col items-center justify-center">
            <div className="relative w-full group">
                <div
                    className="w-full overflow-hidden relative flex items-center justify-center"
                    style={{
                        height: `clamp(${height.mobile}, 50vw, ${height.desktop})`,
                        backgroundImage: `url(${images[current]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Degradado inferior */}
                    {showGradient && (
                        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
                        </div>
                    )}
                    {/* Flechas */}
                    {showArrows && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 z-10 text-blue-500 rounded-r-full"
                                style={{ zIndex: 3, background: 'white', boxShadow: 'none', padding: "20px" }}
                                aria-label="Anterior"
                            >
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 z-10 text-blue-500 rounded-l-full"
                                style={{ zIndex: 3, background: 'white', boxShadow: 'none', padding: "20px" }}
                                aria-label="Siguiente"
                            >
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </>
                    )}
                    {/* Dots indicators */}
                    {showDots && (
                        <div className="absolute bottom-20 justify-center items-center z-10">
                            <div className="px-8 py-3 flex items-center">
                                {images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrent(idx)}
                                        aria-label={`Ir al slide ${idx + 1}`}
                                        className="mx-2 focus:outline-none"
                                        style={{ background: 'transparent' }}
                                    >
                                        <span
                                            className={`block transition-all duration-200 ${current === idx ? 'size-3 bg-white border-2 border-white' : 'size-2 border-2 border-white bg-gray-200'} rounded-full`}
                                            style={{ display: 'inline-block' }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default CarouselBanner; 