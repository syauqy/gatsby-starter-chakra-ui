import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {useColorMode, Button, Flex, Box, Spacer, Heading, IconButton} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header = ({siteTitle}) => {
  const {colorMode, toggleColorMode} = useColorMode()
    return (
        <Flex justify="center" align="center"
            style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`
        }}>
          <Box 
                style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`
            }}>
                <Heading as="h1" size="xl" style={{
                    margin: 0
                }}>
                    <Link
                        to="/"
                        style={{
                        color: `white`,
                        textDecoration: `none`
                    }}>
                        {siteTitle}
                    </Link>
                </Heading>
            </Box>
            <Spacer />
            <Box mr="4">
            <IconButton onClick={toggleColorMode} isRound colorScheme="white">
                {colorMode === "light"
                    ? <MoonIcon color="white" />
                    : <SunIcon color="white" />}
            </IconButton>
            </Box>
        </Flex>
    )
}



Header.propTypes = {
    siteTitle: PropTypes.string
}

Header.defaultProps = {
    siteTitle: ``
}

export default Header
