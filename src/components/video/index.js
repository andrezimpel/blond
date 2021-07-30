import { container, video, wrapper } from './index.module.scss'

import React from 'react'
import VideoEmbed from './embed'

const Video = () => {
  return (
    <div className={wrapper}>
      <div className={container}>
        <VideoEmbed url='https://www.youtube.com/embed/pExywtT_KeY'/>
      </div>
    </div>
  )
}

export default Video
