const express = require('express');
const { type } = require('os');
const path = require('path');
const { dirname } = require('path');
const port = 8000;

const db = require('./config/mongoose');
const ToDoList = require('./models/todolist');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/', function (req, res) {

  ToDoList.find({}).then((list) => {
    res.render('home', { title: "To Do List", todolist: list });
  }).catch((err) => {
    console.log('Error in Fetching To Do List From DB :', err);
  });
});

app.get('/money', function (req, res) {
  res.render('money', { title: "Manage Money" });
});

app.post('/create_task', function (req, res) {
  ToDoList.create(
    {
      task: req.body.task,
      type: req.body.type,
      date: req.body.date,
      time: req.body.time
    }
  ).then((newtask) => {
    return res.redirect('back');
  }).catch((err) => {
    console.log('Error in Creating the Task ', err);
    return res.redirect('back');
  });
});

app.get('/del/', async function (req, res) {
  try {
    let id = req.query.id;
    await ToDoList.findByIdAndDelete(id);
    return res.redirect('back');
  }
  catch
  {
    console.log('Error in Deleting the Task ', err);
    return res.redirect('back');
  }
});

app.listen(port, function (err) {
  if (err) {
    console.log('Error in Connecting Server', err);
    return;
  }
  else {
    console.log('Server is Up and Running on Port : ', port);
  }
});