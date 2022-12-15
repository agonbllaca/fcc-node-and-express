const path = require('path');
const dotenv = require('dotenv').config();
let express = require('express');
let app = express();

//console.log("Hello World");

app.use('/public',express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next();
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})


app.get('/json',(req,res)=>{
    let message = process.env.MESSAGE_STYLE=='uppercase'? "HELLO JSON" : "Hello json";
    res.status(200).send({message});
})































 module.exports = app;
