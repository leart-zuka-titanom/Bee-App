import {ListGroup,Card,Button, ListGroupItem} from "react-bootstrap"

function Employee_single({name , counter, onadd ,onDelete}){
    return (
    <ListGroup.Item className="border-0"> 
        <Card.Title>{name}</Card.Title>
        <Card.Body>{counter}</Card.Body>
        <Button onClick={onadd}>+1 Bee</Button>
        <Button onClick={onDelete}>Delete</Button>
    </ListGroup.Item>
    );
}

export default Employee_single