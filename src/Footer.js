import './App.css';
import './small.css';
import './main.css';
import './large.css';

function Footer() {
    return (
        <footer>
            <div className="container">
                <h1>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</h1>
                <div className="footer-pic">
                    <i className="fab fa-instagram fa-2x"></i>
                    <i className="fab fa-facebook-square fa-2x" ></i>
                </div>
            </div>
        </footer>
    )

}

export default Footer;