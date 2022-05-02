import {ListGroup,Card,Button,} from "react-bootstrap"

function Employee_single_create({id, name , counter, onAdd ,onDelete}){
    return (
    <ListGroup.Item className="border-0">
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{counter}</Card.Text>
                <Button onClick={()=>onDelete(id)}>Delete</Button>
                <Button onClick={()=>onAdd(id)}>+1 Bee</Button>
            </Card.Body>
        </Card>
    </ListGroup.Item>
    );
}

export default Employee_single_create