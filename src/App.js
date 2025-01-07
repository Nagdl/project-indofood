import { Routes, Route } from "react-router-dom";
import Home from "../src/components/Pages/Home";
import Product from "../src/components/Pages/Product";
import ReachUs from "../src/components/Pages/ReachUs";
import Career from "../src/components/Pages/Career";
import AboutUs from "../src/components/Pages/AboutUs";

export default function App() {
  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ReachUs" element={<ReachUs />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
