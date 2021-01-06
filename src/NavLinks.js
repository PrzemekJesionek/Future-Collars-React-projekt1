import './reset.css';
import './small.css';
import './main.css';
import './large.css';



function NavLinks(props) {
    return (
        <>
            <a href={props.hrefAbout} className={props.classNameGeneral}>o nas</a>
            <a href={props.hrefOffer} className={props.classNameGeneral}>oferta</a>
            <a href={props.hrefContact} className={props.classNameContact}>oferta</a>
        </>
    );
}

export default NavLinks;