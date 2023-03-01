import { Spinner } from "react-bootstrap";

function SpinnerLoading() {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

export default SpinnerLoading;