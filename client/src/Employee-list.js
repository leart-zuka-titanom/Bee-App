import React from "react";
import Employee_single from "./employee"
import {Row,Col,Container,ListGroup,Form,Button} from "react-bootstrap"

const API_URL = "http://localhost:4000"

function Employee_list({ heading }) {
    const [Employees, setItems] = React.useState([]);

    React.useEffect(() => {
        fetch(`${API_URL}/Employees`)
        .then((response) => 
        response.json().then((Employees)=> setItems(Employees)))
        .catch((error) => console.error(error)); 
    }, [setItems]);

    function handleAdd(event){
        event.preventDefault();
        const name = event.target.elements.name.value;
        const counter = event.target.elements.counter.value;
        fetch(`${API_URL}/Employees`,{
            method:"POST",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                counter
            }),
        }).then((response) => response.json().then((Employees) => setItems(Employees)) 
        ).catch((error)=>console.log(error));
    }
    
    function handleDelete(index) {
        fetch(`${API_URL}/Employees/${index}`,{
            method:"DELETE",
            headers:{
                Accept:"application/json",
            },
        })
        .then((response)=>
        response.json().then((Employees)=>setItems(Employees))
        )
        .catch((error)=>console.log(error));
      }

    return (
    <Container>
        <h1>{heading}</h1>
    <Row>    
         <Col>
            <ListGroup id="Employee_list" variant="flush">
            {Employees.map((employee,index)=> (
            <Employee_single 
            key={index} 
            name={employee.name}
            counter={employee.counter}
            onDelete={() => handleDelete(index)}
            />
        ))}      
            </ListGroup>    
         </Col>
    <Col>
    <Form onSubmit={handleAdd} >
        <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Name:</Form.Label>
        <Form.Control type="text" id ="name"/>
        </Form.Group>
        <br />
        <Form.Group className="mb-3">
        <Form.Label htmlFor='counter'>Count:</Form.Label>
        <Form.Control id="counter" as="textarea"/>
        </Form.Group>
        <br />
        <Button type="Add">Add employee</Button> 
    </Form>
    </Col>
    </Row>
    </Container >
    );
}

export default Employee_list;