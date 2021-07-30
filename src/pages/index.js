import Cover from '../components/cover'
import Layout from "../components/layout"
import Merch from '../components/merch'
import Podcast from '../components/podcast'
import React from "react"
import Seo from "../components/seo"
import Tickets from '../components/tickets'
import Video from '../components/video'

const IndexPage = () => (
  <Layout>
    <Seo title="Startseite" url='/'/>
    <Video/>
    <Cover/>
    <Podcast/>
    <Tickets/>
    <Merch/>
  </Layout>
)

export default IndexPage
