import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const heroRef = useRef(null);
    const imageRef = useRef(null);

    // 3D Photo Tilt Effect
    const handlePhotoMouseMove = (e) => {
        if (!imageRef.current || isDragging) return;

        const rect = imageRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const rotateY = ((e.clientX - centerX) / rect.width) * 15;
        const rotateX = ((centerY - e.clientY) / rect.height) * 15;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handlePhotoMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <section className="hero" id="home" ref={heroRef}>
            {/* Dynamic Background */}
            <div className="hero-bg">
                <div className="hero-grid-pattern"></div>
                <div className="hero-orb hero-orb-1"></div>
                <div className="hero-orb hero-orb-2"></div>
                <div className="hero-noise"></div>
            </div>

            <div className="hero-container">
                {/* 1. Left Content: Typography & Introduction */}
                <div className="hero-left">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        <span className="badge-text">Available For Project</span>
                    </div>

                    <h1 className="hero-headline">
                        <span className="line-wrapper">
                            <span className="line-text" style={{ transitionDelay: '0.1s' }}>Designing</span>
                        </span>
                        <span className="line-wrapper">
                            <span className="line-text highlight" style={{ transitionDelay: '0.2s' }}>The Future</span>
                        </span>
                        <span className="line-wrapper">
                            <span className="line-text" style={{ transitionDelay: '0.3s' }}>Of Digital.</span>
                        </span>
                    </h1>

                    <p className="hero-subtext">
                        I am <span className="text-accent">Ahmad Azriel</span>, a Frontend Developer & UI/UX designer obsessed with crafting premium digital experiences that leave a lasting impact.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn-hero-primary">
                            <span className="btn-text">View My Work</span>
                            <div className="btn-icon-wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </a>
                        <a href="#contact" className="btn-hero-secondary">
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* 2. Center Content: 3D Image Composition */}
                <div className="hero-center">
                    <div
                        className="hero-card-wrapper"
                        ref={imageRef}
                        onMouseMove={handlePhotoMouseMove}
                        onMouseLeave={handlePhotoMouseLeave}
                        style={{
                            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                        }}
                    >
                        <div className="hero-card-glow"></div>
                        <div className="hero-card-frame"></div>
                        <div className="hero-card-inner">
                            <img
                                src="image/riel.jpeg"
                                alt="Ahmad Azriel"
                                className="hero-img"
                            />
                            <div className="hero-card-content">
                                <span className="card-label">Frontend Developer</span>
                                <h3 className="card-name">AZRIEL</h3>
                            </div>
                        </div>

                        {/* Floating 3D Elements */}
                        <div className="float-card float-1">
                            <div className="float-icon">🎨</div>
                            <span>UI Design</span>
                        </div>
                        <div className="float-card float-2">
                            <div className="float-icon">💻</div>
                            <span>Development</span>
                        </div>
                    </div>
                </div>

                {/* 3. Right Content: Stats & Details */}
                <div className="hero-right">
                    <div className="stat-group">
                        <div className="stat-box" style={{ transitionDelay: '0.4s' }}>
                            <h3 className="stat-num">1+</h3>
                            <p className="stat-label">Years of Experience</p>
                        </div>
                        <div className="stat-box" style={{ transitionDelay: '0.5s' }}>
                            <h3 className="stat-num">11</h3>
                            <p className="stat-label">Projects Completed</p>
                        </div>
                        <div className="stat-box" style={{ transitionDelay: '0.6s' }}>
                            <h3 className="stat-num">12</h3>
                            <p className="stat-label">Tech Mastered</p>
                        </div>
                    </div>

                    <div className="tech-marquee">
                        <div className="marquee-content">
                            <span>React</span> • <span>Next.js</span> • <span>Three.js</span> • <span>Tailwind</span> • <span>PHP</span> •
                        </div>
                    </div>
                </div>
            </div>

            {/* Massive Background Typography */}
            <div className="hero-bg-text">
                <span>AZRIEL</span>
            </div>

            <div className="scroll-indicator">
                <span className="scroll-text">Scroll Down</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
