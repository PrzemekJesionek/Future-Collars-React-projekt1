
import SingleBox from './SingleBox'


const Box = () => {
    let boxes = [
        {
            name: "Usługa 1",
            isNew: false
        },
        {
            name: "Usługa 2",
            isNew: false
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
                    < SingleBox isNew={boxElem.isNew} name={boxElem.name} newElem={newElem} />
                )
            })

            }
        </div >
    )
}



export default Box