import React from 'react'

const AppProfile = (
    {
        title, 
        mainText,
        image
    }
) => {
  return (
    <article className="appProfile">

        <h3 className="appProfile__h3">
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