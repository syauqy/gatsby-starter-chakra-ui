// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {Heading, Text} from '@chakra-ui/react'

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Using TypeScript" />
    <Heading as="h1" size="lg" mb="2">Gatsby supports TypeScript by default!</Heading>
    <Text>
      This means that you can create and write <em>.ts/.tsx</em> files for your
      pages, components etc. Please note that the <em>gatsby-*.js</em> files
      (like gatsby-node.js) currently don't support TypeScript yet.
    </Text>
    <Text>
      For type checking you'll want to install <em>typescript</em> via npm and
      run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
    </Text>
    <Text>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </Text>
    <Text>
      To learn more, head over to our{" "}
      <Link to="https://www.gatsbyjs.com/docs/typescript/">
        <Text color="purple.500">documentation about TypeScript</Text>
      </Link>
      .
    </Text>
    <Link to="/"><Text color="purple.500">Go back to the homepage</Text></Link>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
