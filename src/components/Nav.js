// link to this component with <Nav />

import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {

  return (
    <nav className="header__nav">
      <ul className="header__ul">
        <li><Link className="header__link" to='/'>Home</Link></li>
        <li><Link className="header__link" to='/history'>History</Link></li>
        <li><Link className="header__link" to='/outputs'>Outputs</Link></li>
        <li><Link className="header__link" to='/apps'>Apps</Link></li>
        <li><Link className="header__link" to='/agentic-ai'>Agentic AI</Link></li>
        <li><Link className="header__link" to='/about'>About</Link></li>
        <li><Link className="header__link" to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav