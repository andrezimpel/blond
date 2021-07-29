import { container, video, wrapper } from './index.module.scss'

import React from 'react'

const Video = () => {
  return (
    <div className={wrapper}>
      <div className={container}>
        <div className={video}>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/pExywtT_KeY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Video
