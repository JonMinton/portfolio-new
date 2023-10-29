
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn, faGithub, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

// import './LinkBox.css';


const LinkBox = ({ url, icon }) => {



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
      default:
        return null;
    }
  };

  return (
    <>
      <a 
          href={url} 
          rel="noreferrer"
          target = "_blank"
      >
        <FontAwesomeIcon icon={getIcon(icon)}  />
      </a>
    </>
  );
};

export default LinkBox;
