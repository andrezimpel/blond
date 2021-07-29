import React from "react"
import { container } from './index.module.scss'

const Text = ({ children }) => (
  <div className={container}>
    {children}
  </div>
)

export default Text
