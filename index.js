const express = require('express');
const path = require('path');
const { dirname } = require('path');
const port = 8000;

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

var todolist = [
  {
    task: "Complete HomeWork",
    type: "School",
    date: "12/08/2001",
    time: "12 Am"
  },
  {
    task: "Complete HomeWork",
    type: "School",
    date: "12/08/2001",
    time: "12 Am"
  },
  {
    task: "Complete HomeWork",
    type: "School",
    date: "12/08/2001",
    time: "12 Am"
  },
  {
    task: "Complete HomeWork",
    type: "School",
    date: "12/08/2001",
    time: "12 Am"
  }
];

app.get('/', function (req, res) {
  res.render('home', { title: "To Do List", todolist: todolist });
});

app.get('/money', function (req, res) {
  res.render('money', { title: "Manage Money" });
});

app.post('/create_task',function(req,res)
{
   console.log(req.body)
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