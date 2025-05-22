'use client';
import Image from 'next/image';
import { PageFlip } from 'page-flip';
import { useEffect, useRef, useState } from 'react';

export default function FlipBook() {
    const bookRef = useRef(null);
    const flipBook = useRef(null);
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        if (bookRef.current) {
            flipBook.current = new PageFlip(bookRef.current, {
                width: isMobile ? 320 : 600,
                height: isMobile ? 420 : 500,
                size: 'fixed',
                minWidth: isMobile ? 280 : 400,
                maxWidth: 1000,
                minHeight: isMobile ? 400 : 550,
                maxHeight: 1536,
                maxShadowOpacity: 0.5,
                showCover: false,
                mobileScrollSupport: true,
                useMouseEvents: true,
                startPage: 0,
                drawShadow: true,
                flippingTime: 700,
                mode: isMobile ? 'swipe' : 'double',
                clickEventForward: true,
                disableFlipByClick: false,
                swipeDistance: 30,
                usePortrait: true,
                flipCornerSize: 50,
            });

            flipBook.current.loadFromHTML(document.querySelectorAll('.page'));

            flipBook.current.on('flip', (e) => {
                e.preventDefault && e.preventDefault();
            });
        }
    }, [isMobile]);

    const handlePrevPage = () => {
        if (flipBook.current) flipBook.current.flipPrev();
    };

    const handleNextPage = () => {
        if (flipBook.current) flipBook.current.flipNext();
    };

    return (
        <div
            ref={containerRef}
            className="flex flex-col justify-center items-center bg-black px-4"
            style={{ height: '100vh', width: '100%', overflow: 'hidden', position: 'relative' }}
        >
            {/* Book + Buttons */}
            <div className="flex flex-col items-center justify-center relative w-full flex-1" style={{ minHeight: isMobile ? '60vh' : '70vh' }}>
                {/* Flipbook */}
                <div
                    ref={bookRef}
                    className="flipbook shadow-2xl"
                    style={{
                        width: isMobile ? '100%' : 'auto',
                        maxWidth: isMobile ? '100%' : 'auto'
                    }}
                ></div>

                {/* Navigation Arrows */}
                <button
                    onClick={handlePrevPage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md z-20"
                    aria-label="Previous page"
                >
                    &#8592;
                </button>

                <button
                    onClick={handleNextPage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md z-20"
                    aria-label="Next page"
                >
                    &#8594;
                </button>

                {/* Touch areas for page navigation on mobile */}
                {isMobile && (
                    <>
                        <div
                            className="absolute left-0 top-0 w-1/2 h-full z-10 cursor-pointer"
                            onClick={handlePrevPage}
                            aria-label="Previous page"
                        />
                        <div
                            className="absolute right-0 top-0 w-1/2 h-full z-10 cursor-pointer"
                            onClick={handleNextPage}
                            aria-label="Next page"
                        />
                    </>
                )}
            </div>

            {/* Hidden pages */}
            <div className="hidden">
                {/* Page 1 */}
                <div className="page p-0 m-0">
                    <div className="relative w-full h-full">
                        <Image src="/Image1.png" alt="Image 1" fill className="object-cover" />
                    </div>
                </div>

                {/* Page 2 */}
                <div className="page bg-[#FFE4C4] flex flex-col items-center justify-center h-full px-4 md:px-6">
                    <div className="text-center max-w-xl flex flex-col items-center justify-center h-full">
                        <h1 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">Pre-Book Your Delight</h1>
                        <p className="text-base md:text-lg leading-relaxed">
                            Secure your favorite meals ahead of time by choosing your preferred time slot.
                            Order from nearby kitchens offering exclusive, limited-stock dishes tailored just for you!
                        </p>
                    </div>
                </div>

                {/* Page 3 */}
                <div className="page p-0 m-0">
                    <div className="relative w-full h-full">
                        <Image src="/Image2.png" alt="Image 2" fill className="object-cover" />
                    </div>
                </div>

                {/* Page 4 */}
                <div className="page bg-[#FFE4C4] flex flex-col items-center justify-center h-full px-4 md:px-6">
                    <div className="text-center max-w-xl flex flex-col items-center justify-center h-full">
                        <h1 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">Authentic Flavors, Straight from the Heart</h1>
                        <p className="text-base md:text-lg leading-relaxed">
                            Indulge in meals prepared by passionate home chefs, infused with generations of tradition,
                            love, and a deep dedication to crafting unforgettable culinary experiences.
                        </p>
                    </div>
                </div>

                {/* Page 5 */}
                <div className="page p-0 m-0">
                    <div className="relative w-full h-full">
                        <Image src="/Image3.png" alt="Image 3" fill className="object-cover" />
                    </div>
                </div>

                {/* Page 6 */}
                <div className="page bg-[#FFE4C4] flex flex-col items-center justify-center h-full px-4 md:px-6">
                    <div className="text-center max-w-xl flex flex-col items-center justify-center h-full">
                        <h1 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">Made Just for You</h1>
                        <p className="text-base md:text-lg leading-relaxed">
                            Every meal is freshly prepared in small batches at home, ensuring exceptional quality,
                            irresistible taste, and true value for your money.
                        </p>
                    </div>
                </div>

                {/* Page 7 */}
                <div className="page p-0 m-0">
                    <div className="relative w-full h-full">
                        <Image src="/Image4.png" alt="Image 4" fill className="object-cover" />
                    </div>
                </div>

                {/* Page 8 */}
                <div className="page bg-[#FFE4C4] flex flex-col items-center justify-center h-full px-4 md:px-6">
                    <div className="text-center max-w-xl flex flex-col items-center justify-center h-full">
                        <h1 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">Group Feast Made Easy</h1>
                        <p className="text-base md:text-lg leading-relaxed">
                            Savor the joy of daYummeals with friends and family! Split the bill effortlessly
                            and send friendly payment reminders—all while relishing authentic homemade meals together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
