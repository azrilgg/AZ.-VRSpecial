import './TechStack.css';

const TechStack = () => {
    const designTools = [
        {
            name: 'Figma',
            subtitle: 'UI Design',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                </svg>
            )
        },
        {
            name: 'Adobe XD',
            subtitle: 'Prototyping',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.25 2A2.25 2.25 0 0 0 2 4.25v15.5A2.25 2.25 0 0 0 4.25 22h15.5A2.25 2.25 0 0 0 22 19.75V4.25A2.25 2.25 0 0 0 19.75 2H4.25zm6.03 5.48l2.59 4.58-.08.16-2.87 5.04h-2.4l2.87-5.04-2.59-4.74h2.48zm4.08 0h2.21l-1.93 3.32 2.43 4.46h-2.4l-1.24-2.32-.57 1-.67 1.32h-2.4l2.64-4.78-1.93-3h2.21l.83 1.6.82-1.6z" />
                </svg>
            )
        },
        {
            name: 'Photoshop',
            subtitle: 'Image Editing',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01v3.36c.11.01.25.02.42.02.65 0 1.15-.15 1.49-.44.35-.29.52-.73.52-1.27 0-.53-.19-.96-.57-1.18V8.42zM19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM12.15 13c-.46.3-1.07.48-1.77.54v2.93H8.49V7.22c.52-.09 1.13-.14 1.89-.14.85 0 1.5.18 1.96.49.44.31.75.84.75 1.49 0 .65-.22 1.18-.63 1.58-.29.28-.7.51-1.19.62v.02c.55.07.99.31 1.29.62.35.37.55.87.55 1.51 0 .65-.21 1.17-.54 1.57-.39.48-.98.78-1.68.91-.04.01-.09.02-.13.02-.19.03-.4.05-.61.06v-.01zm6.47 2.01c-.49.49-1.26.78-2.25.78-.67 0-1.27-.12-1.67-.29v-1.56c.43.22 1.02.38 1.59.38.38 0 .66-.08.84-.22.17-.14.26-.33.26-.58 0-.23-.09-.42-.28-.58-.18-.16-.52-.33-1.01-.52-.69-.26-1.18-.58-1.47-.98-.29-.4-.43-.87-.43-1.43 0-.72.26-1.3.78-1.73.52-.43 1.21-.65 2.07-.65.67 0 1.22.1 1.65.29v1.5a3.14 3.14 0 0 0-1.49-.38c-.34 0-.6.07-.78.21-.18.14-.27.32-.27.55 0 .21.09.39.27.53.18.14.5.3.97.48.72.28 1.24.61 1.54 1 .3.39.45.87.45 1.45 0 .74-.26 1.33-.77 1.77l.01-.02z" />
                </svg>
            )
        },
        {
            name: 'Illustrator',
            subtitle: 'Vector Graphics',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10.53 10.73c-.1-.33-.19-.66-.28-1.01-.09-.33-.18-.65-.25-.93h-.02c-.08.33-.17.66-.27.98-.1.32-.2.66-.3 1l-.55 1.83h2.23l-.56-1.87zM19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM12.95 16.47h-1.77l-.68-2.28H8.32l-.63 2.28H6.01l2.54-8.7h2.03l2.37 8.7zm5.03 0h-1.63V11.2h-.02l-2.12 5.27h-1.22l.02-7.07h1.59v5.22h.02l2.08-5.22h1.28v7.07z" />
                </svg>
            )
        },
        {
            name: 'After Effects',
            subtitle: 'Motion Design',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM11.82 16.47H10.1l-.67-2.28H7.19l-.63 2.28H4.88l2.54-8.7h2.03l2.37 8.7zm6.25-.75c-.18.22-.43.4-.75.53-.32.13-.73.22-1.22.22-.78 0-1.42-.2-1.93-.62-.5-.41-.8-1-.89-1.76l1.51-.19c.04.35.16.62.37.81.21.19.48.28.81.28.3 0 .54-.08.72-.23.18-.15.27-.35.27-.58 0-.18-.05-.33-.17-.45-.11-.12-.29-.22-.54-.3-.25-.08-.56-.16-.93-.26-.5-.13-.91-.28-1.21-.46-.31-.18-.54-.4-.69-.68-.15-.27-.23-.6-.23-.98 0-.5.12-.91.37-1.24.25-.33.58-.58.99-.74.41-.16.86-.24 1.34-.24.74 0 1.34.17 1.8.52.46.35.73.82.8 1.43l-1.51.14c-.04-.27-.15-.48-.33-.63-.18-.15-.42-.22-.72-.22-.27 0-.49.06-.66.19-.17.13-.25.3-.25.52 0 .14.05.26.14.36.09.1.23.19.42.26.19.07.45.15.77.22.53.13.97.28 1.31.45.34.18.6.41.77.69.17.28.26.63.26 1.06 0 .44-.11.84-.34 1.19l.02.01z" />
                </svg>
            )
        },
        {
            name: 'Sketch',
            subtitle: 'UI Design',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1.5L6.5 6 2 9.5 12 22.5l10-13L17.5 6 12 1.5zM5.5 9.65l6.5 10.1-8.5-10.1h2zm13 0l-6.5 10.1 8.5-10.1h-2zM12 4.5l3.5 3L12 11l-3.5-3.5L12 4.5z" />
                </svg>
            )
        },
        {
            name: 'InVision',
            subtitle: 'Prototyping',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.25 2A2.25 2.25 0 0 0 2 4.25v15.5A2.25 2.25 0 0 0 4.25 22h15.5A2.25 2.25 0 0 0 22 19.75V4.25A2.25 2.25 0 0 0 19.75 2H4.25zm4.88 5.5a1.12 1.12 0 1 1 0 2.25 1.12 1.12 0 0 1 0-2.25zm4.87 9h-1.17c-.13 0-.22-.08-.22-.19v-4.75c0-.11.09-.19.22-.19h1.17c.13 0 .22.08.22.19v4.75c0 .11-.09.19-.22.19zm-4.88-6h-.17c-.13 0-.22.08-.22.19v4.75c0 .11.09.19.22.19h1.17c.13 0 .22-.08.22-.19v-1.82c0-.61.24-1.44 1.12-1.44.74 0 .98.57.98 1.35v1.91c0 .11.09.19.22.19h1.17c.13 0 .22-.08.22-.19v-2.38c0-1.28-.54-2.06-1.77-2.06-.67 0-1.17.27-1.44.65h-.02v-.46c0-.11-.09-.19-.22-.19H9.12z" />
                </svg>
            )
        },
        {
            name: 'Framer',
            subtitle: 'Interactive',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 2v20l8-8 8 8V2H4zm14 14l-6-6H6V4h12v12z" />
                </svg>
            )
        },
    ];

    const devTools = [
        {
            name: 'React',
            subtitle: 'Frontend',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z" />
                </svg>
            )
        },
        {
            name: 'Next.js',
            subtitle: 'Framework',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.5 0A11.5 11.5 0 0 0 0 11.5 11.5 11.5 0 0 0 11.5 23 11.5 11.5 0 0 0 23 11.5 11.5 11.5 0 0 0 11.5 0zm4.08 16.83L9.5 8.17v8.66h-1V6.6l7.57 10.53a9.5 9.5 0 0 1-1.49.7zm1.89-1.25l-1.3-1.82V6.6h1v8.55c.1-.19.2-.38.3-.57z" />
                </svg>
            )
        },
        {
            name: 'TypeScript',
            subtitle: 'Language',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                </svg>
            )
        },
        {
            name: 'Node.js',
            subtitle: 'Backend',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.02c-.438-.245-.224-.332-.08-.383.658-.229.791-.281 1.493-.681.074-.041.17-.025.244.018l2.26 1.341c.082.046.198.046.274 0l8.811-5.084c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.193-.137-.242l-8.805-5.078c-.082-.047-.19-.047-.272 0L3.25 6.68c-.085.049-.139.143-.139.242v10.072c0 .097.054.189.136.236l2.414 1.393c1.31.655 2.11-.117 2.11-.893V7.753c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v9.977c0 1.748-.952 2.75-2.608 2.75-.509 0-.91 0-2.031-.551l-2.311-1.33A1.847 1.847 0 0 1 1.5 17.005V6.933c0-.675.362-1.305.948-1.641L11.26.21a1.918 1.918 0 0 1 1.887 0l8.811 5.082c.586.336.947.966.947 1.641v10.072c0 .675-.36 1.303-.946 1.639l-8.811 5.084a1.85 1.85 0 0 1-.922.247l-.028.025zm2.719-6.954c-3.847 0-4.654-1.765-4.654-3.248 0-.141.114-.253.256-.253h1.138c.127 0 .233.092.253.216.172 1.165.686 1.753 3.007 1.753 1.851 0 2.639-.419 2.639-1.401 0-.566-.224-.986-3.101-1.269-2.405-.237-3.893-.77-3.893-2.695 0-1.775 1.497-2.833 4.008-2.833 2.82 0 4.214.978 4.393 3.079a.256.256 0 0 1-.063.189.257.257 0 0 1-.182.077h-1.145a.253.253 0 0 1-.245-.198c-.273-1.21-.934-1.598-2.758-1.598-2.032 0-2.268.708-2.268 1.238 0 .643.279.831 3.005 1.193 2.7.357 3.989.864 3.989 2.753 0 1.918-1.598 3.018-4.385 3.018l.006-.021z" />
                </svg>
            )
        },
        {
            name: 'Tailwind',
            subtitle: 'CSS',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                </svg>
            )
        },
        {
            name: 'Git',
            subtitle: 'Version Control',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
                </svg>
            )
        },
        {
            name: 'VS Code',
            subtitle: 'Editor',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                </svg>
            )
        },
        {
            name: 'Vercel',
            subtitle: 'Deployment',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 22.525H0l12-21.05 12 21.05z" />
                </svg>
            )
        },
    ];

    const skills = {
        design: [
            { name: 'UI Design', percentage: 95 },
            { name: 'UX Research', percentage: 85 },
            { name: 'Prototyping', percentage: 92 },
            { name: 'Design Systems', percentage: 88 },
            { name: 'Motion Design', percentage: 80 },
        ],
        development: [
            { name: 'HTML/CSS', percentage: 95 },
            { name: 'JavaScript', percentage: 90 },
            { name: 'React', percentage: 88 },
            { name: 'Responsive Design', percentage: 98 },
            { name: 'Performance', percentage: 85 },
        ],
    };

    return (
        <section className="techstack section" id="stack">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Tech Stack</span>
                    <h2 className="section-title">
                        Tools & <span className="text-gradient">Technologies</span>
                    </h2>
                    <p className="section-subtitle">
                        The tools and technologies I use to bring ideas to life and create
                        exceptional digital experiences.
                    </p>
                </div>

                <div className="techstack-content">
                    {/* Design Tools Marquee */}
                    <div className="marquee-wrapper">
                        <div className="marquee">
                            {[...designTools, ...designTools].map((tool, index) => (
                                <div key={index} className="tech-item">
                                    <div className="tech-icon">{tool.icon}</div>
                                    <div className="tech-info">
                                        <span className="tech-name">{tool.name}</span>
                                        <span className="tech-subtitle">{tool.subtitle}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dev Tools Marquee (Reverse) */}
                    <div className="marquee-wrapper">
                        <div className="marquee marquee-reverse">
                            {[...devTools, ...devTools].map((tool, index) => (
                                <div key={index} className="tech-item">
                                    <div className="tech-icon">{tool.icon}</div>
                                    <div className="tech-info">
                                        <span className="tech-name">{tool.name}</span>
                                        <span className="tech-subtitle">{tool.subtitle}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Grid - Super God Mode */}
                    <div className="skills-container">
                        {/* Design Skills */}
                        <div className="skills-category design-category">
                            <div className="category-header">
                                <div className="category-icon-wrapper">
                                    <div className="category-icon-glow"></div>
                                    <span className="skills-category-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                            <line x1="9" y1="9" x2="9.01" y2="9" />
                                            <line x1="15" y1="9" x2="15.01" y2="9" />
                                        </svg>
                                    </span>
                                </div>
                                <h3 className="skills-category-title">Design <span className="text-gradient">Mastery</span></h3>
                            </div>

                            <div className="skills-list">
                                {skills.design.map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage-wrapper">
                                                <span className="skill-percentage">{skill.percentage}%</span>
                                            </span>
                                        </div>
                                        <div className="skill-bar-wrapper">
                                            <div className="skill-track"></div>
                                            <div
                                                className="skill-bar"
                                                style={{ '--width': `${skill.percentage}%` }}
                                            >
                                                <div className="skill-bar-shine"></div>
                                                <div className="skill-bar-glow"></div>
                                                <div className="skill-particles"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Development Skills */}
                        <div className="skills-category dev-category">
                            <div className="category-header">
                                <div className="category-icon-wrapper">
                                    <div className="category-icon-glow"></div>
                                    <span className="skills-category-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="16 18 22 12 16 6" />
                                            <polyline points="8 6 2 12 8 18" />
                                        </svg>
                                    </span>
                                </div>
                                <h3 className="skills-category-title">Code <span className="text-gradient">Sorcery</span></h3>
                            </div>

                            <div className="skills-list">
                                {skills.development.map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage-wrapper">
                                                <span className="skill-percentage">{skill.percentage}%</span>
                                            </span>
                                        </div>
                                        <div className="skill-bar-wrapper">
                                            <div className="skill-track"></div>
                                            <div
                                                className="skill-bar"
                                                style={{ '--width': `${skill.percentage}%` }}
                                            >
                                                <div className="skill-bar-shine"></div>
                                                <div className="skill-bar-glow"></div>
                                                <div className="skill-particles"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
