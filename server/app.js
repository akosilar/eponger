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

//middleware & static files. Anything in the public folder will be accessible. No ned toe specify the path.
app.use(express.static('public'));

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
    // res.render('players', {title: 'Player List'});
    Player.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('players', {title: 'Player List', players: result})
        })
        .catch((err) => {
            console.log(err);
        })
});

//go to add players
app.get('/addPlayer', (req,res) => {
    res.render('addPlayer', {title: 'Add a new Player'});
});

//404
app.use((req,res) => {
    // res.status(404).sendFile('./client/404.html', {root: "../"});
    res.status(404).render('404', {title: 404});
});