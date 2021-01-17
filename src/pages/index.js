import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import {Heading, Text} from '@chakra-ui/react'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading as="h1" size="lg" mb="2">Hi people</Heading>
    <Text>Welcome to your new Gatsby site.</Text>
    <Text>Now go build something great.</Text>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/"><Text color="purple.500">Go to page 2</Text></Link>
    <Link to="/using-typescript/"><Text color="purple.500">Go to "Using TypeScript"</Text></Link>
  </Layout>
)

export default IndexPage
