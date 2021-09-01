import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Search from "../components/Search"

const SearchPage = () => (
  <Layout>
    <Seo title="Página de Pesquisa" />
    <Search />
  </Layout>
)

export default SearchPage
