import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/trazeit_logo_white.png';
import facebookIcon from '../../assets/images/facebook.png';
import twitterIcon from '../../assets/images/twitter.png';
import instagramIcon from '../../assets/images/instagram.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-main">
                    <div className="footer-brand-section">
                        <Link to="/" className="navbar-logo">
                            <img src={logoImg} alt="TRAZEIT" className="logo-image" />
                        </Link>
                        <p>End-to-end food traceability powered by blockchain technology. Built for compliance, designed for growth.</p>
                    </div>

                    <div className="footer-links-section">
                        <div className="footer-column">
                            <h5>services</h5>
                            <ul>
                                <li><a href="#email-marketing">Email Marketing</a></li>
                                <li><a href="#campaigns">Campaigns</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h5>About</h5>
                            <ul>
                                <li><a href="#our-story">Our Story</a></li>
                                <li><a href="#benefits">Benefits</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h5>FOLLOW US</h5>
                            <div className="footer-social">
                                <a href="#" aria-label="Facebook">
                                    <img src={facebookIcon} alt="Facebook" />
                                </a>
                                <a href="#" aria-label="Twitter">
                                    <img src={twitterIcon} alt="Twitter" />
                                </a>
                                <a href="#" aria-label="Instagram">
                                    <img src={instagramIcon} alt="Instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p className="footer-copyright">Copyright © 2026. <i>TrazeIT</i>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
