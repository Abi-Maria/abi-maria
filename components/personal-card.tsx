import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

export function PersonalCard() {
  return (
    <main className="calling-card-page" id="home">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Abi-Maria Gomes, home">
          <span className="wordmark-mark" aria-hidden="true">AMG</span>
          <span className="wordmark-name">Abi-Maria Gomes</span>
        </a>
        <a className="topbar-link" href="https://www.linkedin.com/in/abgomes" target="_blank" rel="noreferrer">
          LinkedIn <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero-panel" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><MapPin aria-hidden="true" /> Los Angeles, California</p>
          <p className="hero-label">ENTERPRISE TECHNOLOGY</p>
          <h1 id="hero-title">Enterprise Tech<br /><em>Sales &amp; Real Estate<br />Broker</em></h1>
          <p className="hero-intro">
            Building my next chapter in enterprise technology sales, with a growing focus on AI workflows and agent building.
          </p>
          <div className="hero-actions">
            <a className="contact-button" href="mailto:abimariagomes48@gmail.com">
              <Mail aria-hidden="true" />
              <span>Contact Abi-Maria</span>
              <ArrowUpRight className="contact-arrow" aria-hidden="true" />
            </a>
            <a className="hero-linkedin" href="https://www.linkedin.com/in/abgomes" target="_blank" rel="noreferrer">
              Connect on LinkedIn <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="ai-focus" aria-labelledby="ai-focus-title">
          <p className="section-kicker">EMERGING SPECIALTY</p>
          <h2 id="ai-focus-title">AI workflows<br />&amp; agent building</h2>
          <p>Developing practical skills in designing useful workflows and building AI agents.</p>
          <div className="course-note">
            <span className="course-mark" aria-hidden="true">AI</span>
            <span><strong>AI 300</strong><small>GGU · Finishing the course</small></span>
          </div>
        </aside>
      </section>

      <section className="professional-history" aria-labelledby="history-title">
        <div className="section-heading">
          <p className="section-kicker">CAREER HISTORY</p>
          <h2 id="history-title">Professional experience</h2>
        </div>
        <div className="history-list">
          <article className="history-row">
            <span className="history-number">01</span>
            <h3>Real Estate Broker</h3>
            <p>20+ years of experience</p>
          </article>
          <article className="history-row">
            <span className="history-number">02</span>
            <h3>Business Major</h3>
            <p>Golden Gate University</p>
          </article>
        </div>
      </section>

      <section className="survivor-highlight" aria-labelledby="survivor-title">
        <span className="survivor-label">FEATURED EXPERIENCE</span>
        <h2 id="survivor-title">CBS <em>Survivor</em> Experience</h2>
        <p className="survivor-banner">
          <strong>2-Time Survivor Player: Philippines &amp; Voted by America for Second Chance (72 total days competed).</strong>
        </p>
      </section>

      <footer className="page-footer">
        <span>Abi-Maria Gomes <span className="footer-divider">/</span> Los Angeles</span>
        <a href="mailto:abimariagomes48@gmail.com">abimariagomes48@gmail.com <ArrowUpRight aria-hidden="true" /></a>
      </footer>
    </main>
  )
}

export default PersonalCard
