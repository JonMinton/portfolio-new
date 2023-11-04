import React from 'react'

// get media query
import { useMediaQuery } from 'react-responsive'

const AppProfile = (
    {
        title, 
        mainText,
        image
    }
) => {

    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })

  return (
    <article 
        className = {
            isMobile ? 
            "appProfile__mobile" : 
            "appProfile"
        }
    >
    <p> {isMobile} </p>
        <h3 
            className="appProfile__h3"
            style={isMobile ? {paddingBottom: "0.5rem"} : null}    
        >
            {title}
        </h3>
        <p className="appProfile__p">
            {mainText}
        </p>
        <figure className="appProfile__figure">
            <img 
                className="appProfile__img" 
                src={image} 
                alt={title} 
                height="150"
                width="150"
            />
            <figcaption className="offscreen">
                {title}
            </figcaption>
        </figure>
    </article>
  )
}

// add default for image
AppProfile.defaultProps = {
    image: "https://via.placeholder.com/600"
}

export default AppProfile