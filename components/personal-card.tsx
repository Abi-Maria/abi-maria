import { ArrowUpRight, Mail } from 'lucide-react'

const focusAreas = [
  {
    number: '01',
    title: 'Enterprise tech sales',
    description: 'Building trusted relationships and connecting people with technology that moves business forward.',
  },
  {
    number: '02',
    title: 'AI coursework',
    description: 'Studying the ideas and tools shaping what comes next in enterprise technology.',
  },
]

export function PersonalCard() {
  return (
    <main className="calling-card-page">
      <div className="page-grain" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Abi-Maria Gomes, home">
          <span className="wordmark-mark">AMG</span>
          <span className="wordmark-name">Abi-Maria Gomes</span>
        </a>
        <a className="topbar-link" href="https://www.linkedin.com/in/abgomes" target="_blank" rel="noreferrer">
          LinkedIn profile <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Enterprise technology · Los Angeles</p>
          <h1 id="hero-title">Abi-Maria <em>Gomes</em></h1>
          <p className="hero-role">Enterprise Tech Sales <span className="role-divider">&amp;</span> AI Coursework</p>
          <p className="hero-intro">
            A relationship-first approach to enterprise technology sales, paired with a growing foundation in AI and a curiosity for what comes next.
          </p>
          <div className="hero-actions">
            <a className="contact-button" href="mailto:abimariagomes48@gmail.com">
              <Mail aria-hidden="true" />
              <span>Get in touch</span>
              <span className="contact-email">abimariagomes48@gmail.com</span>
              <ArrowUpRight className="contact-arrow" aria-hidden="true" />
            </a>
            <a className="hero-linkedin" href="https://www.linkedin.com/in/abgomes" target="_blank" rel="noreferrer">
              View LinkedIn <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="hero-index" aria-hidden="true"><span>01</span><span className="index-rule" /><span>TECHNOLOGY &amp; WHAT&apos;S NEXT</span></div>
        </div>

        <aside className="feature-card" aria-label="Abi-Maria's current focus">
          <div className="feature-card-top">
            <span className="feature-label">Current focus</span>
            <span className="feature-spark" aria-hidden="true" />
          </div>
          <div className="monogram-wrap" aria-hidden="true">
            <div className="monogram-ring monogram-ring-outer" />
            <div className="monogram-ring monogram-ring-inner" />
            <span className="monogram">AM<span>G</span></span>
            <span className="monogram-caption">LOS ANGELES · CALIFORNIA</span>
          </div>
          <div className="feature-quote">
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>People-first sales.<br /><em>Future-ready thinking.</em></p>
          </div>
          <div className="feature-footer"><span>ENTERPRISE TECH SALES</span><span className="footer-dot" /><span>AI COURSEWORK</span></div>
        </aside>
      </section>

      <section className="focus-section" aria-labelledby="focus-title">
        <div className="section-heading">
          <span className="section-kicker">THE MAIN FOCUS</span>
          <h2 id="focus-title">Technology, <em>with people at the center.</em></h2>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article className="focus-item" key={area.title}>
              <span className="focus-number">{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="history-section" aria-labelledby="history-title">
        <div className="history-heading">
          <span className="section-kicker">PROFESSIONAL HISTORY</span>
          <h2 id="history-title">Experience built<br />on <em>relationships.</em></h2>
        </div>
        <article className="history-item">
          <span className="history-years">20+ years</span>
          <div>
            <h3>Real Estate Broker</h3>
            <p>Two decades of guiding people through meaningful property decisions, grounded in trust and long-term relationships.</p>
          </div>
        </article>
        <article className="history-item history-education">
          <span className="history-years">GGU</span>
          <div>
            <h3>Business Major</h3>
            <p>A business foundation that complements a career spanning property and enterprise technology.</p>
          </div>
        </article>
      </section>

      <section className="personal-highlight" aria-label="Personal achievement">
        <span className="highlight-kicker">A PERSONAL HIGHLIGHT</span>
        <p><strong>CBS <em>Survivor</em></strong><span>Contestant · A memorable adventure beyond the boardroom.</span></p>
        <span className="highlight-star" aria-hidden="true" />
      </section>

      <footer className="page-footer">
        <span>Los Angeles, California</span>
        <span className="footer-signoff">Good people. New possibilities.</span>
        <a href="mailto:abimariagomes48@gmail.com" aria-label="Email Abi-Maria Gomes">Say hello <ArrowUpRight aria-hidden="true" /></a>
      </footer>
    </main>
  )
}

export default PersonalCard
