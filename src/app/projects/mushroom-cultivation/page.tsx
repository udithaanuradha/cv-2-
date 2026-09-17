import Link from "next/link";

export default function MushroomCultivationProject() {
  return (
    <main className="portfolio-page project-detail-page">
      <header className="site-header">
        <Link className="wordmark" href="/#top">Aveesha Keshani<span>.</span></Link>
        <Link className="detail-back" href="/#research">← Back to projects</Link>
      </header>
      <article className="project-detail content-wrap">
        <p className="section-label">ACADEMIC PROJECT / 02</p>
        <h1>Domestic Mushroom Cultivation and Spawn Preparation</h1>
        <p className="detail-summary">Investigated domestic mushroom cultivation and spawn preparation as an industrial microbiology assignment.</p>
        <div className="detail-meta"><div><span>Area</span><strong>Industrial microbiology</strong></div><div><span>Focus</span><strong>Mushroom cultivation</strong></div><div><span>Project type</span><strong>Academic assignment</strong></div></div>
        <section className="detail-section"><p className="section-label">PROJECT OVERVIEW</p><p>This assignment investigated the practical stages involved in domestic mushroom cultivation and the preparation of spawn. The full process description, materials, observations, outcomes, and discussion can be added here.</p><p>Additional detail, results, and images can be added to this project record when the assignment document is uploaded.</p></section>
        <section className="detail-section"><p className="section-label">PDF DOCUMENT</p><div className="pdf-placeholder"><p>Upload the project PDF as:</p><code>/public/projects/mushroom-cultivation.pdf</code><a href="/projects/mushroom-cultivation.pdf" target="_blank" rel="noreferrer">Open project PDF ↗</a></div></section>
        <section className="detail-section"><p className="section-label">PROJECT IMAGES</p><div className="image-placeholder-grid"><div>Mushroom cultivation image</div><div>Spawn preparation image</div><div>Growth observation image</div></div></section>
      </article>
    </main>
  );
}
