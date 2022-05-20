import { icon, video, wrapper } from './embed.module.scss'

import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const VideoEmbed = ({ url, lazy=false }) => {
  if (!lazy) {
    return (
      <div className={video}>
        <iframe width="560" height="315" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    )
  }

  return (
    <a className={wrapper} href={url} target="_blank" rel="noreferrer">
      <div className={icon}>
        <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
      </div>
      <StaticImage
        src="../../images/blond-mein-boy-thumbnail.jpg"
        aspectRatio={16/9}
        width={1108}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Blond - Mein Boy"
      />
    </a>
  )
}

export default VideoEmbed
