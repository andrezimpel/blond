import { container, cover, cta, headline, text, wrapper } from './index.module.scss'

import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Video = () => {
  return (
    <div className={wrapper}>
      <div className={container}>
        <div className={cover}>
          <a href="https://blond.ffm.to/meinboy" target="_blank" rel="noreferrer">
            <StaticImage
              src="../../images/mein-boy-cover.jpeg"
              width={500}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Blond - Mein Boy"
            />
          </a>
        </div>
        <div className={text}>
          <h1 className={headline}>
            Mein Boy
          </h1>
          <a href="https://blond.ffm.to/meinboy" target="_blank" className={cta} rel="noreferrer">
            Jetzt streamen
          </a>
        </div>
      </div>
    </div>
  )
}

export default Video
