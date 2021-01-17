import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {useColorMode, Button, Flex, Box, Spacer, Heading, IconButton} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header = ({siteTitle}) => {
  const {colorMode, toggleColorMode} = useColorMode()
    return (
            <header id="header"
            style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
            transition: `box-shadow 0.2s ease 0s`,
    position: `fixed`,
    top: `0px`,
    zIndex: 1,
    left: `0px`,
    right: `0px`,
    borderTop: `6px solid rgb(56, 178, 172)`,
    width: `100%`
        }}>
            <Flex justify="center" align="center">
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
          
        </header>

        
    )
}



Header.propTypes = {
    siteTitle: PropTypes.string
}

Header.defaultProps = {
    siteTitle: ``
}

export default Header
