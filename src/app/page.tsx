"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navigation = ["Summary", "Skills", "Projects", "Experience", "Visits"];

export default function Home() {
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <main className={`portfolio-page${isLight ? " light-theme" : ""}`}>
      <header className="site-header">
        <a className="wordmark" href="#top">Aveesha Keshani<span>.</span></a>
        
        <nav className="desktop-nav" aria-label="Desktop navigation">
          {navigation.map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
            aria-pressed={isLight}
            onClick={() => setIsLight((current) => !current)}
          >
            <span>{isLight ? "☾" : "☼"}</span>
          </button>
          <button 
            className="menu-toggle" 
            type="button" 
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i /><i /><i />
          </button>
        </div>
      </header>
      
      {isMenuOpen && (
        <nav className="mobile-menu" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setIsMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
      )}

      <div className="content-wrap" id="top">
        <section className="hero" aria-labelledby="hero-title">
          <Image
            className="portrait-placeholder"
            src="/WhatsApp%20Image%202026-09-17%20at%2011.36.46.jpeg"
            alt="Aveesha Keshani"
            width={390}
            height={390}
            priority
          />
          <div className="hero-copy">
            <p className="greeting">Hi, I&apos;m <span>👋</span></p>
            <h1 id="hero-title">Aveesha<br />Keshani</h1>
            <p className="hero-role">Biological Science Professional</p>
            <p className="hero-intro">Motivated undergraduate pursuing a B.Sc. (General) Degree in Biological Science at the University of Sri Jayewardenepura, specializing in Chemistry, Microbiology and Zoology, with strong practical experience in analytical chemistry and microbiological laboratory techniques.</p>
            <div className="hero-links"><a href="#projects">View my projects <span>↗</span></a><a href="#experience">Get in touch <span>↗</span></a></div>
          </div>
          <a className="scroll-cue" href="#summary" aria-label="Scroll to summary">↓</a>
        </section>

        <section className="content-section" id="summary">
          <p className="section-label">PROFESSIONAL SUMMARY</p>
          <h2 className="summary-heading">Academic <em>overview.</em></h2>
          <div className="section-copy summary-copy">
            <p>I&apos;m an undergraduate student pursuing a <em>B.Sc. (General) Degree in Biological Science at the University of Sri Jayewardenepura, Sri Lanka, with a multidisciplinary background in <strong>Chemistry, Microbiology, and Zoology.</strong></em> Throughout my degree, I&apos;ve developed hands-on experience in laboratory analysis, microbiological techniques, environmental studies, and scientific experimentation.</p>
            <p>I&apos;ve worked with techniques and instruments including <em>UV–Visible Spectrophotometry, Atomic Absorption Spectroscopy (AAS), GC-MS, titrations, calibration curves, microbial isolation and cultivation, aseptic techniques, Gram staining, fungal cultivation, DNA extraction, enzyme assays, and environmental and water-quality analysis.</em> These practical experiences have helped me connect what I learn in lectures with how science is actually applied in laboratories and industries.</p>
            <p>My interest in science grew through practical work, especially when I started exploring how microorganisms and chemical processes can be used to solve real-world problems. From <em>microbial enzyme production, fermentation, mushroom cultivation, and agricultural microorganisms to water-quality analysis and environmental microbiology</em>, each experience has helped me discover different areas where I can apply my scientific knowledge.</p>
            <p>As I move from university into the professional world, I&apos;m particularly interested in <em>laboratory-based and industrial roles, including <strong>Quality Control and Quality Assurance, pharmaceutical and food industries, analytical laboratories, industrial microbiology, biotechnology, agricultural biotechnology, and environmental testing.</strong></em></p>
            <p>I&apos;m currently focused on building my practical and professional skills, gaining industry experience, and finding an opportunity where I can contribute as a science graduate while continuing to learn from experienced professionals.</p>
            <p>I&apos;m always interested in <em>learning new techniques, taking on practical challenges, working with others, and turning scientific knowledge into meaningful solutions.</em></p>
          </div>
          <div className="facts-grid"><div><span>Discipline</span><strong>Biological Science</strong></div><div><span>Academic focus</span><strong>Chemistry, Microbiology &amp; Zoology</strong></div><div><span>University</span><strong>University of Sri Jayewardenepura</strong></div></div>
        </section>

        <section className="content-section skills" id="skills">
          <p className="section-label">TECHNICAL &amp; LABORATORY SKILLS</p>
          <h2>Skill <em>matrix.</em></h2>
          <div className="skill-list">
            <div className="skill-column"><h3>Instrument Handling</h3><ul><li>UV–Vis Spectrophotometry</li><li>Atomic Absorption Spectroscopy (AAS)</li><li>GC-MS Analysis</li><li>Fluorescence spectrometry</li><li>PCR</li><li>Gel electrophoresis</li><li>pH meter</li><li>Conductivity meter</li></ul></div>
            <div className="skill-column"><h3>Microbial Techniques</h3><ul><li>Aseptic techniques</li><li>Media preparation</li><li>Microbial isolation and culturing</li><li>Pathogen identification</li><li>Fermentation methods</li><li>Dairy and brewery microbiology</li><li>Bioassay</li><li>Enzyme extraction</li><li>DNA extraction</li></ul></div>
            <div className="skill-column"><h3>Analytical Techniques</h3><ul><li>Redox titrations</li><li>Complexometric titrations</li><li>Acid-base titrations</li><li>Iodometric titrations</li><li>Paper chromatography</li><li>TLC chromatography</li><li>Water quality analysis: pH, DO, TDS, conductivity, and salinity</li><li>Phytoplankton sampling</li></ul></div>
          </div>
        </section>

        <section className="content-section projects" id="projects">
          <p className="section-label">ACADEMIC PROJECTS</p>
          <h2>Academic <em>projects.</em></h2>
          <div className="project-card"><span className="project-index">01</span><h3>Halophiles and Extremozymes</h3><p>Collected environmental samples from salt pans in Hambantota, Sri Lanka, to isolate halophilic microorganisms and screen them for industrially important amylase and protease enzymes.</p><a href="/projects/halophiles">View full details <span>↗</span></a></div>
          <div className="project-card"><span className="project-index">02</span><h3>Domestic Mushroom Cultivation</h3><p>Investigated domestic mushroom cultivation and spawn preparation as an industrial microbiology assignment.</p><a href="/projects/mushroom-cultivation">View full details <span>↗</span></a></div>
        </section>



        <section className="content-section experience" id="experience">
          <p className="section-label">PRACTICAL TRAINING &amp; EXTRA-CURRICULARS</p>
          <h2>Where I&apos;ve <em>contributed.</em></h2>
          <div className="timeline-item">
            <span>2022 — PRESENT</span>
            <h3>Analytical Chemistry &amp; Microbiology Practicals</h3>
            <div style={{ marginTop: '8px', lineHeight: '1.6' }}>
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Analytical Chemistry:</strong> Quantitative analysis using GC-MS, AAS, and UV–Visible spectrophotometry with calibration-based calculations.</li>
                <li><strong>Pharmaceutical Syntheses:</strong> Conducted lab exercises involving assay, purity, and yield determination (organic synthesis of benzamide, preparation of acetanilide and p-nitroaniline).</li>
                <li><strong>Nutritional Analysis:</strong> Analysis of Vitamin C in a capsule using iodometry, and Fe content in a capsule using AAS.</li>
                <li><strong>Microbial Enzyme Production:</strong> Amylase and pectinase production using microbial cultures and agro-industrial substrates.</li>
                <li><strong>Bioremediation:</strong> Isolating polythene degrading microbes (bacteria &amp; fungi) and analyzing the results using FTIR.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <span>2022 — PRESENT</span>
            <h3>Water Quality Analysis &amp; Fieldwork</h3>
            <div style={{ marginTop: '8px', lineHeight: '1.6' }}>
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Lake Gregory, Nuwara Eliya:</strong> Analyzed DO, pH, conductivity, and alkalinity of water.</li>
                <li><strong>Madunagala Hot Water Springs:</strong> Analyzed DO, pH, conductivity, alkalinity, temperature, along with plankton sampling and microbial identification.</li>
                <li><strong>Ridiyagama Reservoir:</strong> Analyzed DO, pH, conductivity, alkalinity, temperature, and plankton sampling.</li>
                <li><strong>Walawe River (Upstream &amp; Downstream):</strong> Analyzed DO, pH, conductivity, alkalinity, temperature, plankton sampling, Secchi depth &amp; Ruttner sampling.</li>
                <li><strong>Morawala Beach, Negombo:</strong> Conducted comprehensive water quality parameter testing.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <span>DATE — DATE</span>
            <h3>IEEE Student Branch - EMBS</h3>
            <p>University of Sri Jayewardenepura — Active member involved in the Engineering in Medicine and Biology Society (EMBS) activities and initiatives.</p>
          </div>
        </section>

        <section className="content-section awards" id="visits">
          <p className="section-label">INDUSTRIAL VISITS &amp; EXPOSURE</p>
          <h2>Industry <em>exposure.</em></h2>
          <div className="award-row">
            <span>JUN 2026</span>
            <div>
              <h3>Field visit to Ansell Lanka (PVT) Ltd</h3>
              <p>Objective: Observed the procedure of making gloves using synthetic polymers.</p>
              <div className="image-placeholder-grid project-image-grid visit-grid">
                {([
                  { src: "/visit1.1.jpeg", alt: "Ansell Lanka Field Visit 1" },
                  { src: "/visit1.2.jpeg", alt: "Ansell Lanka Field Visit 2" },
                  { src: "/visit1.3.jpeg", alt: "Ansell Lanka Field Visit 3" },
                  { src: "/visit 1.4.jpeg", alt: "Ansell Lanka Field Visit 4" }
                ] as {src: string, alt: string}[]).map((image, i) => (
                  <button className="gallery-image-button" type="button" key={i} onClick={() => setSelectedImage(image)} aria-label={`View ${image.alt} full size`}>
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 600px) 100vw, 25vw" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="award-row">
            <span>MAY 2026</span>
            <div>
              <h3>Field visit 2.0 - Industrial microbiology</h3>
              <p>Lion Brewery(Ceylon)PLC — Observed the raw materials and process of making alcoholic beverages and the fermentation process.</p>
              <div className="image-placeholder-grid project-image-grid visit-grid">
                {([
                  { src: "/lion-brewery-1.jpg", alt: "Lion Brewery Visit 1" },
                  { src: "/lion-brewery-2.jpg", alt: "Lion Brewery Visit 2" },
                  { src: "/lion-brewery-3.jpg", alt: "Lion Brewery Visit 3" }
                ] as {src: string, alt: string}[]).map((image, i) => (
                  <button className="gallery-image-button" type="button" key={i} onClick={() => setSelectedImage(image)} aria-label={`View ${image.alt} full size`}>
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 600px) 100vw, 25vw" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer"><span>Aveesha Keshani.</span><span>© 2026</span></footer>

      {selectedImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Full-size project image" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" type="button" onClick={() => setSelectedImage(null)} aria-label="Close full-size image">×</button>
          <Image className="lightbox-image" src={selectedImage.src} alt={selectedImage.alt} width={1600} height={1200} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
