"use client";

import { useState } from "react";
import Image from "next/image";

const navigation = ["Summary", "Skills", "Research", "Writing", "Experience", "Certifications"];

export default function Home() {
  const [isLight, setIsLight] = useState(false);

  return (
    <main className={`portfolio-page${isLight ? " light-theme" : ""}`}>
      <header className="site-header">
        <a className="wordmark" href="#top">Aveesha Keshani<span>.</span></a>
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
          <button className="menu-toggle" type="button" aria-label="Open navigation"><i /><i /><i /></button>
        </div>
      </header>
      <nav className="mobile-menu" aria-label="Primary navigation">
        {navigation.map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}
      </nav>

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
            <p className="greeting">Hi <span>👋</span></p>
            <h1 id="hero-title">Aveesha<br />Keshani</h1>
            <p className="hero-role">Biological Science Professional</p>
            <p className="hero-intro">Motivated undergraduate pursuing a B.Sc. (General) Degree in Biological Science at the University of Sri Jayewardenepura, specializing in Chemistry, Microbiology and Zoology, with strong practical experience in analytical chemistry and microbiological laboratory techniques.</p>
            <div className="hero-links"><a href="#research">View my research <span>↗</span></a><a href="#experience">Get in touch <span>↗</span></a></div>
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

        <section className="content-section projects" id="research">
          <p className="section-label">ACADEMIC PROJECTS &amp; RESEARCH</p>
          <h2>Research I&apos;ve <em>conducted.</em></h2>
          <div className="project-card"><span className="project-index">01</span><h3>Halophiles and Extremozymes</h3><p>Sample collected from salt pans in Hambantota and isolated halophiles and identified industrially important microorganisms such as amylase- and protease-producing bacteria.</p><a href="/projects/halophiles">View full details <span>↗</span></a></div>
          <div className="project-card"><span className="project-index">02</span><h3>Domestic Mushroom Cultivation</h3><p>Investigated domestic mushroom cultivation and spawn preparation as an industrial microbiology assignment.</p><a href="/projects/mushroom-cultivation">View full details <span>↗</span></a></div>
        </section>

        <section className="content-section writing" id="writing">
          <p className="section-label">SCIENTIFIC WRITING &amp; DOCUMENTATION</p>
          <h2>Writing with <em>purpose.</em></h2>
          <div className="timeline-item"><span>DOCUMENTATION</span><h3>Scientific report or publication</h3><p>Describe your research reports, literature reviews, laboratory records, or other scientific documents here.</p></div>
          <div className="timeline-item"><span>COMMUNICATION</span><h3>Presentation or technical document</h3><p>Add conferences, posters, presentations, or technical communication experience here.</p></div>
        </section>

        <section className="content-section experience" id="experience">
          <p className="section-label">WORK EXPERIENCE &amp; EXTRA-CURRICULARS</p>
          <h2>Where I&apos;ve <em>contributed.</em></h2>
          <div className="timeline-item"><span>DATE — DATE</span><h3>Work experience or internship</h3><p>Organization, responsibilities, and contribution go here.</p></div>
          <div className="timeline-item"><span>DATE — DATE</span><h3>Extra-curricular activity</h3><p>Society, volunteer role, leadership activity, or community contribution goes here.</p></div>
        </section>

        <section className="content-section awards" id="certifications">
          <p className="section-label">CERTIFICATIONS &amp; WORKSHOPS</p>
          <h2>Learning <em>in practice.</em></h2>
          <div className="award-row"><span>DATE</span><div><h3>Certification or workshop title</h3><p>Issuing organization and a short description go here.</p></div></div>
          <div className="award-row"><span>DATE</span><div><h3>Training or laboratory workshop</h3><p>Issuing organization and a short description go here.</p></div></div>
        </section>
      </div>

      <footer className="site-footer"><span>Aveesha Keshani.</span><span>© 2026</span></footer>
    </main>
  );
}
