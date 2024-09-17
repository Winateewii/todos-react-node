const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const TodoSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        required: true,
        default: false
    },
    updateDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Todos', TodoSchema);