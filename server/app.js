const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(3000);

app.get('/', (req,res) => {
    res.sendFile('./client/index.html', {root: "../"});
});

//redirect from home
app.get('/home', (req,res) => {
    res.redirect('/');
});

//404
app.use((req,res) => {
    res.status(404).sendFile('./client/404.html', {root: "../"});
});