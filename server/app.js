const express = require('express');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/playerRoutes');

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

//to accept form data
app.use(express.urlencoded({ extended: true})); 

app.get('/', (req,res) => {
    res.redirect('/players');
});

app.use('/players', playerRoutes);

//404
app.use((req,res) => {
    // res.status(404).sendFile('./client/404.html', {root: "../"});
    res.status(404).render('404', {title: 404});
});