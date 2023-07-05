const express= require('express');
const port=8000;
const app=express();

app.get('/',function(req,res)
{
   res.end('<h1>Hi you are Connected to To Do List</h1>');
});

app.get('/money',function(req,res)
{
  res.end('<h1>Hi you are Connected to Money Management</h1>');
});

app.listen(port,function(err)
{
  if(err)
  {
    console.log('Error in Connecting Server',err);
    return;
  }
  else
  {
    console.log('Server is Up and Running on Port : ',port);
  }
});