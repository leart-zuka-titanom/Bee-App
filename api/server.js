const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const Employees = []

app.get("/Employees", (req,res) => {
    res.send(Employees);
});

app.get("/Employees/:Employee_id", (req,res)=>{
    const id = req.params.Employee_id
    if (id < Employees.length){
        res.send(Employees[id]);

    }
    else{
        res.status(400).send({
            error: `Employee with ID ${id} does not exist`,
        });
    }
})

app.post("/Employees", (req,res) => {
    const Employee_single = req.body;
    Employees.push(Employee_single);
    res.send(Employees);

})

app.delete("/Employees/:Employee_id",(req,res)=>{
    const id = req.params.Employee_id;
    console.log(id)
    Employees.splice(id,1);
    res.send(Employees);
})

app.patch("/Employees/:Employee_id", (req ,res )=>{
    const Employee_id = req.params.Employee_id; // = undefined
    console.log(Employee_id); // undefined
    Employees[0].counter += 1; //Hier sollte eig. statt der 0 die jeweilige id des Mitarbeiters stehen
    res.send(Employees);
})

app.listen(port,() => {
    console.log(`Server is listening on port ${port}`)
})