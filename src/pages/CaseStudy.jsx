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

  // Combine main image and any detail images, ensuring uniqueness while preserving order
  const sliderImages = project
    ? [
        ...new Set(
          [
            project.image,
            ...(project.detailImages || []),
            ...(project.detailImage ? [project.detailImage] : []),
          ].filter(Boolean)
        ),
      ]
    : [];

  // Scroll to top and reset slide index on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentSlide(0);
  }, [id]);

  // Autoplay slider images on a 5-second interval
  useEffect(() => {
    if (sliderImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, sliderImages.length]);

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
      <div style={{ padding: "90px 6vw 0" }}>
        <button
          onClick={() => navigate(`/#project-${project.id}`)}
          className="pf-cs-back"
          aria-label="Go back to home page"
        >
          <ArrowLeft size={16} />
          <span>Back to work</span>
        </button>
      </div>

      {/* Section 1: Hero Header & Image Slider */}
      <section className="pf-cs-hero" style={{ paddingTop: "2.5rem" }}>
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

        {/* Top Image Slider */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pf-slider-container"
        >
          <div className="pf-slider" style={{ aspectRatio: "16 / 9" }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={sliderImages[currentSlide]}
                alt={`${project.name} slide ${currentSlide + 1}`}
                className="pf-slider-img"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>
          </div>
          {sliderImages.length > 1 && (
            <div className="pf-slider-nav">
              <span className="pf-slider-counter">
                {String(currentSlide + 1).padStart(2, "0")} / {String(sliderImages.length).padStart(2, "0")}
              </span>
              <div className="pf-slider-controls">
                <button
                  className="pf-slider-btn"
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)}
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  className="pf-slider-btn"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)}
                  aria-label="Next slide"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* Section 2: Project Story and Details */}
      <section className="pf-cs-content" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4vw" }}>
        {/* Left Column: About the Project */}
        <div>
          <span className="pf-eyebrow">Overview</span>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "2rem", fontWeight: 500, margin: "0.5rem 0 1rem", color: "var(--pf-text)" }}>
            What is {project.name}?
          </h2>
          <p style={{ color: "var(--pf-text-muted)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
            {project.description}
          </p>
        </div>

        {/* Right Column: Goal & Solution */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 600, margin: "0 0 0.5rem", fontFamily: "Fraunces, serif", color: "var(--pf-text)" }}>
              The Business Goal
            </h3>
            <p style={{ color: "var(--pf-text-muted)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
              {project.challenge}
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 600, margin: "0 0 0.5rem", fontFamily: "Fraunces, serif", color: "var(--pf-text)" }}>
              Our Solution & Results
            </h3>
            <p style={{ color: "var(--pf-text-muted)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Live Project CTA Banner */}
      {project.link !== "#" && (
        <section style={{ padding: "0 6vw 4rem", marginTop: "2rem" }}>
          <div
            style={{
              background: "var(--pf-text)",
              color: "#f9f8f6",
              borderRadius: "6px",
              padding: "3rem 2.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "2rem",
              border: "1px solid rgba(160, 122, 70, 0.25)",
            }}
          >
            <div>
              <span className="pf-eyebrow" style={{ color: "var(--pf-accent)", marginBottom: "0.5rem", display: "block" }}>
                Ready to explore?
              </span>
              <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "1.8rem", fontWeight: 500, margin: 0 }}>
                See {project.name} in action
              </h2>
              <p style={{ color: "rgba(249, 248, 246, 0.75)", fontSize: "0.95rem", margin: "0.5rem 0 0" }}>
                Experience the live, interactive website we built for this client.
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="pf-btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1.1rem 2rem",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                textDecoration: "none",
              }}
            >
              Visit Live Site <ExternalLink size={14} />
            </a>
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
          <button onClick={() => navigate(`/#project-${project.id}`)} className="pf-btn-ghost" style={{ border: "none", padding: 0 }}>
            Back to Home
          </button>
        </div>
      </footer>
    </motion.div>
  );
}
