import './small.css';
import './main.css';
import './large.css';
import Employee from './Employee'

function SectionAbout() {

    return (

        <section className="about" id="about">
            <div className="container">
                <h1>Nasi specjaliści</h1>

                <Employee />

            </div>
        </section>

    )
}

export default SectionAbout