'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function FlipComponent() {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => setFlipped(!flipped);

return (
    <>
        <style jsx>{`
            .page-wrapper {
            background-color: black;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px;
            box-sizing: border-box;
            }
            .flip-container {
            perspective: 1000px;
            width: 400px;
            height: 400px;
            cursor: pointer;
            }
            .flipper {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 0.6s ease;
            transform-origin: center center;
            }
            .flipped {
            transform: rotateY(180deg);
            }
            .front,
            .back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 12px;
            overflow: hidden;
            top: 0;
            left: 0;
            }
            .front {
            z-index: 2;
            transform: rotateY(0deg);
            }
            .back {
            transform: rotateY(180deg);
            z-index: 1;
            }
        `}</style>

        <div className="page-wrapper">
            <div
            className="flip-container"
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
                if (e.key === 'Enter') handleClick();
            }}
            aria-label="Flip the card"
            >
            <div className={`flipper ${flipped ? 'flipped' : ''}`}>
                <div className="front">
                <Image
                    src="/Flip1.png"
                    alt="Flip front"
                    width={400}
                    height={400}
                    draggable={false}
                    priority
                />
                </div>
                <div className="back">
                <Image
                    src="/Flip2.png"
                    alt="Flip back"
                    width={400}
                    height={400}
                    draggable={false}
                    priority
                />
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
