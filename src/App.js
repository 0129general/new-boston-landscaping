// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceLandscaping from "./pages/ServiceLandscaping";
import ServiceMasonry from "./pages/ServiceMasonry";
import ServiceSeasonal from "./pages/ServiceSeasonal";
// import ServiceFences from "./pages/ServiceFences";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services_landscaping" element={<ServiceLandscaping />} />
        <Route path="/services_masonry" element={<ServiceMasonry />} />
        <Route path="/services_seasonal" element={<ServiceSeasonal />} />
        {/* <Route path="/service_fences" element={<ServiceFences />} />  */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
