import "./layout.module.scss"

import Header from "./header"
import React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  )
}

export default Layout
