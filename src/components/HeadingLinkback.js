// get fontawesome icons indicating forwards, backwards, and root links
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faHome } from '@fortawesome/free-solid-svg-icons';



const HeadingLinkback = (
    {
        title,
        linkRoot,
        linkBackward,
        linkForward
    }
) => {
  return (
    <div className="banner">
        <h2 className="banner__h2">
            {title}
        </h2>
        <div className="banner__linkbox">
            {linkBackward ? 
                <a className="banner__link" href={linkBackward}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </a> : 
                <FontAwesomeIcon className="banner__link_dull" icon={faArrowLeft} />
            }
            {linkRoot ? 
                <a className="banner__link" href={linkRoot}>
                    <FontAwesomeIcon icon={faHome} />
                </a> : 
                <FontAwesomeIcon className="banner__link_dull" icon={faHome} />
                }
            {linkForward ? 
                <a className="banner__link" href={linkForward}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </a> : 
                <FontAwesomeIcon className="banner__link_dull" icon={faArrowRight} />
            }
        </div>
    </div>
  )
}



export default HeadingLinkback