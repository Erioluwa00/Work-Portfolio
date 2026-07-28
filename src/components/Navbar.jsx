import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onOpenContact }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("nav-menu-open");
    } else {
      document.body.classList.remove("nav-menu-open");
    }
    return () => document.body.classList.remove("nav-menu-open");
  }, [isMenuOpen]);

  const handleScrollTo = (id) => (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav className="pf-nav">
        <div className="pf-nav-container">
          {/* Logo/Name */}
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="pf-nav-logo">
            Amole Erioluwa
          </Link>

          {/* Navigation Actions (Desktop Only) */}
          <div className="pf-nav-right pf-desktop-nav">
            {/* Status Badge */}
            <div className="pf-nav-status">
              <span className="pf-nav-status-dot"></span>
              <span className="pf-nav-status-text">Available for projects</span>
            </div>

            {/* Links */}
            <div className="pf-nav-links">
              <Link to="/#services" onClick={handleScrollTo("services")} className="pf-nav-link">
                Services
              </Link>
              <Link to="/#work" onClick={handleScrollTo("work")} className="pf-nav-link">
                Projects
              </Link>
              <Link to="/#process" onClick={handleScrollTo("process")} className="pf-nav-link">
                Process
              </Link>
              <Link to="/#faq" onClick={handleScrollTo("faq")} className="pf-nav-link">
                FAQ
              </Link>
              <button onClick={onOpenContact} className="pf-nav-link pf-nav-btn">
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="pf-nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile navigation menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="pf-nav-mobile-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pf-nav-mobile-links">
              <Link
                to="/#services"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  handleScrollTo("services")(e);
                }}
                className="pf-nav-mobile-link"
              >
                Services
              </Link>
              <Link
                to="/#work"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  handleScrollTo("work")(e);
                }}
                className="pf-nav-mobile-link"
              >
                Projects
              </Link>
              <Link
                to="/#process"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  handleScrollTo("process")(e);
                }}
                className="pf-nav-mobile-link"
              >
                Process
              </Link>
              <Link
                to="/#faq"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  handleScrollTo("faq")(e);
                }}
                className="pf-nav-mobile-link"
              >
                FAQ
              </Link>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenContact();
                }}
                className="pf-btn-primary pf-nav-mobile-btn"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
