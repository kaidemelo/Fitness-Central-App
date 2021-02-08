const express = require ('express');

//express app 
const app = express();

//listen for request 
app.listen(8000)

app.get('/', function(req, res) {
    res.render('index.html');
});