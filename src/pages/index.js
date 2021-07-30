import React, { lazy } from "react"

import Cover from '../components/cover'
import Layout from "../components/layout"
import Merch from '../components/merch'
import Podcast from '../components/podcast'
import Seo from "../components/seo"
import Tickets from '../components/tickets'
import loadable from '@loadable/component'

const Video = lazy(() => import('../components/video'))

const IndexPage = () => (
  <Layout>
    <Seo title="Startseite" url='/'/>
    <Video/>
    <Cover/>
    <Tickets/>
    <Podcast/>
    <Merch/>
  </Layout>
)

export default IndexPage
