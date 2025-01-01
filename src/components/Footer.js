import React from 'react'
import { useMediaQuery } from 'react-responsive'



const Footer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className = "footer__ul">
          <li className = "footer__li">
            <p className="footer__p">
              &copy; Jon Minton 2025
            </p>
          </li>
          {isMobile ? null :
            <li className = "footer__li">
            <p className="footer__p">
              Made in the Reactiverse
            </p>
            </li>
          
          }
        
        </ul>
      </nav>
        <p className="footer__p">
        </p>
    </footer>
  )
}

export default Footer