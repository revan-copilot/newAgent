import foodImg from '../../assets/images/industry_food.png';
import produceImg from '../../assets/images/industry_produce.png';
import meatImg from '../../assets/images/industry_meat.png';
import retailImg from '../../assets/images/industry_retail.png';

function Industries() {
    const industries = [
        {
            title: 'Food & Beverage Manufacturers',
            description: 'Production transparency, batch compliance, FSSAI certification',
            image: foodImg,
            colorClass: 'industry-blue'
        },
        {
            title: 'Fresh Produce Exporters',
            description: 'EUDR geolocation, phytosanitary certificates, cold chain monitoring',
            colorClass: 'industry-light',
            image: produceImg
        },
        {
            title: 'Meat, Poultry & Seafood',
            description: 'Supplier audits, cold chain integrity, rapid recall execution',
            colorClass: 'industry-light',
            image: meatImg
        },
        {
            title: 'Retailers & Private Labels',
            description: 'Supplier verification, consumer QR transparency, shelf-level tracking',
            colorClass: 'industry-light',
            image: retailImg
        }
    ];

    return (
        <section id="industries" className="industries">
            <div className="container">
                <div className="industries-header">
                    <span className="section-title-label">Industries</span>
                    <h2>Purpose-Built for Your Industry</h2>
                    <p>
                        Trazeit makes end-to-end traceability easy to deploy and effortless to scale. Our streamlined four-step process ensures rapid adoption without disrupting your existing operations.
                    </p>
                </div>
                <div className="industries-grid">
                    {industries.map((industry, index) => (
                        <div key={index} className="industry-card">
                            <h4>{industry.title}</h4>
                            <div className="industry-card-image">
                                <img src={industry.image} alt={industry.title} />
                            </div>
                            <p>{industry.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Industries;
