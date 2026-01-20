import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import './App.css';

function App() {
    return (
        <Router basename="/trazeit">
            <div className="app">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
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
