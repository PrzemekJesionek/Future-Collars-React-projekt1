import './small.css';
import './main.css';
import './large.css';



function Box() {
    let boxes = [
        {
            name: "Usługa 1",
            isNew: true
        },
        {
            name: "Usługa 2",
            isNew: true
        },
        {
            name: "Usługa 3",
            isNew: false
        },
        {
            name: "Usługa 4",
            isNew: true
        },
        {
            name: "Usługa 5",
            isNew: true
        },
        {
            name: "Usługa 6",
            isNew: true
        },

    ]
    const newElem = (
        <>
            <p>(nowość)</p>
            <div className="dot"></div>
        </>
    )

    return (
        <div className="offer-wrapper">

            {boxes.map(function (boxElem) {
                return (
                    <div className="offer-service-box">
                        <div className="offer-service-box-text">
                            {boxElem.name}
                            {boxElem.isNew ? newElem : <></>}
                        </div>
                    </div>
                )
            })

            }
        </div>
    )
}



export default Box