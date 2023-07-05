const express= require('express');
const path=require('path');
const { dirname }=require('path');
const port=8000;
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res)
{
   res.render('home',{title:"To Do List"});
});

app.get('/money',function(req,res)
{
  res.render('money',{title:"Manage Money"});
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