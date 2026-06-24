import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import CountryDetails from "./pages/CountryDetails";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Countries List Page */}
        <Route path="/countries" element={<Countries />} />

        {/* Country Details Page */}
        <Route path="/country/:id" element={<CountryDetails />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;