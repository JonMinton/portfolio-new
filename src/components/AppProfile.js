import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// get media query
import { useMediaQuery } from 'react-responsive'

const AppProfile = (
    {
        title,
        mainText,
        image,
        url,
        github,
        status
    }
) => {

    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })

    const imageElement = (
        <img
            className={`appProfile__img${url ? ' appProfile__img--clickable' : ''}`}
            src={image}
            alt={title}
            height="150"
            width="150"
        />
    )

  return (
    <article
        className = {
            isMobile ?
            "appProfile__mobile" :
            "appProfile"
        }
    >
        <h3
            className="appProfile__h3"
            style={isMobile ? {paddingBottom: "0.5rem"} : null}
        >
            {title}
            {status && <span className="appProfile__status">{status}</span>}
            {github && (
                <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="appProfile__github"
                    aria-label={`${title} on GitHub`}
                >
                    <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                </a>
            )}
        </h3>
        <p className="appProfile__p">
            {mainText}
        </p>
        <figure className="appProfile__figure">
            {url ? (
                <a href={url} target="_blank" rel="noreferrer" aria-label={`View ${title}`}>
                    {imageElement}
                </a>
            ) : (
                imageElement
            )}
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