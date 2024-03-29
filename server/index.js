const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const ApplicationModel = require('./models/Applications')

const app = express()


app.use(cors(
    {
        origin: ["https://prodigy-coders.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
))
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/prodigyprogrammers")

app.get("/", (req, res) =>{
    res.json("Test");
})
app.post('/register', (req, res)=>{
    ApplicationModel.create(req.body)
    .then(application => res.json(application))
    .catch(err => res.json(err))
})
app.listen(3001, ()=>{
    console.log("server running")
})
