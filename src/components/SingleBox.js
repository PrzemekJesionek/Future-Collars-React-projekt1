

const SingleBox = (props) => {
    return (
        <div className="offer-service-box">
            <div className="offer-service-box-text">
                {props.name}
                {props.isNew ? props.newElem : <></>}
            </div>
        </div>
    );
}

export default SingleBox;