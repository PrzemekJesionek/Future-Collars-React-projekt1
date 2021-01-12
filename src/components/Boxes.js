
import SingleBox from './SingleBox'


const Boxes = () => {
    let boxes = [
        {
            name: "Usługa 1",
            isNew: false,
            id: "service-1",
        },
        {
            name: "Usługa 2",
            isNew: false,
            id: "service-2",
        },
        {
            name: "Usługa 3",
            isNew: false,
            id: "service-3",
        },
        {
            name: "Usługa 4",
            isNew: true,
            id: "service-4",
        },
        {
            name: "Usługa 5",
            isNew: true,
            id: "service-5",
        },
        {
            name: "Usługa 6",
            isNew: true,
            id: "service-6",
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
                    < SingleBox isNew={boxElem.isNew} name={boxElem.name} newElem={newElem} id={boxElem.id} />
                )
            })

            }
        </div >
    )
}



export default Boxes