import { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [showText, setShowText] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                // Random increment for realistic loading feel
                const increment = Math.floor(Math.random() * 10) + 1;
                return Math.min(prev + increment, 100);
            });
        }, 150);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            // Show main text after progress completes
            setTimeout(() => {
                setShowText(true);
            }, 500);

            // Start exit sequence
            setTimeout(() => {
                setIsExiting(true);
            }, 2500); // Wait for text to be read

            // Complete loading
            setTimeout(() => {
                setOpacity(0);
                setTimeout(() => {
                    onComplete();
                }, 1000); // Fade out duration
            }, 3500); // Total duration before fade out
        }
    }, [progress, onComplete]);

    if (opacity === 0) return null;

    return (
        <div className={`preloader ${isExiting ? 'exit' : ''}`} style={{ opacity }}>
            <div className="preloader-content">
                <div className="preloader-counter">
                    <span className="counter-value">{progress}</span>
                    <span className="counter-symbol">%</span>
                </div>

                <div className="preloader-line-container">
                    <div
                        className="preloader-line"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <div className={`preloader-text ${showText ? 'visible' : ''}`}>
                    <h1 className="hero-name">
                        <span className="name-part">Ahmad</span>
                        <span className="name-part accent">Azriel</span>
                    </h1>
                    <p className="hero-role">Frontend Developer & Ai Engineer</p>
                </div>
            </div>

            <div className="preloader-bg">
                <div className="bg-slice slice-1"></div>
                <div className="bg-slice slice-2"></div>
                <div className="bg-slice slice-3"></div>
            </div>
        </div>
    );
};

export default Preloader;
