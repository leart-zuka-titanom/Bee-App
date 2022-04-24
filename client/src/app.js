import Employee_list from "./Employee-list";
import "./index.css";
import {Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function App(){
    return (
    <div id="content">
        <Container> 
        <link href="./public/favicon.ico" rel="icon" type="image/x-icon"/>
        <Employee_list heading="Bee-Ranking"/>
        </Container>
    </div>);
} 
export default App;