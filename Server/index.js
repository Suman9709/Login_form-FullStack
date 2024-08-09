const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const PORT = 8080;
const app = express()

const EmployeeModel = require('./models/employee.model')

app.use(express.json())
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Employee')

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success")
                }
                else {
                    res.json("incorrect password")
                }
            }
            else {
                res.json("invalid user")
            }
        })
        .catch(err => res.status(500).json({ error: "Internal server error" }))
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.status(400).json(err));
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})