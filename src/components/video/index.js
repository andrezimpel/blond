import { container, wrapper } from './index.module.scss'

import React from 'react'
import VideoEmbed from './embed'

const Video = () => {
  return (
    <div className={wrapper}>
      <div className={container}>
        <VideoEmbed url='https://www.youtube.com/embed/hzxxc8pgU-U?feature=oembed'/>
      </div>
    </div>
  )
}

export default Video
