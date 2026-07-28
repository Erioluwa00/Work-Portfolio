import React from "react";
import { Link } from "react-router-dom";

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function ProjectPlate({ project, index, reverse }) {
  return (
    <article className={`pf-plate ${reverse ? "pf-plate--reverse" : ""}`}>
      <Link to={`/project/${project.id}`} className="pf-plate-media">
        <img src={project.image} alt={project.name} loading="lazy" />
      </Link>
      <div className="pf-plate-info">
        <span className="pf-plate-number">PLATE&nbsp;No.&nbsp;{pad(index + 1)}</span>
        <h3 className="pf-plate-title">
          <Link to={`/project/${project.id}`}>{project.name}</Link>
        </h3>
        <p className="pf-plate-tagline">{project.tagline}</p>
        <div className="pf-plate-meta">
          <span>{project.year}</span>
          <span className="pf-dot">·</span>
          <span>{project.tags.join(" / ")}</span>
        </div>
        <Link className="pf-plate-link" to={`/project/${project.id}`}>
          View project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
