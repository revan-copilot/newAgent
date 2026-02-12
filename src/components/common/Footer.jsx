import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/trazeit_logo_white.png';
import facebookIcon from '../../assets/images/facebook.png';
import twitterIcon from '../../assets/images/twitter.png';
import instagramIcon from '../../assets/images/instagram.png';

function Footer() {
    return (
        <footer className="bg-primary-blue p-0 text-white font-sans">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap mb-0">
                    <div className="basis-1/2 max-w-[50%] flex items-center gap-5 pt-20 pr-10 pb-20 pl-0 border-r border-[#224885] box-border">
                        <Link to="/" className="flex items-center h-12 shrink-0">
                            <img src={logoImg} alt="TRAZEIT" className="h-full w-auto object-contain" />
                        </Link>
                        <p className="text-text-light text-sm leading-relaxed mt-1.5">End-to-end food traceability powered by blockchain technology. Built for compliance, designed for growth.</p>
                    </div>

                    <div className="basis-1/2 max-w-[50%] flex gap-[100px] flex-wrap pt-20 pr-0 pb-20 pl-10 box-border">
                        <div className="footer-column">
                            <h5 className="text-white text-xs font-medium uppercase tracking-wider mb-6">services</h5>
                            <ul>
                                <li className="mb-3"><a href="#email-marketing" className="text-[#BECDE4] text-base transition-colors duration-150 hover:text-white">Email Marketing</a></li>
                                <li className="mb-3"><a href="#campaigns" className="text-[#BECDE4] text-base transition-colors duration-150 hover:text-white">Campaigns</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h5 className="text-white text-xs font-medium uppercase tracking-wider mb-6">About</h5>
                            <ul>
                                <li className="mb-3"><a href="#our-story" className="text-[#BECDE4] text-base transition-colors duration-150 hover:text-white">Our Story</a></li>
                                <li className="mb-3"><a href="#benefits" className="text-[#BECDE4] text-base transition-colors duration-150 hover:text-white">Benefits</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h5 className="text-white text-xs font-medium uppercase tracking-wider mb-6">FOLLOW US</h5>
                            <div className="flex gap-4">
                                <a href="#" aria-label="Facebook" className="text-text-light transition-colors duration-150 flex items-center justify-center hover:text-white">
                                    <img src={facebookIcon} alt="Facebook" className="w-5 h-5 object-contain" />
                                </a>
                                <a href="#" aria-label="Twitter" className="text-text-light transition-colors duration-150 flex items-center justify-center hover:text-white">
                                    <img src={twitterIcon} alt="Twitter" className="w-5 h-5 object-contain" />
                                </a>
                                <a href="#" aria-label="Instagram" className="text-text-light transition-colors duration-150 flex items-center justify-center hover:text-white">
                                    <img src={instagramIcon} alt="Instagram" className="w-5 h-5 object-contain" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#224885] py-8 text-center">
                <div className="container mx-auto px-6">
                    <p className="text-text-gray text-sm">Copyright © 2026. <i>TrazeIT</i>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
