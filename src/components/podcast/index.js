import { container, cover, cta, headline, text, wrapper } from './index.module.scss'

import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Video = () => {
  return (
    <div className={wrapper}>
      <div className={container}>
        <div className={cover}>
          <a href="https://damussmandabeigewesensein.lnk.to/Podcast" target="_blank" rel="noreferrer">
            <StaticImage
              src="https://linkstorage.linkfire.com/medialinks/images/ac4e460e-c419-417f-bc7b-8a0789fdd69b/artwork.jpg"
              width={500}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Blond - Du und Ich"
            />
          </a>
        </div>
        <div className={text}>
          <h1 className={headline}>
            Der Podcast von BLOND
          </h1>
          <a href="https://damussmandabeigewesensein.lnk.to/Podcast" target="_blank" className={cta} rel="noreferrer">
            Jetzt abonnieren
          </a>
        </div>
      </div>
    </div>
  )
}

export default Video
