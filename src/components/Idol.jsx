import { useEffect, useRef, useState } from 'react';
import './Idol.css';
import messiImg from '../assets/image/messi landscape.jpg';

const Idol = () => {
    const sectionRef = useRef(null);
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const scrollProgress = Math.max(0, Math.min(1, 1 - (rect.top / window.innerHeight)));

            section.style.setProperty('--scroll-progress', scrollProgress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCardMove = (e, index) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.setProperty('--rotate-x', `${rotateX}deg`);
        card.style.setProperty('--rotate-y', `${rotateY}deg`);
        card.style.setProperty('--glare-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--glare-y', `${(y / rect.height) * 100}%`);
    };

    const handleCardLeave = (e) => {
        const card = e.currentTarget;
        card.style.setProperty('--rotate-x', '0deg');
        card.style.setProperty('--rotate-y', '0deg');
        card.style.setProperty('--glare-x', '50%');
        card.style.setProperty('--glare-y', '50%');
    };

    const philosophyData = [
        {
            title: "Vision",
            messi: "Playmaking",
            dev: "Architecture",
            desc: "Just as Messi sees passes others can't, a great developer envisions systems before writing a single line of code.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            ),
            delay: '0s'
        },
        {
            title: "Precision",
            messi: "Free Kicks",
            dev: "Clean Code",
            desc: "Accuracy is everything. Whether placing a ball in the top corner or writing bug-free logic, precision defines mastery.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
            ),
            delay: '0.2s'
        },
        {
            title: "Dedication",
            messi: "Training",
            dev: "Learning",
            desc: "Talent is the spark, but obsession is the fire. Continuous improvement is the only path to the \"God Tier\".",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                    <line x1="16" y1="8" x2="2" y2="22" />
                    <line x1="17.5" y1="15" x2="9" y2="15" />
                </svg>
            ),
            delay: '0.4s'
        }
    ];

    return (
        <section className="idol-section" ref={sectionRef}>
            <div className="idol-bg-wrapper">
                <div className="idol-bg-image" style={{ backgroundImage: `url(${messiImg})` }}></div>
                <div className="idol-particles"></div>
                <div className="idol-overlay"></div>
            </div>

            <div className="container idol-container">
                <div className="idol-header">
                    <span className="section-label">The Inspiration</span>
                    <h2 className="idol-title">
                        Lines of <span className="text-gradient">Greatness</span>
                    </h2>
                    <p className="idol-subtitle">
                        "I start early and I stay late, day after day, year after year.
                        It took me 17 years and 114 days to become an overnight success."
                    </p>
                </div>

                <div className="philosophy-grid">
                    {philosophyData.map((item, index) => (
                        <div
                            key={index}
                            className={`philosophy-card ${activeCard === index ? 'active' : ''}`}
                            style={{ '--delay': item.delay }}
                            onMouseMove={(e) => handleCardMove(e, index)}
                            onMouseLeave={handleCardLeave}
                            onClick={() => setActiveCard(activeCard === index ? null : index)}
                        >
                            <div className="card-glare"></div>
                            <div className="card-border-glow"></div>
                            <div className="card-content">
                                <div className="icon-box">
                                    {item.icon}
                                </div>
                                <h3 className="card-title">{item.title}</h3>
                                <div className="comparison">
                                    <div className="comp-row">
                                        <span className="label">Messi</span>
                                        <span className="value">{item.messi}</span>
                                    </div>
                                    <div className="comp-divider"></div>
                                    <div className="comp-row">
                                        <span className="label">Dev</span>
                                        <span className="value">{item.dev}</span>
                                    </div>
                                </div>
                                <p className="card-desc">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Idol;
