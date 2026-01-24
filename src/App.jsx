import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Trace from './pages/Trace';
import FarmToFork from './pages/solutions/FarmToFork';
import RegulatoryCompliance from './pages/solutions/RegulatoryCompliance';
import BrandTransparency from './pages/solutions/BrandTransparency';
import FoodSafety from './pages/solutions/FoodSafety';
import ForManufacturers from './pages/industries/ForManufacturers';
import ForExporters from './pages/industries/ForExporters';
import ForRetailers from './pages/industries/ForRetailers';
import SupplyChain from './pages/solutions/SupplyChain';
import './App.css';

function App() {
    return (
        <Router basename="/trazeit">
            <div className="app">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/trace" element={<Trace />} />
                        <Route path="/solutions/farm-to-fork" element={<FarmToFork />} />
                        <Route path="/solutions/regulatory-compliance" element={<RegulatoryCompliance />} />
                        <Route path="/solutions/brand-transparency" element={<BrandTransparency />} />
                        <Route path="/solutions/food-safety" element={<FoodSafety />} />
                        <Route path="/industries/for-manufacturers" element={<ForManufacturers />} />
                        <Route path="/industries/for-exporters" element={<ForExporters />} />
                        <Route path="/industries/for-retailers" element={<ForRetailers />} />
                        <Route path="/solutions/supply-chain" element={<SupplyChain />} />
                        {/* Future pages can be added here */}
                        <Route path="/about" element={<AboutUs />} />
                        {/* <Route path="/contact" element={<Contact />} /> */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
