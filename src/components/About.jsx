import './About.css';

const About = () => {
    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
            ),
            text: 'Brand Strategy'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            ),
            text: 'UI/UX Design'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
            ),
            text: 'Mobile Design'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            ),
            text: 'Web Development'
        },
    ];

    const experience = [
        { year: '2024-2025', title: 'working on various web projects and completing program exercises', company: 'SMK WIRABUANA 2' },
        { year: '2024', title: 'make industrial visits and study technology there', company: 'PT AGATE' },
        { year: '2025', title: 'company internship', company: 'PT Ciptadra softindo' },
    ];

    return (
        <section className="about section" id="about">
            <div className="container about-container">
                {/* About Content */}
                <div className="about-content">
                    <span className="about-label">About Me</span>

                    <h2 className="about-title">
                        I design <span className="highlight">digital products</span> that
                        drive business growth
                    </h2>

                    <p className="about-text">
                        With 1 years of experience in UI/UX design and brand strategy,
                        I've helped startups and enterprises create memorable digital experiences.
                        My approach combines user-centered design principles with cutting-edge
                        aesthetics to deliver solutions that not only look stunning but also
                        convert and engage.
                    </p>

                    <div className="about-features">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <span className="feature-text">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="about-bento">
                    {/* Years of Experience */}
                    <div className="bento-card accent">
                        <div className="bento-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </div>
                        <div className="bento-number">1+</div>
                        <div className="bento-label">Years Experience</div>
                    </div>

                    {/* Projects Completed */}
                    <div className="bento-card">
                        <div className="bento-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                        </div>
                        <div className="bento-number">11</div>
                        <div className="bento-label">Projects Done</div>
                    </div>

                    {/* Happy Clients */}
                    <div className="bento-card">
                        <div className="bento-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <div className="bento-number">12</div>
                        <div className="bento-label">Tech Mastered</div>
                    </div>

                    {/* Happy Clients */}
                    <div className="bento-card">
                        <div className="bento-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <div className="bento-number">Junior</div>
                        <div className="bento-label">Experience</div>
                    </div>

                    {/* Experience Timeline */}
                    <div className="bento-card large experience-card">
                        <div className="bento-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                        </div>
                        <div style={{ marginBottom: 'var(--space-md)' }}>
                            <div className="bento-label" style={{ marginBottom: 'var(--space-sm)' }}>Work Experience</div>
                        </div>
                        {experience.map((exp, index) => (
                            <div key={index} className="experience-item">
                                <span className="experience-year">{exp.year}</span>
                                <div className="experience-info">
                                    <h4>{exp.title}</h4>
                                    <p>{exp.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
