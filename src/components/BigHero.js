// import { Link } from "react-router-dom"

import background from '../img/pexels-pixabay-268533.jpg'


const BigHero = (
  { firstView }
    // { title, sideText, bgImage, images }
) => {

  let imageStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
    
  return (
    <section 
      className="bigHero"
      style = {imageStyle}
    >
        <div className="bigHero__top bigHero__h2">
          Hi, I'm Jon.&nbsp;&nbsp; 
          <span 
            className={firstView ? "textDelay_1s" : ""}
          >
            I'm interested in...
          </span>
        </div>
        <div className="bigHero__bottom-left"></div>
        <div className="bigHero__bottom-right">
          <nav className="bigHero__nav">
            <ul className="bigHero__ul bigHero__parent">
              <li>
                <a 
                  className={"bigHero__link bigHero__child demography".concat(firstView ? " textDelay_2s" : "")} href="#demography-and-risk">Demography & Risk</a></li>
              <li>
                <a 
                  className={"bigHero__link bigHero__child data-science".concat(firstView ? " textDelay_3s" : "")} href="#data-science">Data Science</a></li>
              <li>
                <a 
                  className={"bigHero__link bigHero__child software".concat(firstView ? " textDelay_4s" : "")} href="#software-development">Software Development</a></li>
            </ul>
          </nav>
        </div>
    </section>
  )
}

export default BigHero