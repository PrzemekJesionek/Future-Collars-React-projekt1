

const Box = (props) => {
    return (
        <div className="offer-service-box" id={props.key}>
            <div className="offer-service-box-text">
                {props.name}
                {props.isNew ? props.newElem : <></>}
            </div>
        </div>
    );
}

export default Box;