import {Badge} from "react-bootstrap"

function MyBadge({text, color}) {
    
    return(
        <Badge variant={color}>{text}</Badge>
    )
}

export default MyBadge