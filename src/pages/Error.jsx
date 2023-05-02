import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
        <h1>404</h1>
        <p>Not Found</p>
        <Link to="/">Back to home</Link>
    </>
  )
}

export default Error