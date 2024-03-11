const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const ApplicationModel = require('./models/Applications')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/prodigyprogrammers")

app.post('/register', (req, res)=>{
    ApplicationModel.create(req.body)
    .then(application => res.json(application))
    .catch(err => res.json(err))
})
app.listen(3001, ()=>{
    console.log("server running")
})