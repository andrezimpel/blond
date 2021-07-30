import { container, wrapper } from './index.module.scss'

import React from 'react'
import VideoEmbed from './embed'

const Video = () => {
  return (
    <div className={wrapper}>
      <div className={container}>
        <VideoEmbed url='https://www.youtube.com/watch?v=pExywtT_KeY' lazy={true}/>
      </div>
    </div>
  )
}

export default Video
