import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Pages (NEW)
import Taxi from "./pages/Taxi";
import Bus from "./pages/Bus";
import Travels from "./pages/Travels";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Packages />
                <Contact />
              </>
            }
          />

          {/* Extra Pages */}
          <Route path="/taxi" element={<Taxi />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/travels" element={<Travels />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
