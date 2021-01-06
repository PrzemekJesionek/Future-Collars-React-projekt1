import './App.css';
import './small.css';
import './main.css';
import './large.css';

import SectionLandingPage from './SectionLandingPage'
import SectionAbout from './SectionAbout'
import SectionOffer from './SectionOffer';

function Main() {
    return (
        <>
            <SectionLandingPage />
            <SectionAbout />
            <SectionOffer />
        </>
    )

}

export default Main;