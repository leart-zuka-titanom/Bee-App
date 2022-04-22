import Employee_list from "./Employee-list";
import "./index.css";
import {Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function App(){
    return (
    <div id="content">
        <Container> 
        <Employee_list heading="Bee-Ranking"/>
        </Container>
    </div>);
}
 
export default App;