import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const PublicationItem = (
    {
        year, 
        title, 
        journal,
        url,
        authors,
        id
    }

) => {
    return (
    <li className = "output__child">
        {authors}&nbsp;
        {year}&nbsp;
        "{title}"&nbsp;
        <strong>{journal}</strong>
        &nbsp;
        {url && (
            <a href={url}>
                <FontAwesomeIcon icon={faLink} />
            </a>
        )}
    </li>
    );
};

export default PublicationItem;
