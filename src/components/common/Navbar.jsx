import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/images/trazeit_logo_white.png';

import logoBlue from '../../assets/images/trazeit-logo-blue.png';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine navbar style based on route and scroll
    // Home: Transparent top, Dark when scrolled
    // About: Always White background (Light mode)
    const isLightMode = location.pathname === '/about';

    const navbarClass = `navbar ${isLightMode
        ? 'navbar-light'
        : scrolled
            ? 'scrolled'
            : ''
        }`;

    return (
        <nav className={navbarClass}>
            <div className="container">
                <Link to="/" className="navbar-logo">
                    <img src={isLightMode ? logoBlue : logoImg} alt="TRAZEIT" className="logo-image" />
                </Link>

                <div className="navbar-nav">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <a href={isHome ? "#trace" : "/#trace"} className="nav-link">Trace</a>
                    <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About us</Link>
                    <a href={isHome ? "#contact" : "/#contact"} className="nav-link">Contact us</a>
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
