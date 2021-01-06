import './small.css';
import './main.css';
import './large.css';

function Employee() {

    let people = [{
        name: 'Maria',
        lastName: 'Kowalska',
        jobPosition: 'Księgowa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        fotoUrl: 'https://www.padentalimplants.com/wp-content/uploads/2020/05/Smiling-woman-200.jpg',
        fotoAlt: 'Zdjęcie Marii'

    },

    {
        name: 'Daria',
        lastName: 'Janowska',
        jobPosition: 'Sekretarka',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        fotoUrl: 'https://content.latest-hairstyles.com/wp-content/uploads/blonde-wavy-lob-cut-for-a-square-face-500x500.jpg',
        fotoAlt: 'Zdjęcie Darii',
    }
        ,

    {
        name: 'Radosław',
        lastName: 'Pawłowski',
        jobPosition: 'Grafik',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        fotoUrl: 'https://www.byrdie.com/thmb/osJ_pwelu_BO04LbzM-NumhZY7Q=/200x200/filters:no_upscale():max_bytes(150000):strip_icc()/BarretWertz-5e1476ef95a94c479733c2336a6b6a0d.jpg',
        fotoAlt: 'Zdjęcie Radosława',
    }

    ]

    return (
        <>
            {people.map((person) => (
                <div className="about-employee" >
                    <div className="about-employee-pic">
                        <img className="about-employee-pic-img" src={person.fotoUrl} alt={person.fotoAlt} />
                    </div>
                    <div className="about-employee-desc">
                        <h2>{person.name} {person.lastName} - {person.jobPosition}</h2>
                        <p>
                            {person.description}
                        </p>
                    </div>
                </div>

            ))}
        </>

    )
}


export default Employee