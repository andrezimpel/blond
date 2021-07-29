import Layout from "../components/layout"
import React from "react"
import Seo from "../components/seo"
import Text from '../components/text'

const NotFoundPage = () => (
  <Layout>
    <Seo title="Seite nicht gefunden" />
    <Text>
      Sorry, aber die Seite existiert nicht.
    </Text>
  </Layout>
)

export default NotFoundPage
