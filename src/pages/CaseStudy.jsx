import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "../data/portfolioData";

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === parseInt(id));
  const [currentSlide, setCurrentSlide] = useState(0);

  // Scroll to top and reset slide index on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentSlide(0);
  }, [id]);

  // Autoplay slider images on a 5-second interval
  useEffect(() => {
    if (project?.detailImages && project.detailImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % project.detailImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, project?.detailImages]);

  if (!project) {
    return (
      <div className="pf-root" style={{ padding: "8vw 6vw", textAlign: "center" }}>
        <h1 className="pf-headline">Project not found.</h1>
        <button onClick={() => navigate("/")} className="pf-btn-primary" style={{ marginTop: "2rem" }}>
          Return Home
        </button>
      </div>
    );
  }

  // Animation variants
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      className="pf-root"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div style={{ padding: "4vw 6vw 0" }}>
        <button onClick={() => navigate("/")} className="pf-cs-back" aria-label="Go back to home page">
          <ArrowLeft size={16} />
          <span>Back to work</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="pf-cs-hero">
        <div className="pf-cs-header">
          <span className="pf-eyebrow">Project No. {String(project.id).padStart(2, "0")}</span>
          <h1 className="pf-headline">{project.name}</h1>
          <p className="pf-subhead" style={{ fontSize: "1.25rem", maxWidth: "60ch" }}>
            {project.tagline}
          </p>

          <div className="pf-cs-meta-grid">
            <div className="pf-cs-meta-item">
              <span>Timeline</span>
              <span>{project.year}</span>
            </div>
            <div className="pf-cs-meta-item">
              <span>Focus / Deliverable</span>
              <span>{project.tags.join(" / ")}</span>
            </div>
            <div className="pf-cs-meta-item">
              <span>Technologies</span>
              <span>{project.stackDetails?.join(", ") || project.tags.join(", ")}</span>
            </div>
            {project.link !== "#" && (
              <div className="pf-cs-meta-item">
                <span>Live Project</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", color: "var(--pf-accent)", borderBottom: "1px solid var(--pf-accent)" }}
                >
                  Visit Site <ExternalLink size={12} />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Hero image with fade-in and slight scale animation */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ overflow: "hidden", borderRadius: 4 }}
        >
          <img src={project.image} alt={project.name} className="pf-cs-image-full" />
        </motion.div>
      </section>

      {/* Overview, Challenge, and Solution Grid */}
      <section className="pf-cs-content">
        <h2 className="pf-cs-content-label">Project Overview</h2>
        <div className="pf-cs-text-block">
          <h3>The Context</h3>
          <p>{project.description}</p>
        </div>

        <h2 className="pf-cs-content-label">The Challenge</h2>
        <div className="pf-cs-text-block">
          <h3>Understanding the Problem</h3>
          <p>{project.challenge}</p>
        </div>

        <h2 className="pf-cs-content-label">The Execution</h2>
        <div className="pf-cs-text-block">
          <h3>Our Custom Solution</h3>
          <p>{project.solution}</p>
        </div>
      </section>

      {/* Secondary Images showcase with Interactive Image Slider */}
      {(project.detailImages && project.detailImages.length > 0) && (
        <section className="pf-cs-images-grid">
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span className="pf-eyebrow" style={{ marginBottom: "1rem" }}>Visual Direction</span>
            <h3 className="pf-cs-text-block" style={{ fontFamily: "Fraunces, serif", fontSize: "1.8rem", fontWeight: 500, margin: "0 0 1rem" }}>
              Considered details, deliberate design.
            </h3>
            <p style={{ color: "var(--pf-text-muted)", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "40ch", margin: 0 }}>
              Every pixel, interaction, and structural element is built to reflect the core identity of the brand, refusing standard layout templates.
            </p>
          </div>
          <div className="pf-slider-container">
            <div className="pf-slider">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={project.detailImages[currentSlide]}
                  alt={`${project.name} detail view ${currentSlide + 1}`}
                  className="pf-slider-img"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                />
              </AnimatePresence>
            </div>
            {project.detailImages.length > 1 && (
              <div className="pf-slider-nav">
                <span className="pf-slider-counter">
                  {String(currentSlide + 1).padStart(2, "0")} / {String(project.detailImages.length).padStart(2, "0")}
                </span>
                <div className="pf-slider-controls">
                  <button
                    className="pf-slider-btn"
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + project.detailImages.length) % project.detailImages.length)}
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    className="pf-slider-btn"
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % project.detailImages.length)}
                    aria-label="Next slide"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="pf-footer" style={{ borderTop: "1px solid var(--pf-line)" }}>
        <div>
          <div className="pf-footer-name">Next Project</div>
          <button
            onClick={() => {
              const nextId = (project.id % PROJECTS.length) + 1;
              navigate(`/project/${nextId}`);
            }}
            className="pf-cs-back"
            style={{ fontSize: "1.4rem", fontFamily: "Fraunces, serif", fontWeight: 500, color: "var(--pf-accent)", margin: "0.5rem 0 0" }}
          >
            {PROJECTS.find((p) => p.id === ((project.id % PROJECTS.length) + 1))?.name || "Next"} →
          </button>
        </div>
        <div className="pf-footer-links" style={{ alignSelf: "flex-end" }}>
          <button onClick={() => navigate("/")} className="pf-btn-ghost" style={{ border: "none", padding: 0 }}>
            Back to Home
          </button>
        </div>
      </footer>
    </motion.div>
  );
}
