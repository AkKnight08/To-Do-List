const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/todolist', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error Connecting to Database'));
db.once('open', function () {
    console.log('Database MongoDB Connected');
});