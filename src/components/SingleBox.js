

const SingleBox = (props) => {
    return (
        <div className="offer-service-box" id={props.id}>
            <div className="offer-service-box-text">
                {props.name}
                {props.isNew ? props.newElem : <></>}
            </div>
        </div>
    );
}

export default SingleBox;