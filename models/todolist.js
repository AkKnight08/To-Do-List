const mongoose = require('mongoose');

const lschema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    clicked:
    {
        type: Boolean,
        required: true
    }
});

const TodoList = mongoose.model('TodoList', lschema);

module.exports = TodoList;
