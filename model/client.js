const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    field: {
        type: String,
        required: true,
    }
})

const client = mongoose.model('Client',clientSchema)

module.exports = client;