// @ts-nocheck
import { useEffect, useState } from "react"

const FEATURES = [
  {
    label: "Livraison rapide",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 7h11v8H3V7zm11 2h4l3 3v3h-2.1a2.1 2.1 0 0 1-4.1 0H8.2a2.1 2.1 0 0 1-4.1 0H3v-2h11V9zm1.5 6.2a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2zm-9 0a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z"
        />
      </svg>
    ),
  },
  {
    label: "Matériel certifié",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3zm-1.2 13.2-3.1-3.1 1.4-1.4 1.7 1.7 4.1-4.1 1.4 1.4-5.5 5.5z"
        />
      </svg>
    ),
  },
  {
    label: "Utilisé par des champions",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 4h10v2h3v2c0 2.2-1.5 4-3.5 4.7A5 5 0 0 1 13 16.9V18h3v2H8v-2h3v-1.1A5 5 0 0 1 7.5 12.7C5.5 12 4 10.2 4 8V6h3V4zm0 4H6c0 1.3.8 2.4 2 2.8V8H7zm9 0h-2v2.8c1.2-.4 2-1.5 2-2.8h-0z"
        />
      </svg>
    ),
  },
]

export default function HeroCarousel({ slides }) {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const [ready, setReady] = useState(false)
  const total = slides.length

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const t = window.setTimeout(() => setReady(true), reduce ? 0 : 80)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    if (paused || total < 2) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const t = setInterval(() => setI((x) => (x + 1) % total), 9000)
    return () => clearInterval(t)
  }, [paused, total])

  const prev = () => setI((x) => (x - 1 + total) % total)
  const next = () => setI((x) => (x + 1) % total)

  return (
    <section
      className={`hero hero-light${ready ? " is-ready" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Campagnes"
    >
      {slides.map((slide, idx) => {
        const Title = idx === 0 ? "h1" : "h2"
        const titleLines = String(slide.title).split("\n")
        const isActive = idx === i
        return (
          <div
            key={slide.id}
            className={`hero-slide${isActive ? " is-active" : ""}`}
            aria-hidden={!isActive}
            {...(!isActive ? { inert: true } : {})}
          >
            <div className="hero-stage">
              <div className="hero-visual" aria-hidden="true">
                <div className="hero-halo">
                  <span className="hero-halo-core" />
                  <span className="hero-halo-ring" />
                  <span className="hero-halo-ring hero-halo-ring-b" />
                </div>
                <div className="hero-dust">
                  <span className="hero-dust-cloud hero-dust-cloud-a" />
                  <span className="hero-dust-cloud hero-dust-cloud-b" />
                  <span className="hero-dust-cloud hero-dust-cloud-c" />
                  <span className="hero-dust-spark" />
                </div>
                <div className="hero-floor" />
                {slide.art ? (
                  <img
                    className="hero-art"
                    src={slide.art}
                    alt=""
                    fetchPriority={idx === 0 ? "high" : "low"}
                    loading={idx === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                ) : (
                  <div className="hero-product-plate">
                    <img
                      className="hero-product"
                      src={slide.image}
                      alt={slide.alt}
                      fetchPriority={idx === 0 ? "high" : "low"}
                      loading={idx === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </div>
                )}
              </div>

              <div className="hero-copy">
                <div className="hero-brand-row">
                  <div className="hero-brand-mark">
                    <span className="hero-brand-metal">METAL</span>
                    <span className="hero-brand-boxe">BOXE</span>
                  </div>
                  <span className="hero-brand-line" aria-hidden="true" />
                  <nav className="hero-mini-nav" aria-label="Valeurs">
                    <span>Passion</span>
                    <span>Combat</span>
                    <span>Progression</span>
                  </nav>
                </div>

                <Title className="hero-title">
                  <span className="hero-title-dark">{titleLines[0]}</span>
                  {titleLines[1] ? (
                    <span className="hero-title-gold">{titleLines[1]}</span>
                  ) : null}
                </Title>

                <p>{slide.text}</p>

                <a className="btn hero-cta" href={slide.href}>
                  {slide.cta}
                  <span aria-hidden="true"> →</span>
                </a>

                <ul className="hero-features">
                  {FEATURES.map((f) => (
                    <li key={f.label}>
                      <span className="hero-feature-icon">{f.icon}</span>
                      <span>{f.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      })}

      {total > 1 && (
        <>
          <div className="hero-dots">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                className={idx === i ? "on" : ""}
                aria-label={`Diapositive ${idx + 1}`}
                aria-current={idx === i ? "true" : undefined}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
          <div className="hero-arrows">
            <button type="button" aria-label="Précédent" onClick={prev}>
              ‹
            </button>
            <button type="button" aria-label="Suivant" onClick={next}>
              ›
            </button>
          </div>
        </>
      )}
    </section>
  )
}
