const express = require('express');
const mongoose = require('mongoose');
const Player = require('./models/players');


//express app
const app = express();

//connect to mongoDB
const dbURI = 'mongodb+srv://root:kp9pwxnbx7ahANPhhYLD@cluster0.1e4lsm5.mongodb.net/ePonger?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => app.listen (4000))
    .catch((err) => console.log(err));
//register view engine
app.set('view engine', 'ejs');

//listen for requests moved to inside the mongoose.connect after a successful db connection
// app.listen(3000);

//ePonger routes
app.get('/', (req,res) => {
    // res.sendFile('./client/index.html', {root: "../"});
    res.render('index', {title: 'Home'});
});

//redirect from home
app.get('/home', (req,res) => {
    res.redirect('/');
});

//go to player list
app.get('/players', (req,res) => {
    // res.sendFile('./client/index.html', {root: "../"});
    res.render('players', {title: 'Player List'});
});

//go to add players
app.get('/addPlayer', (req,res) => {
    res.render('addPlayer', {title: 'Add Player'});
});

//404
app.use((req,res) => {
    res.status(404).sendFile('./client/404.html', {root: "../"});
});