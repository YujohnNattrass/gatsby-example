import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage = ({ name }) => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to my site v2!!</h1>
      <Link to="/about">{name}</Link>
      <p>Hello world</p>
    </main>
  )
}

export default IndexPage;