"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import projectImage1 from "./project1.1.jpeg";
import projectImage2 from "./project1.2.jpeg";
import projectImage3 from "./project1.3.jpeg";
import projectImage4 from "./project1.4.jpeg";
import projectImage5 from "./project1.5.jpeg";
import projectImage6 from "./project1.6.jpeg";
import projectImage7 from "./project1.7.jpeg";

export default function HalophilesProject() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const projectImages = [
    { src: projectImage1.src, alt: "Hambantota salt pan" },
    { src: projectImage2.src, alt: "Salt pan water sampling area" },
    { src: projectImage3.src, alt: "Halophilic bacterial culture" },
    { src: projectImage4.src, alt: "Halophilic bacterial growth" },
    { src: projectImage5.src, alt: "Amylase activity assay" },
    { src: projectImage6.src, alt: "Amylase assay culture plate" },
    { src: projectImage7.src, alt: "Halophilic culture plate" },
  ];

  return (
    <main className="portfolio-page project-detail-page">
      <header className="site-header">
        <Link className="wordmark" href="/#top">Aveesha Keshani<span>.</span></Link>
        <Link className="detail-back" href="/#projects">← Back to projects</Link>
      </header>
      <article className="project-detail content-wrap">
        <p className="section-label">ACADEMIC PROJECT / 01</p>
        <h1>Isolation and Identification of Halophilic Archaea and Bacteria for Screening and Characterization of Extremozymes</h1>
        <p className="detail-summary">Collected environmental samples from <em>salt pans in Hambantota, Sri Lanka, a hot and saline environment, to isolate and study <strong>halophilic microorganisms</strong>.</em> The collected samples were processed and cultivated under suitable saline conditions to obtain halophilic bacterial isolates. The isolated microorganisms were further screened for their ability to produce <strong>industrially important extracellular enzymes, particularly amylase and protease.</strong></p>
        <div className="detail-meta"><div><span>Area</span><strong>Industrial microbiology</strong></div><div><span>Location</span><strong>Hambantota Salt Pan</strong></div><div><span>Focus</span><strong>Halophiles and extremozymes</strong></div></div>
        <section className="detail-section"><p className="section-label">PROJECT OVERVIEW</p><p>Collected environmental samples from <em>salt pans in Hambantota, Sri Lanka, a hot and saline environment, to isolate and study <strong>halophilic microorganisms.</strong></em> The samples were processed and cultivated under suitable saline conditions to obtain halophilic bacterial isolates. The isolates were further screened for their ability to produce <strong>industrially important extracellular enzymes, particularly amylase and protease.</strong></p><p>This project provided practical experience in <em>environmental sample collection, microbial isolation, cultivation, aseptic techniques, bacterial screening, and identification of potentially industrially valuable microorganisms.</em></p><p>The study also demonstrated the biotechnological potential of halophiles as sources of enzymes that can be applied in industries such as <strong>food processing, detergents, textiles, leather processing, and biotechnology.</strong></p></section>
        <section className="detail-section"><p className="section-label">PDF DOCUMENT</p><div className="pdf-placeholder"><div className="pdf-document-icon" aria-hidden="true">PDF</div><div className="pdf-document-info"><strong>Halophiles and Extremozymes</strong><span>Project report · PDF document</span></div><a className="pdf-view-button" href="/projects/halophiles-intermediate-zone.pdf" target="_blank" rel="noreferrer"><span aria-hidden="true">↗</span> View PDF</a></div></section>
        <section className="detail-section"><p className="section-label">PROJECT IMAGES</p><div className="image-placeholder-grid project-image-grid">
          {projectImages.map((image) => (
            <button className="gallery-image-button" type="button" key={image.src} onClick={() => setSelectedImage(image)} aria-label={`View ${image.alt} full size`}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 600px) 100vw, 25vw" />
            </button>
          ))}
        </div></section>
      </article>
      {selectedImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Full-size project image" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" type="button" onClick={() => setSelectedImage(null)} aria-label="Close full-size image">×</button>
          <Image className="lightbox-image" src={selectedImage.src} alt={selectedImage.alt} width={1600} height={1200} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
