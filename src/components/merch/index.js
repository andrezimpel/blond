import { cta, wrapper } from './index.module.scss'

import React from 'react'

const Merch = () => {
  return (
    <a href="https://krasserstoff.com/blond/#merchcat4" target="_blank" className={wrapper} rel="noreferrer">
      <div className={cta}>
        Jetzt hier Merch kaufen
      </div>
    </a>
  )
}

export default Merch
