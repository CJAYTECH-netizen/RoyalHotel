import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./scenes/navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Booking from "./pages/booking/booking";
import Our_Menu from "./pages/our_Menu/our_Menu";
import About_us from "./pages/about_us/About_us";
import Customer from "./pages/customer/Customer";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/ourmenu" element={<Our_Menu />} />
          <Route path="/aboutus" element={<About_us />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
