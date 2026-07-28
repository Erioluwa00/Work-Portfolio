import React from "react";

export default function Marquee() {
  const items = [
    "Design-Led Engineering",
    "Headless E-commerce",
    "React & Next.js",
    "Creative Interactions",
    "Tailored Digital Storefronts",
    "Framer Motion",
    "Clean Typography",
  ];

  // Triplicating the list to guarantee it overflows the screen width and loops seamlessly
  const listItems = [...items, ...items, ...items];

  return (
    <div className="pf-marquee-wrap">
      <div className="pf-marquee-content">
        {listItems.map((item, index) => (
          <span key={index} className="pf-marquee-item">
            {item} <span className="pf-marquee-separator">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
