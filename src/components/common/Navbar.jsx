import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/images/trazeit_logo_white.png';
import logoBlue from '../../assets/images/trazeit-logo-blue.png';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
    }, [location.pathname]);

    // Toggle dropdown on mobile
    const handleDropdownClick = (dropdownName) => {
        // Toggle only if in mobile view (or force toggle for logic consistency)
        // Original logic: if (mobileMenuOpen) ...
        // We will stick to that to avoid messing with desktop hover
        if (mobileMenuOpen) {
            setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
        }
    };

    // Determine navbar style based on route and scroll
    // Home: Transparent top, Dark when scrolled
    // About, Platform Overview, & Solutions: Always White background (Light mode)
    const isLightMode = location.pathname === '/about' || location.pathname === '/trace' || location.pathname.startsWith('/solutions') || location.pathname.startsWith('/compliance-hub');

    // Navbar container classes
    const navbarClasses = `
        fixed top-0 left-0 right-0 z-[1000] py-5 transition-all duration-250
        ${isLightMode
            ? 'bg-white shadow-sm'
            : scrolled
                ? 'bg-[rgba(15,23,42,0.95)] backdrop-blur-[10px] shadow-md'
                : 'bg-transparent'
        }
        ${mobileMenuOpen ? '' : ''} 
    `;
    // Note: mobileMenuOpen logic handled in menu container, not navbar itself (App.css didn't change navbar bg on mobile-open directly)

    // Logo Logic
    const currentLogo = isLightMode || mobileMenuOpen ? logoBlue : (scrolled ? logoImg : logoImg);
    // Original CSS: .navbar.scrolled .navbar-logo { color: var(--text-white); }
    // But image src logic was: src={isLightMode ? logoBlue : logoImg}
    // Wait, original JS: src={isLightMode ? logoBlue : logoImg}
    // It did NOT switch to blue on mobileMenuOpen explicitly in JS.
    // However, if mobile menu is white, white logo is invisible.
    // I will assume logic: if mobile menu open, logic should ideally be blue if background is white.
    // But adhering to "without affecting existing design" -> stick to original behavior unless broken.
    // Original behavior: Mobile menu covers screen. Navbar stays on top.
    // If on Home (Dark), Scrolled=false -> Logo White.
    // Mobile Menu Open -> Background White.
    // White Logo on White Background?
    // Let's check original CSS: .navbar-light .first-child ... no.
    // But wait, .navbar-mobile-toggle turns dark on .navbar-light.
    // If I open menu on Home, does the hamburger turn dark?
    // .navbar-mobile-toggle span { bg: white } (default)
    // .navbar-light ... { bg: dark }
    // If mobileMenuOpen adds a class? No.
    // So on Home, user sees White Logo/Hamburger on White Menu Background??
    // That seems like a bug in original, or I missed something.
    // Ah, `z-index`. .navbar-nav (mobile) has z-index 999. .navbar has 1000.
    // So Navbar is ON TOP.
    // The top 68px of mobile menu is transparent or padded?
    // `.navbar-nav { top: 68px; ... }`
    // So the menu starts BELOW the navbar.
    // So the logo is on the original header background (Hero image).
    // So White Logo on Hero Image is VISIBLE.
    // OK, logic holds. I won't change logo logic.

    const logoSrc = isLightMode ? logoBlue : logoImg;

    // Link Styles Helper
    const getLinkClass = (path, isDropdownToggle = false) => {
        const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
        const activeClass = isActive ? (isLightMode ? 'text-primary-blue opacity-100' : 'opacity-100') : '';

        // Mobile styles (base)
        const mobile = `flex justify-between items-center w-full p-4 px-6 text-lg font-medium text-dark-bg border-b border-black/5 text-left`;

        // Desktop styles (lg)
        const desktop = `lg:flex lg:justify-start lg:w-auto lg:p-0 lg:border-none lg:text-base lg:bg-transparent ${isLightMode
            ? 'lg:font-medium lg:text-text-dark lg:hover:text-primary-blue'
            : 'lg:font-normal lg:text-white lg:opacity-90 lg:hover:opacity-100'
            }`;

        return `${mobile} ${desktop} ${activeClass} font-sans transition-all duration-150`;
    };

    // Dropdown Item Styles
    const dropdownItemClass = "block w-full py-3.5 px-6 lg:py-3 lg:px-6 text-base font-medium text-slate-600 lg:text-text-dark hover:text-dark-bg lg:hover:text-primary-blue hover:bg-black/5 lg:hover:bg-light-bg transition-colors duration-200 text-left whitespace-nowrap lg:border-none border-b border-black/5 lg:border-0";
    // Adjusted mobile padding/color to match trace

    return (
        <nav className={navbarClasses}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center h-12 shrink-0 z-[1001]">
                    <img src={logoSrc} alt="TRAZEIT" className="h-full w-auto object-contain" />
                </Link>

                {/* Navbar Nav */}
                <div className={`
                    fixed inset-0 top-[68px] z-[999] flex flex-col bg-white overflow-y-auto transition-all duration-300
                    ${mobileMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full lg:translate-x-0 lg:visible lg:opacity-100'}
                    lg:static lg:bg-transparent lg:flex-row lg:items-center lg:gap-8 lg:overflow-visible lg:inset-auto lg:h-auto lg:transform-none
                    lg:flex-1 lg:justify-center
                `}>
                    <Link to="/" className={getLinkClass('/')}>Home</Link>

                    <Link to="/trace" className={getLinkClass('/trace')}>Trace</Link>

                    {/* Solutions Dropdown */}
                    <div className={`group relative flex flex-col lg:flex-row lg:items-center lg:h-full w-full lg:w-auto ${openDropdown === 'solutions' ? 'bg-black/5 lg:bg-transparent' : ''}`}>
                        <span
                            className={`${getLinkClass('/solutions', true)} cursor-pointer`}
                            onClick={() => handleDropdownClick('solutions')}
                        >
                            Solutions
                            {/* Arrow */}
                            <span className={`transform transition-transform duration-200 text-slate-500 lg:ml-1.5 lg:border-t-4 lg:border-l-4 lg:border-r-4 lg:border-l-transparent lg:border-r-transparent lg:border-t-current lg:w-0 lg:h-0 lg:border-b-0
                                ${mobileMenuOpen ? 'text-2xl font-light no-border' : ''}
                                lg:group-hover:rotate-180
                            `}>
                                {mobileMenuOpen ? (openDropdown === 'solutions' ? '−' : '+') : ''}
                            </span>
                        </span>

                        <div className={`
                            lg:absolute lg:top-full lg:left-0 lg:bg-white lg:min-w-[260px] lg:shadow-[0_10px_30px_rgba(0,0,0,0.1)] lg:rounded-lg lg:py-3 lg:z-[1000]
                            lg:opacity-0 lg:invisible lg:translate-y-2 lg:transition-all lg:duration-200 
                            lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0
                            
                            bg-slate-100 w-full overflow-hidden transition-[max-height,opacity] duration-300 ease-out
                            ${openDropdown === 'solutions' ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible lg:max-h-none lg:opacity-100 lg:visible'}
                            ${/* On desktop, controlled by group-hover via base classes above. On mobile, controlled by class here? No, 'lg:' overrides. */ ''}
                        `}>
                            <Link to="/solutions/farm-to-fork" className={dropdownItemClass}>Farm-to-Fork Traceability</Link>
                            <Link to="/solutions/food-safety" className={dropdownItemClass}>Food Safety</Link>
                            <Link to="/solutions/regulatory-compliance" className={dropdownItemClass}>Regulatory Compliance</Link>
                            <Link to="/solutions/brand-transparency" className={dropdownItemClass}>Brand Transparency</Link>
                            <Link to="/solutions/supply-chain" className={dropdownItemClass}>Supply Chain</Link>
                        </div>
                    </div>

                    {/* Industries Dropdown */}
                    <div className={`group relative flex flex-col lg:flex-row lg:items-center lg:h-full w-full lg:w-auto ${openDropdown === 'industries' ? 'bg-black/5 lg:bg-transparent' : ''}`}>
                        <span
                            className={`${getLinkClass('/industries', true)} cursor-pointer`}
                            onClick={() => handleDropdownClick('industries')}
                        >
                            Industries
                            <span className={`transform transition-transform duration-200 text-slate-500 lg:ml-1.5 lg:border-t-4 lg:border-l-4 lg:border-r-4 lg:border-l-transparent lg:border-r-transparent lg:border-t-current lg:w-0 lg:h-0 lg:border-b-0
                                ${mobileMenuOpen ? 'text-2xl font-light no-border' : ''}
                                lg:group-hover:rotate-180
                            `}>
                                {mobileMenuOpen ? (openDropdown === 'industries' ? '−' : '+') : ''}
                            </span>
                        </span>

                        <div className={`
                            lg:absolute lg:top-full lg:left-0 lg:bg-white lg:min-w-[260px] lg:shadow-[0_10px_30px_rgba(0,0,0,0.1)] lg:rounded-lg lg:py-3 lg:z-[1000]
                            lg:opacity-0 lg:invisible lg:translate-y-2 lg:transition-all lg:duration-200 
                            lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0
                            
                            bg-slate-100 w-full overflow-hidden transition-[max-height,opacity] duration-300 ease-out
                            ${openDropdown === 'industries' ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible lg:max-h-none lg:opacity-100 lg:visible'}
                        `}>
                            <Link to="/industries/for-manufacturers" className={dropdownItemClass}>For Manufacturers</Link>
                            <Link to="/industries/for-exporters" className={dropdownItemClass}>For Exporters</Link>
                            <Link to="/industries/for-retailers" className={dropdownItemClass}>For Retailers</Link>
                        </div>
                    </div>

                    {/* Compliance Hub Dropdown */}
                    <div className={`group relative flex flex-col lg:flex-row lg:items-center lg:h-full w-full lg:w-auto ${openDropdown === 'compliance' ? 'bg-black/5 lg:bg-transparent' : ''}`}>
                        <span
                            className={`${getLinkClass('/compliance-hub', true)} cursor-pointer`}
                            onClick={() => handleDropdownClick('compliance')}
                        >
                            Compliance Hub
                            <span className={`transform transition-transform duration-200 text-slate-500 lg:ml-1.5 lg:border-t-4 lg:border-l-4 lg:border-r-4 lg:border-l-transparent lg:border-r-transparent lg:border-t-current lg:w-0 lg:h-0 lg:border-b-0
                                ${mobileMenuOpen ? 'text-2xl font-light no-border' : ''}
                                lg:group-hover:rotate-180
                            `}>
                                {mobileMenuOpen ? (openDropdown === 'compliance' ? '−' : '+') : ''}
                            </span>
                        </span>

                        <div className={`
                            lg:absolute lg:top-full lg:left-0 lg:bg-white lg:min-w-[260px] lg:shadow-[0_10px_30px_rgba(0,0,0,0.1)] lg:rounded-lg lg:py-3 lg:z-[1000]
                            lg:opacity-0 lg:invisible lg:translate-y-2 lg:transition-all lg:duration-200 
                            lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0
                            
                            bg-slate-100 w-full overflow-hidden transition-[max-height,opacity] duration-300 ease-out
                            ${openDropdown === 'compliance' ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible lg:max-h-none lg:opacity-100 lg:visible'}
                        `}>
                            <Link to="/compliance-hub" className={dropdownItemClass}>Compliance Hub</Link>
                            <Link to="/compliance-hub/iso-22005" className={dropdownItemClass}>ISO 22005</Link>
                            <Link to="/compliance-hub/fsma-204" className={dropdownItemClass}>FSMA 204</Link>
                            <Link to="/compliance-hub/gs1-standards" className={dropdownItemClass}>GS1 Standards</Link>
                            <Link to="/compliance-hub/eudr" className={dropdownItemClass}>EUDR Compliance</Link>
                            <Link to="/compliance-hub/checklist" className={dropdownItemClass}>Compliance Checklist</Link>
                        </div>
                    </div>

                    <Link to="/about" className={getLinkClass('/about')}>About us</Link>
                    <a href={isHome ? "#contact" : "/#contact"} className={getLinkClass('#contact')}>Contact us</a>

                    {/* Mobile Sign In */}
                    <div className="mt-auto p-6 w-full lg:hidden">
                        <button className={`w-full py-3.5 text-base font-semibold text-white rounded-lg text-center ${isLightMode ? 'bg-dark-bg' : 'bg-primary-blue'}`}>Sign in</button>
                    </div>
                </div>

                {/* Actions (Desktop) */}
                <div className="hidden lg:flex items-center gap-6 z-[1001]">
                    <button className={`px-3 py-2 text-base font-medium rounded-sm transition-colors duration-150 ${isLightMode
                        ? 'bg-text-dark text-white hover:bg-dark-bg-lighter'
                        : 'bg-white text-dark-bg hover:bg-gray-100'
                        }`}>Sign in</button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`flex flex-col gap-1.5 p-1.5 lg:hidden z-[1001]`}
                    aria-label="Toggle menu"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className={`block w-6 h-0.5 transition-all duration-150 ${isLightMode ? 'bg-text-dark' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`}></span>
                    <span className={`block w-6 h-0.5 transition-all duration-150 ${isLightMode ? 'bg-text-dark' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 transition-all duration-150 ${isLightMode ? 'bg-text-dark' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''}`}></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
