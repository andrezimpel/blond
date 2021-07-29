import "./layout.module.scss"

import Footer from "./header"
import Header from "./footer"
import React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout
