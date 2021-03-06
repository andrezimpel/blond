import "./layout.module.scss"

import Footer from "./footer"
import Header from "./header"
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
