import { active, footer, item, items } from './index.module.scss'

import { Link } from "gatsby"
import React from "react"

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
  <footer className={footer}>
    <div className={items}>
      {metaNavigation.map(({ to, name }, index) => (
        <Link key={index} to={to} className={item} activeClassName={active}>{name}</Link>
      ))}
    </div>
  </footer>
)

export default Footer
