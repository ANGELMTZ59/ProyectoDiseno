import React, { useEffect } from 'react';
import '../css/paginaprincipal.css';
import ScrollReveal from 'scrollreveal';

function PaginaPrincipal() {
    useEffect(() => {
        const showMenu = (toggleId, navId) => {
            const toggle = document.getElementById(toggleId);
            const nav = document.getElementById(navId);

            if (toggle && nav) {
                toggle.addEventListener('click', () => {
                    nav.classList.toggle('show');
                });
            }
        };

        showMenu('nav-toggle', 'nav-menu');

        const navLink = document.querySelectorAll('.nav-link');

        function linkAction() {
            navLink.forEach(n => n.classList.remove('active'));
            this.classList.add('active');

            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.remove('show');
        }

        navLink.forEach(n => n.addEventListener('click', linkAction));

        const sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        sr.reveal('.home-title', {});
        sr.reveal('.home-scroll', { delay: 200 });
        sr.reveal('.home-img', { origin: 'right', delay: 400 });
    }, []);

    return (
        <>
            <header className="l-header">
                <nav className="nav bd-grid">
                    <div>
                        <a href="#" className="nav-logo">Sistema de Gestión</a>
                    </div>

                    <div className="nav-menu" id="nav-menu">
                        <ul className="nav-list">
                            <li className="nav-item"><a href="#home" className="nav-link active">Inicio</a></li>
                            <li className="nav-item"><a href="#about" className="nav-link">Acerca del Sistema</a></li>
                            <li className="nav-item"><a href="#skills" className="nav-link">Funcionalidades</a></li>
                            <li className="nav-item"><a href="#portfolio" className="nav-link">Evaluaciones</a></li>
                            <li className="nav-item"><a href="#contact" className="nav-link">Contacto</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className="l-main">
                <section className="home" id="home">
                    <div className="home-container bd-grid">
                        <h1 className="home-title">Pagina<br /><span>Principal</span></h1>
                        <div className="home-scroll">
                            <a href="#about" className="home-scroll-link"><i className='bx bx-up-arrow-alt'></i> Ver más</a>
                        </div>
                    </div>
                </section>

                <section className="about section" id="about">
                    <h2 className="section-title">Acerca del Sistema</h2>
                    <div className="about-container bd-grid">
                        <div>
                            <h2 className="about-subtitle">Optimización del proceso de evaluación</h2>
                            <span className="about-profession">Facilitando la gestión académica</span>
                            <p className="about-text">
                                Nuestro sistema permite a docentes y estudiantes gestionar evaluaciones en línea de forma eficiente. Facilita la creación de exámenes, calificaciones automáticas y acceso a resultados en tiempo real.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="skills section" id="skills">
                    <h2 className="section-title">Funcionalidades</h2>
                    <div className="skills-container bd-grid">
                        <div className="skills-box">
                            <h3 className="skills-subtitle">Evaluaciones</h3>
                            <span className="skills-name">Creación de exámenes</span>
                            <span className="skills-name">Corrección automática</span>
                            <span className="skills-name">Resultados inmediatos</span>
                            <span className="skills-name">Historial de calificaciones</span>

                            <h3 className="skills-subtitle">Interfaz</h3>
                            <span className="skills-name">Fácil de usar</span>
                            <span className="skills-name">Adaptado a dispositivos móviles</span>
                        </div>
                    </div>
                </section>

                <section className="portfolio section" id="portfolio">
                    <h2 className="section-title">Portfolio</h2>

                    <div className="portfolio-container bd-grid">
                        <div className="portfolio-img">
                            <img src="https://i.postimg.cc/c4LgMqgK/work1.jpg" alt="work image" />
                            <div className="portfolio-link">
                                <a href="#" className="portfolio-link-name">View Details</a>
                            </div>
                        </div>

                        <div className="portfolio-img">
                            <img src="https://i.postimg.cc/CxZRXj4S/work2.jpg" alt="work image" />
                            <div className="portfolio-link">
                                <a href="#" className="portfolio-link-name">View Details</a>
                            </div>
                        </div>

                        <div className="portfolio-img">
                            <img src="https://i.postimg.cc/wjS1p7WJ/work3.jpg" alt="work image" />
                            <div className="portfolio-link">
                                <a href="#" className="portfolio-link-name">View Details</a>
                            </div>
                        </div>

                        <div className="portfolio-img">
                            <img src="https://i.postimg.cc/N0m5fBVn/work4.jpg" alt="work image" />
                            <div className="portfolio-link">
                                <a href="#" className="portfolio-link-name">View Details</a>
                            </div>
                        </div>

                        <div className="portfolio-img">
                            <img src="https://i.postimg.cc/vHTTxWkf/work5.jpg" alt="work image" />
                            <div className="portfolio-link">
                                <a href="#" className="portfolio-link-name">View Details</a>
                            </div>
                        </div>

                        <div className="portfolio-img">
                            <img src="https://i.postimg.cc/cHT1rHcF/work6.jpg" alt="work image" />
                            <div className="portfolio-link">
                                <a href="#" className="portfolio-link-name">View Details</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact section" id="contact">
                    <h2 className="section-title">Contact</h2>

                    <div className="contact-container bd-grid">
                        <div className="contact-info">
                            <h3 className="contact-subtitle">EMAIL</h3>
                            <span className="contact-text">info.mail.com</span>

                            <h3 className="contact-subtitle">PHONE</h3>
                            <span className="contact-text">+20 999-999</span>

                            <h3 className="contact-subtitle">ADDRESS</h3>
                            <span className="contact-text">Sacramento, California, USA</span>
                        </div>

                        <form action="" className="contact-form">
                            <div className="contact-inputs">
                                <input type="text" placeholder="Name" className="contact-input" />
                                <input type="email" placeholder="Email" className="contact-input" />
                            </div>

                            <textarea cols="0" rows="10" className="contact-input"></textarea>
                            <input type="submit" value="Send" className="contact-button" />
                        </form>
                    </div>
                </section>
            </main>

            <footer className="footer section">
                <div className="footer-container bd-grid">
                    <div className="footer-data">
                        <h2 className="footer-title">John Doe</h2>
                        <p className="footer-text">I'm John Doe and this is my personal website</p>
                    </div>

                    <div className="footer-data">
                        <h2 className="footer-title">John Doe</h2>
                        <ul>
                            <li><a href="#home" className="footer-link">Home</a></li>
                            <li><a href="#about" className="footer-link">About</a></li>
                            <li><a href="#skills" className="footer-link">Skills</a></li>
                            <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
                            <li><a href="#contact" className="footer-link">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-data">
                        <h2 className="footer-title">FOLLOW</h2>
                        <a href="#" className="footer-social"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="footer-social"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="footer-social"><i className="bx bxl-twitter"></i></a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default PaginaPrincipal;