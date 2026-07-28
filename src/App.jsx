import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import Navbar from "./components/Navbar";
import ContactDrawer from "./components/ContactDrawer";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactInquiryType, setContactInquiryType] = useState("general");
  const location = useLocation();

  const handleOpenContact = (inquiryType = "general") => {
    setContactInquiryType(inquiryType);
    setIsContactOpen(true);
  };

  return (
    <div className="pf-root">
      {/* Global Navigation Bar */}
      <Navbar onOpenContact={() => handleOpenContact("general")} />

      {/* Dynamic Background Grid and Ambient Glows */}
      <div className="pf-bg-grid" />
      <div className="pf-bg-glows">
        <div className="pf-glow-blob pf-glow-1" />
        <div className="pf-glow-blob pf-glow-2" />
        <div className="pf-glow-blob pf-glow-3" />
      </div>

      {/* Route Navigation with wait transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home onOpenContact={handleOpenContact} />} />
          <Route path="/project/:id" element={<CaseStudy />} />
        </Routes>
      </AnimatePresence>

      {/* Animated Sliding Contact Form Drawer */}
      <AnimatePresence>
        {isContactOpen && (
          <ContactDrawer 
            isOpen={isContactOpen} 
            onClose={() => setIsContactOpen(false)} 
            initialInquiryType={contactInquiryType}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
