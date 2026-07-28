import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function ContactDrawer({ isOpen, onClose, initialInquiryType = "general" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    inquiryType: "general",
    businessName: "",
    businessIndustry: "",
    currentWebsite: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success"
  const [submittedInquiryType, setSubmittedInquiryType] = useState("general");

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("drawer-open");
      if (initialInquiryType) {
        setFormData((prev) => ({ ...prev, inquiryType: initialInquiryType }));
      }
    } else {
      document.body.classList.remove("drawer-open");
    }
    return () => document.body.classList.remove("drawer-open");
  }, [isOpen, initialInquiryType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    if (formData.inquiryType !== "general" && (!formData.businessName || !formData.businessIndustry)) return;

    setStatus("submitting");
    setSubmittedInquiryType(formData.inquiryType);
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
        inquiryType: "general",
        businessName: "",
        businessIndustry: "",
        currentWebsite: "",
      });
    }, 1500);
  };

  const resetForm = () => {
    setStatus("idle");
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="pf-drawer-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Drawer */}
      <motion.div
        className="pf-drawer"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 260 }}
      >
        <button className="pf-drawer-close" onClick={onClose} aria-label="Close contact drawer">
          <X size={24} strokeWidth={2.5} />
        </button>

        {status !== "success" ? (
          <>
            <h2 className="pf-drawer-title">Let's build together.</h2>
            <p className="pf-drawer-subtitle">
              Ready to launch your project, request a free homepage design mockup, or get a speed & design audit?
            </p>

            <form className="pf-form" onSubmit={handleSubmit}>
              <div className="pf-form-group">
                <label className="pf-form-label" htmlFor="inquiryType">
                  How can we help you?
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  className="pf-form-select"
                  value={formData.inquiryType}
                  onChange={handleChange}
                >
                  <option value="general">General Website Inquiry</option>
                  <option value="business-website">Business Website Package (From ₦150k)</option>
                  <option value="professional-website">Professional Business Website Package (From ₦180k)</option>
                  <option value="ecommerce-store">Custom E-commerce Store Package (From ₦300k)</option>
                  <option value="mockup">Request Free Homepage Mockup (Free!)</option>
                  <option value="audit">Request Website Audit (Free!)</option>
                </select>
              </div>

              <div className="pf-form-group">
                <label className="pf-form-label" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="pf-form-input"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="E.g., Alexander Cole"
                />
              </div>

              <div className="pf-form-group">
                <label className="pf-form-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="pf-form-input"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@domain.com"
                />
              </div>

              {formData.inquiryType !== "general" && (
                <>
                  <div className="pf-form-group">
                    <label className="pf-form-label" htmlFor="businessName">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      className="pf-form-input"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="E.g., Amber Cafe & Grill"
                    />
                  </div>

                  <div className="pf-form-group">
                    <label className="pf-form-label" htmlFor="businessIndustry">
                      Industry / Niche
                    </label>
                    <input
                      type="text"
                      id="businessIndustry"
                      name="businessIndustry"
                      className="pf-form-input"
                      required
                      value={formData.businessIndustry}
                      onChange={handleChange}
                      placeholder="E.g., Restaurant, Retail, Salon"
                    />
                  </div>
                </>
              )}

              {formData.inquiryType === "audit" && (
                <div className="pf-form-group">
                  <label className="pf-form-label" htmlFor="currentWebsite">
                    Current Website URL
                  </label>
                  <input
                    type="url"
                    id="currentWebsite"
                    name="currentWebsite"
                    className="pf-form-input"
                    value={formData.currentWebsite}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              )}

              <div className="pf-form-group">
                <label className="pf-form-label" htmlFor="message">
                  {["business-website", "professional-website", "ecommerce-store"].includes(formData.inquiryType)
                    ? "Tell us about your business goals and website needs"
                    : formData.inquiryType === "mockup"
                    ? "Briefly describe your design preferences"
                    : formData.inquiryType === "audit"
                    ? "What is your main concern with your current website?"
                    : "Tell us about your project"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="pf-form-input pf-form-textarea"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    ["business-website", "professional-website", "ecommerce-store"].includes(formData.inquiryType)
                      ? "E.g., What products/services you offer, pages you need, target launch date..."
                      : formData.inquiryType === "mockup"
                      ? "E.g., Preferred colors, main sections needed, reference websites you like..."
                      : formData.inquiryType === "audit"
                      ? "E.g., Slow loading, bad mobile spacing, checkout errors, outdated graphics..."
                      : "Tell us a bit about your brand, budget, and timeline..."
                  }
                />
              </div>

              <motion.button
                type="submit"
                className="pf-btn-primary pf-form-btn"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                disabled={status === "submitting"}
              >
                {status === "submitting"
                  ? "Submitting..."
                  : ["business-website", "professional-website", "ecommerce-store"].includes(formData.inquiryType)
                  ? "Send Package Inquiry"
                  : formData.inquiryType === "mockup"
                  ? "Request Free Mockup"
                  : formData.inquiryType === "audit"
                  ? "Request Free Audit"
                  : "Send Message"}
              </motion.button>
            </form>
          </>
        ) : (
          <div className="pf-form-success">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "var(--pf-accent)",
                color: "var(--pf-bg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <Check size={32} />
            </motion.div>
            <h2 className="pf-form-success-title">Submission Received!</h2>
            <p className="pf-form-success-msg">
              {["general", "business-website", "professional-website", "ecommerce-store"].includes(submittedInquiryType)
                ? "Thank you for reaching out. We will review your details and get back to you within 24 hours."
                : submittedInquiryType === "mockup"
                ? "Your request for a free homepage design mockup is received. We'll consult your brand notes and prepare a concept within 48 hours."
                : "Your audit request is received. We'll run performance and UX diagnostics on your link and send a PDF report shortly."}
            </p>
            <button className="pf-btn-ghost" onClick={resetForm} style={{ marginTop: "1.5rem" }}>
              Back to site
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
}
