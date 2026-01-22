import './Services.css';

const Services = () => {
    const services = [
        {
            number: '01',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
            ),
            title: 'Brand Identity Design',
            description: 'Complete brand identity systems including logos, color palettes, typography, and brand guidelines that make your business memorable.',
            features: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
            image: 'https://i.pinimg.com/736x/f8/88/bd/f888bdb652a46cc684079b8244bb6806.jpg'
        },
        {
            number: '02',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            ),
            title: 'UI/UX Design',
            description: 'User-centered design solutions that combine beautiful aesthetics with intuitive functionality for web and mobile applications.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Testing'],
            featured: true,
            image: 'https://i.pinimg.com/736x/98/bc/31/98bc319b886fd8ed6b99c01565d7f2ab.jpg'
        },
        {
            number: '03',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
            ),
            title: 'Responsive Web Design',
            description: 'Native iOS and Android app designs with smooth interactions, micro-animations, and platform-specific patterns.',
            features: ['iOS Design', 'Android Design', 'App Icons'],
            image: 'https://i.pinimg.com/736x/d1/96/12/d196122b73a9f1794acee429efda5aa3.jpg'
        },
        {
            number: '04',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                </svg>
            ),
            title: 'Design Systems',
            description: 'Scalable and consistent design systems with reusable components, tokens, and documentation for seamless team collaboration.',
            features: ['Component Library', 'Style Guide', 'Documentation'],
            image: 'https://i.pinimg.com/1200x/82/3a/fb/823afbc52011e8d4e10df6d4f1f696f4.jpg'
        },
        {
            number: '05',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
            ),
            title: 'Web Development',
            description: 'Modern, responsive websites built with the latest technologies, optimized for performance and search engines.',
            features: ['React', 'Next.js', 'Responsive', 'SEO'],
            image: 'https://i.pinimg.com/1200x/d6/2f/76/d62f762d08ecb0456e9f46967ba34230.jpg'
        },
    ];

    return (
        <section className="services section" id="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">What I Do</span>
                    <h2 className="section-title">
                        Services I <span className="text-gradient">Offer</span>
                    </h2>
                    <p className="section-subtitle">
                        Comprehensive design and development services to help your business
                        create meaningful digital experiences.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card ${service.featured ? 'featured' : ''}`}
                            style={{ backgroundImage: `url(${service.image})` }}
                        >
                            <span className="service-number">{service.number}</span>
                            <div className="service-icon">{service.icon}</div>
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <div className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <span key={idx} className="service-feature">{feature}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="services-cta">
                    <a href="#contact" className="btn btn-primary">
                        Start a Project
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
