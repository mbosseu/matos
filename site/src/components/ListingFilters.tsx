// @ts-nocheck
import { useEffect, useState } from "react"

export default function ListingFilters({ types }) {
  const [filter, setFilter] = useState("Tous")
  const chips = ["Tous", ...types]

  useEffect(() => {
    const cards = document.querySelectorAll("[data-product-type]")
    let visible = 0
    cards.forEach((el) => {
      const show = filter === "Tous" || el.getAttribute("data-product-type") === filter
      el.toggleAttribute("hidden", !show)
      if (show) visible += 1
    })
    const count = document.querySelector("[data-result-count]")
    if (count) count.textContent = String(visible)
  }, [filter])

  if (chips.length < 3) return null

  return (
    <div className="filters" role="tablist" aria-label="Filtrer le catalogue">
      {chips.map((t) => (
        <button key={t} type="button" className={`chip${filter === t ? " on" : ""}`} onClick={() => setFilter(t)}>
          {t}
        </button>
      ))}
    </div>
  )
}
