const mongoose = require('mongoose')

const ApplicationSchema = new mongoose.Schema({
    name: String,
    email: String,
    program: String

})

const ApplicationModel = mongoose.model("application", ApplicationSchema)

module.exports = ApplicationModel