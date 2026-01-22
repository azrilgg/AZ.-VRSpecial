import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'Layanan apa saja yang kamu tawarkan?',
            answer: 'Saya menawarkan berbagai layanan desain dan pengembangan web termasuk UI/UX Design, Web Development dengan React & Next.js, Brand Identity Design, dan pembuatan Design System. Setiap proyek dikerjakan dengan standar kualitas tinggi dan perhatian penuh pada detail.'
        },
        {
            question: 'Berapa lama waktu pengerjaan proyek?',
            answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Website landing page biasanya membutuhkan 1-2 minggu, sedangkan web app yang lebih kompleks bisa memakan waktu 4-8 minggu. Saya akan memberikan timeline yang jelas di awal proyek.'
        },
        {
            question: 'Bagaimana proses kerja sama dengan kamu?',
            answer: 'Proses dimulai dengan konsultasi untuk memahami kebutuhan Anda. Kemudian saya akan membuat proposal dan timeline. Setelah disetujui, saya mulai dengan wireframe dan mockup, lalu ke tahap development. Selama proses, Anda akan mendapat update berkala dan kesempatan untuk memberikan feedback.'
        },
        
       
        {
            question: 'Tech stack apa yang kamu gunakan?',
            answer: 'Saya menggunakan teknologi modern termasuk React, Next.js, TypeScript untuk frontend, dan Node.js untuk backend. Untuk styling, saya familiar dengan CSS, Tailwind, dan Styled Components. Tools desain utama saya adalah Figma dan Adobe Creative Suite.'
        },
        {
            question: 'Apakah kamu menyediakan maintenance setelah proyek selesai?',
            answer: 'Ya, saya menawarkan paket maintenance bulanan untuk menjaga website Anda tetap up-to-date, aman, dan berjalan optimal. Paket ini mencakup update regular, backup, monitoring keamanan, dan dukungan teknis prioritas.'
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq section" id="faq">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">FAQ</span>
                    <h2 className="section-title">
                        Pertanyaan <span className="text-gradient">Umum</span>
                    </h2>
                    <p className="section-subtitle">
                        Temukan jawaban untuk pertanyaan yang sering diajukan tentang
                        layanan dan proses kerja sama dengan saya.
                    </p>
                </div>

                <div className="faq-content">
                    <div className="faq-decoration">
                        <div className="faq-cube">
                            <div className="cube-face front">?</div>
                            <div className="cube-face back">!</div>
                            <div className="cube-face right">Q</div>
                            <div className="cube-face left">A</div>
                            <div className="cube-face top">FAQ</div>
                            <div className="cube-face bottom">💡</div>
                        </div>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-question">
                                    <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                                    <h3 className="faq-question-text">{faq.question}</h3>
                                    <div className="faq-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="5" x2="12" y2="19" className="vertical-line" />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="faq-cta">
                    <p className="faq-cta-text">Masih punya pertanyaan lain?</p>
                    <a href="#contact" className="btn btn-primary">
                        Hubungi Saya
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
