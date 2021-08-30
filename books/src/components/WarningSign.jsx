import { Alert } from "react-bootstrap";


function TextAlert ({text}) {
    return(
        <Alert variant='danger'>
        {text}
        </Alert>
     )
}

export default TextAlert