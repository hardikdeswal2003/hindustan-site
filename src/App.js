import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// Use the cleaned Home component while Home.js is being repaired
import Home from "./pages/HomeClean";
import Products from "./pages/Products";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import SearchResults from "./pages/SearchResults";
import Brands from "./pages/Brands";
import Solar from "./pages/Solar";
import BrandProducts from "./pages/BrandProducts";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:brandName" element={<BrandProducts />} />
  <Route path="/solar" element={<Solar />} />
      </Routes>
    </Router>
  );
}

export default App;