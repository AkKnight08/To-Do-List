const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Akshay:eL4oroP1AWcWNmSk@todolist.zd17u5y.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error Connecting to Database'));
db.once('open', function () {
    console.log('Database MongoDB Connected');
});