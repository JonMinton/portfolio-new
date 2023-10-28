import Nav from "./Nav";
import LinkBox from "./LinkBox";

const Header = ( { title } ) => {
  return (
    <header className="header">
        <div className="header__top">
          <h1 className="header__h1">{title}</h1>
          <div className="header__contacts">
            <div className="header__contacts_contact">
                <LinkBox url='https://uk.linkedin.com/in/jon-minton-09480b13a' icon='linkedin' label='LinkedIn'/>
            </div>
            <div className="header__contacts_contact">
            <LinkBox url = 'https://twitter.com/JonMinton' icon = 'twitter' label = 'Twitter/X'/>
            </div>
            <div className="header__contacts_contact">
            <LinkBox url = 'https://github.com/JonMinton' icon = 'github' label = 'GitHub'/>
            </div>
            <div className="header__contacts_contact">
            <LinkBox url = 'https://wa.me/447866022543' icon = 'whatsapp' label = 'WhatsApp'/>
            </div>
          </div>

        </div>
        <Nav />
    </header>
  )
}

export default Header