import { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = ['All', 'UI/UX', 'Branding', 'Web', 'Mobile'];

    const projects = [
        {
            id: 1,
            title: 'NeoraTech',
            category: 'Branding',
            description: 'Company profile website super design.',
            image: 'src/assets/image/neo.png',
            client: 'FinanceFlow Inc.',
            year: '2024',
            role: 'Lead Designer',
            featured: true,
            link: 'https://azrilgg.github.io/NeoraTech/',
            github: 'https://github.com/azrilgg/NeoraTech.git'
        },
        {
            id: 2,
            title: 'Ecolearn',
            category: 'Web',
            description: 'Website education full interactive and complete learn.',
            image: 'src/assets/image/ecolearnind.png',
            client: 'TechStart Labs',
            year: '2024',
            role: 'Brand Strategist',
            link: 'https://ecolearnind.vercel.app/',
            github: 'https://github.com/azrilgg/Ecolearn.git'
        },
        {
            id: 3,
            title: 'Makanism ID',
            category: 'Branding',
            description: 'Website Restaurant Design Elegant and Luxury.',
            image: 'src/assets/image/makanism1.png',
            client: 'ShopStyle Co.',
            year: '2024',
            role: 'Full-Stack Developer',
            link: 'https://makanism.vercel.app/',
            github: 'https://github.com/azrilgg/Makanism-id.git'
        },
        {
            id: 4,
            title: 'ClimaticaID',
            category: 'Web',
            description: 'Web .',
            image: 'src/assets/image/climaticaa.png',
            client: 'SecureBank',
            year: '2024',
            role: 'UI/UX Designer',
            link: 'https://azrilgg.github.io/Climatica/',
            github: 'https://github.com/azrilgg/Climatica.git'
        },
        {
            id: 5,
            title: 'AuraCrystalID',
            category: 'Branding',
            description: 'Web drink product business design super modern.',
            image: 'src/assets/image/aura.png',
            client: 'DataViz Pro',
            year: '2025',
            role: 'Product Designer',
            link: 'https://auracrystalid.vercel.app/',
            github: 'https://github.com/azrilgg/auracrystalid.git'
        },
        {
            id: 6,
            title: 'Luxury CarID',
            category: 'Web',
            description: 'Web showcase car design super luxury.',
            image: 'src/assets/image/luxury.png',
            client: 'Gourmet Kitchen',
            year: '2023',
            role: 'Web Developer',
            link: 'https://auracrystalid.vercel.app/',
            github: 'https://github.com/azrilgg/auracrystalid.git'
        },
        {
            id: 7,
            title: 'FurnihomeID',
            category: 'UI/UX',
            description: 'Website Furniture showcase UI UX design super elegant.',
            image: 'src/assets/image/furnihome project.png',
            client: 'CoinTrade Ltd.',
            year: '2025',
            role: 'Frontend Developer',
            link: 'https://furnihomeid.vercel.app/',
            github: 'https://github.com/azrilgg/Furnihome.git'
        },
        {
            id: 8,
            title: 'Riel - Fav Spotify playslist',
            category: 'Mobile',
            description: 'Fav spotify song playlist Ahmad Azriel.',
            image:'src/assets/image/favspotifyriel.png',
            client: 'Wanderlust Inc.',
            year: '2022',
            role: 'Product Designer',
            link: 'https://azrilgg.github.io/Azriel-fav-music/',
            github: 'https://github.com/azrilgg/Azriel-fav-music.git'
        },
        {
            id: 9,
            title: 'Riel elegant todo Manager',
            category: 'Web',
            description: 'Productive task website features complete data center menu.',
            image: 'src/assets/image/todo.jpg',
            client: 'HomeSmart',
            year: '2025',
            role: 'Lead Designer',
            link: 'https://rieltodolist.vercel.app/',
            github: 'https://github.com/azrilgg/rieltodolist.git'
        },
        {
            id: 10,
            title: 'Riel-Superslide GlobeExpress',
            category: 'UI/UX',
            description: 'Website Travel Experience  specific, immersive, and fully interactive..',
            image: 'src/assets/image/travel.png',
            client: 'EcoStyle',
            year: '2025',
            role: 'Art Director',
            link: 'https://riel-superslide.vercel.app/',
            github: 'https://github.com/azrilgg/slide_swepping-.git'
        },
        {
            id: 11,
            title: 'Riel - MusicPlayer',
            category: 'Web',
            description: 'WEBSITE MUSIC PLAYER AESTHETIC.',
            image: 'src/assets/image/mplayer.png',
            client: 'Prime Estate',
            year: '2024',
            role: 'Full-Stack Developer',
            link: 'https://riel-musicplayer.vercel.app/',
            github: 'https://github.com/azrilgg/azriel-fav-music-.git'
        },
        
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = '';
    };

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Portfolio</span>
                    <h2 className="section-title">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        A selection of my recent work across various industries and platforms.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="projects-filter">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            <span>{cat}</span>
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {(showAll ? filteredProjects : filteredProjects.slice(0, 6)).map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-card ${!showAll && index === 0 && filter === 'All' ? 'featured' : ''}`}
                            onClick={() => openModal(project)}
                        >
                            {project.featured && !showAll && index === 0 && filter === 'All' && (
                                <div className="project-featured">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    Featured
                                </div>
                            )}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                                loading="lazy"
                            />
                            <div className="project-overlay">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-actions">
                                    <span className="project-link">
                                        View Details
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                {filteredProjects.length > 6 && (
                    <div className="projects-cta">
                        <button
                            className="btn btn-outline"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? 'Show Less' : 'View All Projects'}
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ transform: showAll ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            {/* Project Modal */}
            <div
                className={`project-modal ${selectedProject ? 'active' : ''}`}
                onClick={(e) => e.target.classList.contains('project-modal') && closeModal()}
            >
                {selectedProject && (
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>

                        <div className="modal-image-container">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="modal-image"
                            />
                        </div>

                        <div className="modal-body">
                            <div className="modal-header">
                                <span className="modal-category">{selectedProject.category}</span>
                                <h2 className="modal-title">{selectedProject.title}</h2>
                            </div>

                            <p className="modal-description">{selectedProject.description}</p>

                            <div className="modal-details">
                                <div className="modal-detail">
                                    <span className="modal-detail-label">Client</span>
                                    <span className="modal-detail-value">{selectedProject.client}</span>
                                </div>
                                <div className="modal-detail">
                                    <span className="modal-detail-label">Year</span>
                                    <span className="modal-detail-value">{selectedProject.year}</span>
                                </div>
                                <div className="modal-detail">
                                    <span className="modal-detail-label">Role</span>
                                    <span className="modal-detail-value">{selectedProject.role}</span>
                                </div>
                            </div>

                            <div className="modal-actions">
                                <a
                                    href={selectedProject.link}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit Live Site
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                                <a
                                    href={selectedProject.github}
                                    className="btn btn-outline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Source Code
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
