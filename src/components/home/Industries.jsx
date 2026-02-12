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
        <section id="industries" className="py-24 bg-white">
            <div className="container">
                <div className="text-center max-w-[900px] mx-auto mb-16">
                    <span className="block mb-4 text-[#1E4D8C] font-semibold text-base">Industries</span>
                    <h2 className="text-[#0f172a] mb-6 text-[2.25rem] font-bold">Purpose-Built for Your Industry</h2>
                    <p className="text-[#475569] text-base leading-relaxed">
                        Trazeit makes end-to-end traceability easy to deploy and effortless to scale. Our streamlined four-step process ensures rapid adoption without disrupting your existing operations.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((industry, index) => (
                        <div key={index} className="group bg-[#F8FAFC] rounded-lg py-8 px-5 text-center transition-all duration-300 hover:bg-[#1E3A8A] hover:-translate-y-1 hover:shadow-lg flex flex-col items-center">
                            <h4 className="text-[#1e293b] text-xl mb-2 font-semibold min-h-[3.5rem] flex items-center justify-center transition-colors duration-200 group-hover:text-white">{industry.title}</h4>
                            <div className="w-[120px] h-[120px] my-5 flex items-center justify-center">
                                <img src={industry.image} alt={industry.title} className="max-w-full max-h-full object-contain drop-shadow" />
                            </div>
                            <p className="text-[#64748b] text-[15px] leading-6 transition-colors duration-200 group-hover:text-white">{industry.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Industries;
