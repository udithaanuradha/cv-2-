"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import projectImage1 from "./project 2.1.jpeg";
import projectImage2 from "./project2.2.jpeg";
import projectImage3 from "./projwcr2,3.jpeg";
import projectImage4 from "./project2.4.jpeg";
import projectImage5 from "./project2.5.jpeg";

export default function MushroomCultivationProject() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const projectImages = [
    { src: projectImage1.src, alt: "Mushroom cultivation setup" },
    { src: projectImage2.src, alt: "Spawn preparation process" },
    { src: projectImage3.src, alt: "Mushroom growth observation" },
    { src: projectImage4.src, alt: "Mushroom cultivation results" },
    { src: projectImage5.src, alt: "Final mushroom harvest" },
  ];

  return (
    <main className="portfolio-page project-detail-page">
      <header className="site-header">
        <Link className="wordmark" href="/#top">Aveesha Keshani<span>.</span></Link>
        <Link className="detail-back" href="/#projects">← Back to projects</Link>
      </header>
      <article className="project-detail content-wrap">
        <p className="section-label">ACADEMIC PROJECT / 02</p>
        <h1>Domestic Mushroom Cultivation and Spawn Preparation</h1>
        <p className="detail-summary">Investigated domestic mushroom cultivation and spawn preparation as an industrial microbiology assignment.</p>
        <div className="detail-meta"><div><span>Area</span><strong>Industrial microbiology</strong></div><div><span>Focus</span><strong>Mushroom cultivation</strong></div><div><span>Project type</span><strong>Academic assignment</strong></div></div>
        <section className="detail-section"><p className="section-label">PROJECT OVERVIEW</p><p>Investigated <em>domestic mushroom cultivation and spawn preparation</em> as part of an Industrial Microbiology assignment, including a study of a home-industry mushroom farm, <strong>Golden Mushroom, Badulla</strong>. The study focused on the production and use of mushroom spawn, substrate preparation, sterilization, aseptic inoculation, incubation, and mycelial colonization.</p><p>The spawn-production process studied included <em>pure culture development, preparation of cereal grain-based spawn supplemented with gypsum and calcium carbonate, sterilization, aseptic inoculation under laminar airflow, incubation, and contamination inspection.</em> The cultivation process involved preparing a rubber sawdust-based substrate supplemented with rice bran, nutrients, calcium carbonate, and Epsom salt, followed by sterilization and inoculation with HORDI spawn.</p><p>Through this assignment, gained practical understanding of <em>mushroom cultivation, spawn technology, microbial aseptic techniques, substrate preparation, sterilization, contamination control, and the application of industrial microbiology principles in small-scale mushroom production.</em></p></section>
        <section className="detail-section"><p className="section-label">PDF DOCUMENT</p><div className="pdf-placeholder"><div className="pdf-document-icon" aria-hidden="true">PDF</div><div className="pdf-document-info"><strong>Domestic Mushroom Cultivation</strong><span>Assignment report · PDF document</span></div><a className="pdf-view-button" href="/projects/Industrial microbiology  assignment.pdf" target="_blank" rel="noreferrer"><span aria-hidden="true">↗</span> View PDF</a></div></section>
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
