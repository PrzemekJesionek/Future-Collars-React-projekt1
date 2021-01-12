
import NavLinks from '../components/NavLinks';


const Nav = () => {
    return (
        <nav>
            <div className="container">
                <a href="index.html">moja firma</a>
                <div className="links">
                    <NavLinks hrefOffer="#offer" hrefAbout="#about" hrefContact="#" classNameGeneral="nav-link" classNameContact="nav-link-contact" />
                </div>
            </div>
        </nav>
    )

}

export default Nav;