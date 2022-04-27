import {ListGroup,Card,Button, ListGroupItem} from "react-bootstrap"

function Employee_single({name , counter, onAdd ,onDelete}){
    return (
    <ListGroup.Item className="border-0"> 
        <Card.Title>{name}</Card.Title>
        <Button onClick={onAdd}>{counter}</Button>
        <Button onClick={onDelete}>Delete</Button>
    </ListGroup.Item>
    );
}

export default Employee_single