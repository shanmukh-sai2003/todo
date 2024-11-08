
const NotFound = (props) => {
    const { message } = props;

    return (
        <div className="no-elements">
            <p>{ message }</p>
        </div>
    );
}

export default NotFound;