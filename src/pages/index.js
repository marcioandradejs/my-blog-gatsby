import * as React from "react"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PostItem
      slug="/about"
      background=""
      category="DEV"
      date="31 de Agosto de 2021"
      timeToRead="4 min de leitura"
      title="useState - React Hooks"
      description="Manipulando States com useState - React Hooks"
    />
  </Layout>
)

export default IndexPage
