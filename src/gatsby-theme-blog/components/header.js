import React from 'react'
import { Link } from 'gatsby'
import { NavLink, Box } from 'theme-ui'
import GithubCorner from 'react-github-corner'

const HomeLink = (props) => {
  return (
    <Link
      activeStyle={{
        color: 'black',
      }}
      style={{
        width: '100%',
        lineHeight: '80px',
        color: 'black',
        textAlign: 'center',
      }}
      {...props}
    >
      Kunish
    </Link>
  )
}

export default function Header() {
  return (
    <>
      <Box bg="primary">
        <NavLink as={HomeLink} to="/" opacity={1} color="black" />
      </Box>
      <GithubCorner href="https://github.com/kunish/blog" />
    </>
  )
}
