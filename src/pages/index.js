import Cover from '../components/cover'
import Layout from "../components/layout"
import Podcast from '../components/podcast'
import React from "react"
import Seo from "../components/seo"
import Video from '../components/video'

const IndexPage = () => (
  <Layout>
    <Seo title="Startseite" />
    <Video/>
    <Cover/>
    <Podcast/>
  </Layout>
)

export default IndexPage
