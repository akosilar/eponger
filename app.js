const express = require('express');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/playerRoutes');
require('dotenv').config();

//express app
const app = express();
const port = process.env.PORT || 4000

//connect to mongoDB
const dbURI = process.env.dbURI;
mongoose.connect(dbURI)
    .then((result) => app.listen (port))
    .catch((err) => console.log(err));
//register view engine
app.set('view engine', 'ejs');

//listen for requests moved to inside the mongoose.connect after a successful db connection
// app.listen(3000);

//middleware & static files. Anything in the public folder will be accessible. No ned toe specify the path.
app.use(express.static('public'));

//to accept form data
app.use(express.urlencoded({ extended: true})); 

app.get('/', (req,res) => {
    res.redirect('/players');
});

app.use('/players', playerRoutes);

//404
app.use((req,res) => {
    // res.status(404).sendFile('./client/404.html', {root: "../"});
    res.status(404).render('404', {error: 'page not found', title: 404});
});