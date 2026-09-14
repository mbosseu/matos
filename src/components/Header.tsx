// @ts-nocheck
import { useEffect, useMemo, useState } from "react"
import { NAV } from "../data/nav.js"
import { searchProducts } from "../data/products.js"

const TRENDS = [
  { label: "Gants de boxe", href: "/gants-de-boxe" },
  { label: "Gants MMA", href: "/gants-mma" },
  { label: "Casque", href: "/protections-boxe" },
  { label: "Tibias", href: "/protections-mma" },
  { label: "Débutant", href: "/equipement-debutant" },
]

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.5" d="M13.96 16.3a6.7 6.7 0 0 1-3.46.95 6.73 6.73 0 0 1-4.77-1.98A6.73 6.73 0 0 1 3.75 10.5c0-1.86.76-3.55 1.98-4.77A6.73 6.73 0 0 1 10.5 3.75c1.86 0 3.55.76 4.77 1.98A6.73 6.73 0 0 1 17.25 10.5a6.7 6.7 0 0 1-.92 3.41c-.52.88-.43 1.99.29 2.71l3.85 3.85" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.5" d="M16.8 3.75c1.32 0 2.57.52 3.5 1.45a4.96 4.96 0 010 7.01L12 20.51l-8.3-8.3a4.96 4.96 0 010-7.01A4.92 4.92 0 017.2 3.75c1.32 0 2.57.52 3.5 1.45l.76.76.53.53.53-.53.76-.76a4.93 4.93 0 013.5-1.45" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25V6A2.25 2.25 0 0110.5 3.75h3a2.25 2.25 0 110 4.5H3.75v8.25A3.75 3.75 0 007.5 20.25h9a3.75 3.75 0 003.75-3.75V8.25H17.5" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.5" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(null)
  const [search, setSearch] = useState(false)
  const [query, setQuery] = useState("")
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setSearch(false)
        setOpen(null)
        setMobile(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    const lock = search || mobile
    document.body.style.overflow = lock ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [search, mobile])

  const results = useMemo(() => (query ? searchProducts(query) : []), [query])

  return (
    <>
      <div className="preheader">
        <div className="pre-left">
          <span>Ouverture prochaine — France entière</span>
        </div>
        <div className="pre-right">
          <a href="/guides-achat">Guides d'achat</a>
          <span className="pre-sep" />
          <a href="/livraison">Livraison</a>
          <span className="pre-sep" />
          <a href="/contact">Contact</a>
        </div>
      </div>

      <div className="header-wrap">
        <div className="header">
          <a href="/" className="logo" aria-label="Accueil Matos de boxe">
            <img src="/logo-mark.png" alt="" width="46" height="46" />
            <span className="logo-lockup">
              <span className="logo-name">
                MATOS-DE-BOXE.<span className="fr">FR</span>
              </span>
              <span className="logo-tag">L'équipement des combattants</span>
            </span>
          </a>
          <nav className="nav" onMouseLeave={() => setOpen(null)} aria-label="Catégories">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`nav-item${open === item.id ? " is-open" : ""}`}
                onMouseEnter={() => setOpen(item.id)}
                onFocus={() => setOpen(item.id)}
                aria-expanded={open === item.id}
                aria-haspopup="true"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="utils">
            <button type="button" className="search-pill" onClick={() => setSearch(true)} aria-label="Rechercher">
              <SearchIcon />
              <span>Rechercher</span>
            </button>
            <a href="/guides-achat" className="icon-btn" aria-label="Guides d'achat">
              <HeartIcon />
            </a>
            <a href="/panier" className="icon-btn" aria-label="Panier (inactif)">
              <BagIcon />
            </a>
            <button type="button" className="icon-btn burger" aria-label="Ouvrir le menu" onClick={() => setMobile(true)}>
              <MenuIcon />
            </button>
          </div>
        </div>

        {open && (
          <div className="mega" onMouseEnter={() => setOpen(open)} onMouseLeave={() => setOpen(null)}>
            <div className="mega-grid">
              {NAV.find((n) => n.id === open)?.columns.map((col) => (
                <div className="mega-col" key={col.title}>
                  <h4>{col.title}</h4>
                  {col.links.map((l) => (
                    <a key={l.href + l.label} href={l.href}>
                      {l.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {open && <div className="backdrop" onMouseEnter={() => setOpen(null)} />}

      {search && (
        <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Recherche">
          <div className="search-bar">
            <SearchIcon />
            <input
              autoFocus
              placeholder="Gants de boxe, MMA, casque…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Rechercher des produits"
            />
            <button type="button" className="search-cancel" onClick={() => setSearch(false)}>
              Annuler
            </button>
          </div>
          <div className="search-body">
            <h3>Tendances</h3>
            {TRENDS.map((t) => (
              <a key={t.href} href={t.href} onClick={() => setSearch(false)}>
                {t.label}
              </a>
            ))}
            {query && (
              <>
                <h3>Résultats</h3>
                {results.length === 0 && <p>Aucun article pour « {query} »</p>}
                {results.map((p) => (
                  <a key={p.slug} href={`/p/${p.slug}`} onClick={() => setSearch(false)}>
                    {p.name}
                  </a>
                ))}
              </>
            )}
          </div>
        </div>
      )}

      {mobile && (
        <div className="drawer" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="icon-btn" onClick={() => setMobile(false)} aria-label="Fermer le menu">
            ×
          </button>
          {NAV.map((item) => (
            <a key={item.id} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="/guides-achat">Guides d'achat</a>
          <a href="/contact">Contact</a>
          <button type="button" className="drawer-search" onClick={() => { setMobile(false); setSearch(true) }}>
            Rechercher
          </button>
        </div>
      )}
    </>
  )
}

export function CookieBanner() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(localStorage.getItem("matos-cookies") == null)
  }, [])
  if (!show) return null
  return (
    <div className="cookie" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <div className="cookie-card">
        <h2 id="cookie-title" className="cookie-title">Cookies</h2>
        <p>
          Nous utilisons des cookies nécessaires au fonctionnement du site. Les cookies d’analyse ne seront activés
          qu’avec ton accord, une fois Google Analytics branché. Détails dans la{" "}
          <a href="/confidentialite">politique de confidentialité</a>.
        </p>
        <div className="cookie-actions">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              localStorage.setItem("matos-cookies", "0")
              setShow(false)
            }}
          >
            Tout refuser
          </button>
          <button
            type="button"
            className="btn btn-accent"
            onClick={() => {
              localStorage.setItem("matos-cookies", "1")
              setShow(false)
            }}
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  )
}

export function AlertForm({ product }) {
  const [ok, setOk] = useState(false)
  if (ok) return <p>C’est noté. On t’écrira à l’ouverture de la vente{product ? ` pour ${product}` : ""}.</p>
  return (
    <form
      className="pdp-actions"
      onSubmit={(e) => {
        e.preventDefault()
        setOk(true)
      }}
    >
      <label className="alert-label">
        E-mail
        <input required type="email" name="email" autoComplete="email" placeholder="Ton e-mail" aria-label="E-mail" />
      </label>
      <button className="btn btn-accent btn-lg" type="submit">
        Prévenez-moi de l’arrivée
      </button>
    </form>
  )
}
