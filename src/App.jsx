import { BrowserRouter, Routes, Route } from "react-router-dom";
import Download from "./assets/Component/download";
import Footer from "./assets/Component/Footer";
import Navbar from "./assets/Component/Navbar";
import Reports from "./assets/Component/report";
import Loader from "./assets/Component/loader";
import Login from "./assets/Component/Login";
import Register from "./assets/Component/Register";
import Home from "./assets/Component/Home";
import Checkout from "./assets/Component/Checkout";
import Records from "./assets/Component/Records";
import Listing from "./assets/Component/Listing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/report" element={<Reports />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/records" element={<Records />} />
          <Route path="/listing" element={<Listing />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
