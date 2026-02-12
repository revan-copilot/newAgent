import isoLogo from '../../assets/images/logo_iso22000.png';
import gs1Logo from '../../assets/images/logo_gs1.png';
import euLogo from '../../assets/images/logo_eu_dr.png';
import fsmaLogo from '../../assets/images/logo_fsma204.png';

function TrustBar() {
    return (
        <section className="py-20 bg-[#E6EEF5] text-center border-b-0">
            <div className="container">
                <div className="mb-12">
                    <h2 className="text-4xl font-semibold text-[#0E1624] mb-3">Trusted by 50+ manufacturers across 12 countries</h2>
                    <p className="text-[#475569] text-2xl">Proven reliability powering global food traceability and compliance</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-12">
                    <img src={isoLogo} alt="ISO 22000" className="opacity-80 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 max-h-12 w-auto" />
                    <img src={gs1Logo} alt="GS1" className="opacity-80 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 max-h-12 w-auto" />
                    <img src={euLogo} alt="EU DR" className="opacity-80 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 max-h-12 w-auto" />
                    <img src={fsmaLogo} alt="FSMA 204" className="opacity-80 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 max-h-12 w-auto" />
                </div>
            </div>
        </section>
    );
}

export default TrustBar;
