import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => (
    <nav>
      <Link to='/'>Home</Link>
      {" "}
      <Link to='/hourly'>Hourly Weather</Link>
      {" "}
      <Link to='/about'>About</Link>
      {" "}
      <Link to='/current'>Current</Link>
    </nav>
)