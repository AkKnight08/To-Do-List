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
var todolist=[
{
  type:"Afdf",
  task:"afsf",
  date:"dff",
  time:"asfafd"
}
];

app.get('/', function (req, res) {
  res.render('home', { title: "To Do List", todolist: todolist });
});

app.get('/money', function (req, res) {
  res.render('money', { title: "Manage Money" });
});

app.post('/create_task', function (req, res) {
  todolist.push(
    {
      task: req.body.task,
      type: req.body.type,
      date: req.body.date,
      time: req.body.time
    }
  );
  return res.redirect('back');
});

app.get('/del/', function (req, res) {
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