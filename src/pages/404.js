import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {Heading, Text} from '@chakra-ui/react'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading as="h1" size="lg" mb="2">404: Not Found</Heading>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
    <Link to="/"><Text color="purple.500">Go back to the homepage</Text></Link>
  </Layout>
)

export default NotFoundPage
