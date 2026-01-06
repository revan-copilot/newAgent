import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import WhyReplace from '../components/home/WhyReplace';
import ProcessSteps from '../components/home/ProcessSteps';
import Industries from '../components/home/Industries';
import CaseStudy from '../components/home/CaseStudy';
import FAQ from '../components/home/FAQ';

function Home() {
    return (
        <>
            <Hero />
            <TrustBar />
            <WhyReplace />
            <ProcessSteps />
            <Industries />
            <CaseStudy />
            <FAQ />
        </>
    );
}

export default Home;
