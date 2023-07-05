const express= require('express');
const port=8000;
const app=express();

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