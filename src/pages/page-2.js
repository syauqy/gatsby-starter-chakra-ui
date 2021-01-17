import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Heading, Text} from '@chakra-ui/react'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Heading as="h1" size="lg" mb="2">Hi from the second page</Heading>
    <Text>Welcome to page 2</Text>
    <Link to="/"><Text color="purple.500">Go back to the homepage</Text></Link>
  </Layout>
)

export default SecondPage
