import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <h1>Dev Day-Book</h1>
      <p><Link to="/login">/login</Link></p>
      <p><Link to="/create-account">/create-account</Link></p>
    </div>
  )
}

export default Home
