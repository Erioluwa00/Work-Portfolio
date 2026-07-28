import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { PROFILE, PROJECTS, SERVICES, PROCESS, FAQS } from "../data/portfolioData";
import ProjectPlate from "../components/ProjectPlate";
import ProjectCard from "../components/ProjectCard";
import Marquee from "../components/Marquee";

// Stagger container animation
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Fade up item animation
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Package Detailed Modal Component
function PackageDetailModal({ service, onClose, onInquire }) {
  return (
    <>
      <motion.div
        className="pf-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <div className="pf-modal-container" onClick={onClose}>
        <motion.div
          className="pf-modal-card"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="pf-modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
          <div className="pf-modal-header">
            <span className="pf-modal-eyebrow">Service Package</span>
            <h2 className="pf-modal-title">{service.name}</h2>
            <div className="pf-modal-price">{service.price}</div>
            <p className="pf-modal-desc">{service.description}</p>
          </div>
          <div className="pf-modal-body">
            <h4 className="pf-modal-section-title">What's Included:</h4>
            <ul className="pf-modal-benefits">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="pf-modal-benefit-item">
                  <span className="pf-modal-check">
                    <Check size={14} strokeWidth={3.5} />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pf-modal-footer">
            <button
              onClick={() => onInquire(service.id)}
              className="pf-btn-primary pf-modal-btn"
            >
              Inquire Package Details
            </button>
            <button onClick={onClose} className="pf-btn-outline pf-modal-cancel-btn">
              Back to Packages
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default function Home({ onOpenContact }) {
  const [showAll, setShowAll] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeDetailPackage, setActiveDetailPackage] = useState(null);
  const featured = PROJECTS.slice(0, 5);
  const rest = PROJECTS.slice(5);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Header */}
      <motion.header
        className="pf-hero"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="pf-hero-content">
          <motion.span className="pf-eyebrow" variants={fadeUp}>
            Web Agency Studio · 2026
          </motion.span>
          <motion.h1 className="pf-headline" variants={fadeUp}>
            Websites built to help your business <em>grow</em>.
          </motion.h1>
          <motion.p className="pf-subhead" variants={fadeUp}>
            {PROFILE.tagline}
          </motion.p>
          <motion.div className="pf-hero-actions" variants={fadeUp}>
            <a className="pf-btn-primary" href="#work">
              Explore Projects
            </a>
            <button className="pf-btn-outline" onClick={onOpenContact}>
              Request Free Mockup
            </button>
          </motion.div>
        </div>
        {PROFILE.avatar && (
          <motion.div className="pf-hero-avatar-wrapper" variants={fadeUp}>
            <img src={PROFILE.avatar} alt={PROFILE.name} className="pf-hero-avatar" />
          </motion.div>
        )}
      </motion.header>

      {/* Infinite Monospace Scrolling Marquee */}
      <Marquee />

      {/* Our Process (Roadmap) Section */}
      <section className="pf-process-section" id="process">
        <div className="pf-section-label">
          <span>The Roadmap</span>
          <span>How we work</span>
        </div>
        <div className="pf-process-grid">
          {PROCESS.map((step) => (
            <div key={step.step} className="pf-process-card">
              <span className="pf-process-step">{step.step}</span>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="pf-work" id="work">
        <div className="pf-section-label">
          <span>projects we've worked on</span>
          <span>
            {featured.length} of {PROJECTS.length} shown
          </span>
        </div>
        {featured.map((project, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: isEven ? -60 : 60, y: 15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectPlate project={project} index={i} reverse={!isEven} />
            </motion.div>
          );
        })}
      </section>

      {/* View More Grid */}
      {rest.length > 0 && (
        <section className="pf-more">
          {!showAll ? (
            <button className="pf-viewmore" onClick={() => setShowAll(true)}>
              View all {PROJECTS.length} projects
            </button>
          ) : (
            <div className="pf-grid">
              {rest.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Services & Packages Section */}
      <section className="pf-services-section" id="services">
        <div className="pf-section-label">
          <span>Our Services</span>
          <span>Choose Your Package</span>
        </div>
        <div className="pf-services-grid">
          {SERVICES.map((service) => (
            <div key={service.id} className="pf-service-card">
              <div className="pf-service-header">
                <h3>{service.name}</h3>
                <span className="pf-service-price">{service.price}</span>
              </div>
              <p className="pf-service-desc">{service.description}</p>
              <ul className="pf-service-benefits">
                {service.previewBenefits.map((benefit, index) => (
                  <li key={index}>
                    <span className="pf-check-bullet">✓</span> {benefit}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setActiveDetailPackage(service)} 
                className="pf-btn-ghost pf-service-btn"
              >
                Inquire Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="pf-faq-section" id="faq">
        <div className="pf-section-label">
          <span>Common Doubts</span>
          <span>Frequently Asked Questions</span>
        </div>
        <div className="pf-faq-container">
          {FAQS.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className={`pf-faq-item ${isOpen ? "open" : ""}`}>
                <button
                  className="pf-faq-question"
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                >
                  <h4>{faq.question}</h4>
                  <span className="pf-faq-icon">{isOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="pf-faq-answer">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lead Generation Audit Banner */}
      <section className="pf-audit-banner">
        <div className="pf-audit-card">
          <div className="pf-audit-content">
            <span className="pf-eyebrow" style={{ color: "var(--pf-bg)" }}>Free Design Concept</span>
            <h2>Is Your Website Costing You Customers?</h2>
            <p>
              We will audit your existing website's performance, or sketch a custom homepage layout mockup for your business completely free.
            </p>
          </div>
          <button onClick={onOpenContact} className="pf-audit-btn">
            Request Free Mockup/Audit
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="pf-footer">
        <div>
          <div className="pf-footer-name">{PROFILE.name}</div>
          <div className="pf-footer-tag">Available for new projects</div>
        </div>
        <div className="pf-footer-links">
          <button
            onClick={onOpenContact}
            className="pf-btn-ghost"
          >
            {PROFILE.email}
          </button>
          {PROFILE.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </footer>

      {/* Package Detail Modal Overlay */}
      <AnimatePresence>
        {activeDetailPackage && (
          <PackageDetailModal
            service={activeDetailPackage}
            onClose={() => setActiveDetailPackage(null)}
            onInquire={(id) => {
              setActiveDetailPackage(null);
              onOpenContact(id);
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
