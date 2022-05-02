const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());



const DB_URL = "mongodb://localhost:27017/employees";
const connectDb = () => {
    return mongoose.connect(DB_URL);
};

const Employee_scheme = new mongoose.Schema({
    id: Number,
    name: String,
    counter: Number
});

const Employee_model = mongoose.model("Employee", Employee_scheme);


const convertEmployees = (mongoEmployees) => mongoEmployees.map((mongoEmployee) => ({
    id: mongoEmployee._id,
    name: mongoEmployee.name,
    counter: mongoEmployee.counter,
}));

app.get("/Employees",async(req,res) =>{
    const Employee_list = await Employee_model.find();
    res.send(convertEmployees(Employee_list));
});

app.get("/Employees/:Employee_id", async (req,res)=>{
    const Employee_id = req.params.Employee_id;
    const Employee_single = await Employee_model.find({id: Employee_id});
    res.send(Employee_single);
})

app.post("/Employees",async (req,res)=>{
    const name = req.body.name;
    const counter = req.body.counter;

    const Employee_single = new Employee_model({
        name,
        counter
    });
    await Employee_single.save();
    const Employee_list = await Employee_model.find();
    res.send(convertEmployees(Employee_list));
});

app.delete("/Employees/:Employee_id",async (req,res)=>{
    const Employee_id = req.params.Employee_id;
    Employee_list = await Employee_model.find();
    await Employee_model.deleteOne({_id: Employee_list[Employee_id]._id})
    const Employee_list_new = await Employee_model.find();
    res.send(convertEmployees(Employee_list_new));
});

app.patch("/Employees/:Employee_id", async (req,res)=>{
    const Employee_id = req.params.Employee_id;
    Employee_list = await Employee_model.find();
    await Employee_model.updateOne({_id:Employee_list[Employee_id]._id },{$set:{counter: Employee_list[Employee_id].counter +1}});
    const Employee_list_new = await Employee_model.find();
    res.send(convertEmployees(Employee_list_new));
})

connectDb()
    .then(async () => {
        await app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    })
    .catch((err) => console.log(err));
