const path = require('path');
let express = require('express');
let app = express();

//console.log("Hello World");

app.use('/public',express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})


app.get('/json',(req,res)=>{
    res.status(200).send({"message": "Hello json"});
})































 module.exports = app;
