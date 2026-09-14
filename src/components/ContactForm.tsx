import { useState } from "react"

export default function ContactForm() {
  const [ok, setOk] = useState(false)

  if (ok) {
    return (
      <p>
        C’est noté. Le formulaire sera branché sur la boîte mail de la boutique avant l’ouverture des ventes.
      </p>
    )
  }

  return (
    <form
      className="form-grid"
      onSubmit={(event) => {
        event.preventDefault()
        setOk(true)
      }}
    >
      <label>
        Nom
        <input required name="name" autoComplete="name" />
      </label>
      <label>
        E-mail
        <input required type="email" name="email" autoComplete="email" />
      </label>
      <label>
        Message
        <textarea required name="message" rows={6} />
      </label>
      <button className="btn btn-accent btn-lg" type="submit">
        Envoyer
      </button>
    </form>
  )
}
