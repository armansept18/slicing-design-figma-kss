import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/beranda";
import { PeluangBisnis } from "./pages/peluang-bisnis";
import { ProductPage } from "./pages/produk";
import { TentangKami } from "./pages/tentangKami";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/peluang-bisnis" element={<PeluangBisnis />} />
        <Route path="/produk" element={<ProductPage />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
