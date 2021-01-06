import './small.css';
import './main.css';
import './large.css';
import Box from './Box.js'


function SectionOffer() {
    return (
        <section className="offer" id="offer">
            <div className="container">
                <h1>Czym zajmuje się nasza firma?</h1>
                <Box />
            </div>
        </section>

    )
}

export default SectionOffer