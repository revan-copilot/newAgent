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
    // About, Platform Overview, & Solutions: Always White background (Light mode)
    const isLightMode = location.pathname === '/about' || location.pathname === '/trace' || location.pathname.startsWith('/solutions');

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

                    <Link to="/trace" className={`nav-link ${location.pathname === '/trace' ? 'active' : ''}`}>Trace</Link>

                    <div className="dropdown">
                        <span className={`nav-link dropdown-toggle ${location.pathname.includes('/solutions') ? 'active' : ''}`}>Solutions</span>
                        <div className="dropdown-menu">
                            <Link to="/solutions/farm-to-fork" className="dropdown-item">Farm-to-Fork Traceability</Link>
                            <Link to="/solutions/food-safety" className="dropdown-item">Food Safety</Link>
                            <Link to="/solutions/regulatory-compliance" className="dropdown-item">Regulatory Compliance</Link>
                            <Link to="/solutions/brand-transparency" className="dropdown-item">Brand Transparency</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <span className={`nav-link dropdown-toggle ${location.pathname.includes('/industries') ? 'active' : ''}`}>Industries</span>
                        <div className="dropdown-menu">
                            <Link to="/industries/for-manufacturers" className="dropdown-item">For Manufacturers</Link>
                            <Link to="/industries/for-exporters" className="dropdown-item">For Exporters</Link>
                            <Link to="/industries/for-retailers" className="dropdown-item">For Retailers</Link>
                        </div>
                    </div>

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
