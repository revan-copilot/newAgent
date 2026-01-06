import isoLogo from '../../assets/images/logo_iso22000.png';
import gs1Logo from '../../assets/images/logo_gs1.png';
import euLogo from '../../assets/images/logo_eu_dr.png';
import fsmaLogo from '../../assets/images/logo_fsma204.png';

function TrustBar() {
    return (
        <section className="trust-bar">
            <div className="container">
                <div className="trust-bar-header">
                    <h2>Trusted by 50+ manufacturers across 12 countries</h2>
                    <p className="trust-main-subtext">Proven reliability powering global food traceability and compliance</p>
                </div>
                <div className="trust-bar-logos">
                    <img src={isoLogo} alt="ISO 22000" className="trust-logo-img" />
                    <img src={gs1Logo} alt="GS1" className="trust-logo-img" />
                    <img src={euLogo} alt="EU DR" className="trust-logo-img" />
                    <img src={fsmaLogo} alt="FSMA 204" className="trust-logo-img" />
                </div>
            </div>
        </section>
    );
}

export default TrustBar;
