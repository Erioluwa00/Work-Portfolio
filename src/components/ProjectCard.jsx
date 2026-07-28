import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link className="pf-card" to={`/project/${project.id}`}>
      <div className="pf-card-media">
        <img src={project.image} alt={project.name} loading="lazy" />
      </div>
      <div className="pf-card-body">
        <h4>{project.name}</h4>
        <p>{project.tagline}</p>
        <div className="pf-card-meta">
          <span>{project.year}</span>
          <span className="pf-dot">·</span>
          <span>{project.tags.join(" / ")}</span>
        </div>
      </div>
    </Link>
  );
}
