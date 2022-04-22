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

app.get("/Employees/:Employee", (req,res)=>{
    const Employee = req.params.Employee
    if (Employee < Employees.length){
        res.send(Employees[Employee]);
    }
    else{
        res.status(400).send({
            error: `Employee with ID ${Employee} does not exist`,
        });
    }
})

app.post("/Employees", (req,res) => {
    const Employee_single = req.body;
    Employees.push(Employee_single);
    res.send(Employees);

})

app.delete("/Employees/:Employee",(req,res)=>{
    const Employee = req.params.Employee;
    Employees.splice(Employee,1);
    res.send(Employees);
})

app.listen(port,() => {
    console.log(`Server is listening on port ${port}`)
})