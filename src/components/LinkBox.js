
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook, faBlog, faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn, faGithub, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

// import './LinkBox.css';


const LinkBox = ({ url, icon, label }) => {

  const getIcon = (icon) => {
    switch (icon) {
      case 'github':
        return faGithub;
      case 'linkedin':
        return faLinkedinIn;
      case 'twitter':
        return faTwitter;
      case 'whatsapp':
        return faWhatsapp;
      case 'book':
        return faBook;
      case 'blog':
        return faBlog;
      case 'statsSite':
        return faGlobe;
      default:
        return null;
    }
  };

  return (
    <>
      <a
          href={url}
          rel="noreferrer"
          target="_blank"
          aria-label={label}
      >
        <FontAwesomeIcon icon={getIcon(icon)} aria-hidden="true" />
      </a>
    </>
  );
};

export default LinkBox;
