import { cta, wrapper } from './index.module.scss'

import React from 'react'

const Video = () => {
  return (
    <a href="https://krasserstoff.com/blond/1015/Tickets" target="_blank" className={wrapper} rel="noreferrer">
      <div className={cta}>
        Hier jetzt Tickets kaufen
      </div>
    </a>
  )
}

export default Video
