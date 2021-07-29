import { Link } from "gatsby"
import React from "react"
import { header } from './index.module.scss'

const metaNavigation = [
  {
    name: "Impressum",
    to: "/impressum"
  },
  {
    name: "Datenschutz",
    to: "/datenschutz"
  },
  {
    name: "Kontakt",
    to: "/kontakt"
  },
  {
    name: "Presse",
    to: "/presse"
  }
]

const Footer = () => (
  <footer className={header}>
    <Link to="/">

    </Link>
  </footer>
)

export default Footer
