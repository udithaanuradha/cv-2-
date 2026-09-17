import Link from "next/link";

export default function HalophilesProject() {
  return (
    <main className="portfolio-page project-detail-page">
      <header className="site-header">
        <Link className="wordmark" href="/#top">Aveesha Keshani<span>.</span></Link>
        <Link className="detail-back" href="/#research">← Back to projects</Link>
      </header>
      <article className="project-detail content-wrap">
        <p className="section-label">ACADEMIC PROJECT / 01</p>
        <h1>Isolation and Identification of Halophilic Archaea and Bacteria for Screening and Characterization of Extremozymes</h1>
        <p className="detail-summary">Sample collected from salt pans in Hambantota and isolated halophiles and identified industrially important microorganisms such as amylase- and protease-producing bacteria.</p>
        <div className="detail-meta"><div><span>Area</span><strong>Industrial microbiology</strong></div><div><span>Location</span><strong>Hambantota Salt Pan</strong></div><div><span>Focus</span><strong>Halophiles and extremozymes</strong></div></div>
        <section className="detail-section"><p className="section-label">PROJECT OVERVIEW</p><p>This study focused on collecting water, sediment, and salt crystal samples from the intermediate ponds of the Hambantota Salt Pan. The isolates were cultured under high-salinity conditions, characterized through colony morphology and Gram staining, and screened for extracellular amylase and protease activity.</p><p>Full methodology, observations, results, discussion, conclusion, references, and images can be added to this project record below.</p></section>
        <section className="detail-section"><p className="section-label">PDF DOCUMENT</p><div className="pdf-placeholder"><p>Upload the project PDF as:</p><code>/public/projects/halophiles-extremozymes.pdf</code><a href="/projects/halophiles-extremozymes.pdf" target="_blank" rel="noreferrer">Open project PDF ↗</a></div></section>
        <section className="detail-section"><p className="section-label">PROJECT IMAGES</p><div className="image-placeholder-grid"><div>Salt pan sampling image</div><div>Halophilic bacterial growth image</div><div>Amylase activity image</div><div>Protease activity image</div></div></section>
      </article>
    </main>
  );
}
