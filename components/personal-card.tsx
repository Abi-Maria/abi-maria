import { ArrowUpRight, Mail } from 'lucide-react'

const credentials = [
  {
    number: '20+',
    title: 'Years in real estate',
    description: 'Brokerage built on trust, sharp instincts, and lasting relationships.',
  },
  {
    number: 'GGU',
    title: 'Business major',
    description: 'A business-first perspective that connects people and opportunity.',
  },
  {
    number: 'AI',
    title: 'AI coursework',
    description: 'Exploring what emerging technology makes possible next.',
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
        <a className="topbar-link" href="mailto:abimariagomes48@gmail.com">
          Let&apos;s connect <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> People, property &amp; possibility</p>
          <h1 id="hero-title">Abi-Maria <em>Gomes</em></h1>
          <p className="hero-role">Real Estate Broker <span className="role-divider">&amp;</span> Enterprise Tech Sales</p>
          <p className="hero-intro">
            Bringing people together with the experience to close today—and the curiosity to see what&apos;s next.
          </p>
          <a className="contact-button" href="mailto:abimariagomes48@gmail.com">
            <Mail aria-hidden="true" />
            <span>Get in touch</span>
            <span className="contact-email">abimariagomes48@gmail.com</span>
            <ArrowUpRight className="contact-arrow" aria-hidden="true" />
          </a>
          <div className="hero-index" aria-hidden="true"><span>01</span><span className="index-rule" /><span>THE INTRODUCTION</span></div>
        </div>

        <aside className="feature-card" aria-label="A little about Abi-Maria">
          <div className="feature-card-top">
            <span className="feature-label">A perspective shaped by</span>
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
            <p>Rooted in relationships.<br /><em>Ready for what&apos;s next.</em></p>
          </div>
          <div className="feature-footer"><span>REAL ESTATE</span><span className="footer-dot" /><span>ENTERPRISE TECHNOLOGY</span></div>
        </aside>
      </section>

      <section className="credentials" aria-label="Experience and background">
        <div className="credentials-heading">
          <span className="section-kicker">THE BACKGROUND</span>
          <h2>Experience with<br />a little <em>extra.</em></h2>
        </div>
        {credentials.map((credential, index) => (
          <article className="credential" key={credential.title}>
            <div className="credential-top"><span className="credential-number">{credential.number}</span><span className="credential-index">0{index + 1}</span></div>
            <h3>{credential.title}</h3>
            <p>{credential.description}</p>
          </article>
        ))}
      </section>

      <footer className="page-footer">
        <span>Also: CBS <em>Survivor</em> contestant</span>
        <span className="footer-signoff">Good people. Good places. New possibilities.</span>
        <a href="mailto:abimariagomes48@gmail.com" aria-label="Email Abi-Maria Gomes">AMG <ArrowUpRight aria-hidden="true" /></a>
      </footer>
    </main>
  )
}
export default PersonalCard
