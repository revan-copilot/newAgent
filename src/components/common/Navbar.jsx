import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/trazeit_logo_white.png';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link to="/" className="navbar-logo">
                    <img src={logoImg} alt="TRAZEIT" className="logo-image" />
                </Link>

                <div className="navbar-nav">
                    <Link to="/" className="nav-link active">Home</Link>
                    <a href="#trace" className="nav-link">Trace</a>
                    <a href="#about" className="nav-link">About us</a>
                    <a href="#contact" className="nav-link">Contact us</a>
                </div>

                <div className="navbar-actions">
                    <button className="btn btn-signin">Sign in</button>
                </div>

                <button className="navbar-mobile-toggle" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
