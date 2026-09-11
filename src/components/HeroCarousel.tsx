// @ts-nocheck
import { useEffect, useState } from "react"

export default function HeroCarousel({ slides }) {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = slides.length

  useEffect(() => {
    if (paused || total < 2) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const t = setInterval(() => setI((x) => (x + 1) % total), 6000)
    return () => clearInterval(t)
  }, [paused, total])

  const prev = () => setI((x) => (x - 1 + total) % total)
  const next = () => setI((x) => (x + 1) % total)

  return (
    <section
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Campagnes"
    >
      {slides.map((slide, idx) => {
        const Title = idx === 0 ? "h1" : "h2"
        return (
          <div key={slide.id} className={`hero-slide${idx === i ? " is-active" : ""}`} aria-hidden={idx !== i} inert={idx !== i}>
            <img src={slide.image} alt={slide.alt} />
            <div className="hero-copy">
              <Title>{slide.title}</Title>
              <p>{slide.text}</p>
              <a className="btn" href={slide.href}>
                {slide.cta}
              </a>
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
