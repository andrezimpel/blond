import { container, cover, cta, headline, text, wrapper } from './index.module.scss'

import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Video = () => {
  return (
    <div className={wrapper}>
      <div className={container}>
        <div className={cover}>
          <a href="https://blond.ffm.to/duundich" target="_blank" rel="noreferrer">
            <StaticImage
              src="../../images/blond-du-und-ich-cover.jpg"
              width={500}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Blond - Du und Ich"
            />
          </a>
        </div>
        <div className={text}>
          <h1 className={headline}>
            Du und Ich
          </h1>
          <a href="https://blond.ffm.to/duundich" target="_blank" className={cta} rel="noreferrer">
            Jetzt streamen
          </a>
        </div>
      </div>
    </div>
  )
}

export default Video
