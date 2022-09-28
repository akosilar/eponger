const Player = require('../models/players');

const player_index = (req,res) => {
    Player.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('players', {title: 'Player List', players: result})
        })
        .catch((err) => {
            console.log(err);
        })
}


const player_details = (req,res) => {
    const id = req.params.id;
    Player.findById(id)
        .then((result) => {
            res.render('details', {player: result, title: 'Player Details'});
        })
        .catch((err) => {
            console.log(err);
        })
}

const player_addPlayer_get = (req,res) => {
    res.render('addPlayer', { title: 'Create a new Player'});
}

const player_addPlayer_post = (req,res) => {
    const player = new Player(req.body);
    player.save()
        .then((result) => {
            res.redirect('/players');
        })
        .catch((err)=> {
            console.log(err);
        })
}

const player_delete = (req,res) => {
    const id = req.params.id;

    Player.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect: '/players'})
        })
        .catch(err => {
            console.log(err);
        })
}

const player_search = (req,res) => {
    const search2 = req.query["playerSearch"];
    // console.log(req);
    // res.json(search2);

    Player.find({ 
        $or: [
            {lastName: search2},
            {firstName: search2}
        ]
    })
    .then((result) => {
        if(result.length != 0) {
            // console.log(result);
            res.render('playerSearchList', {title: 'Player Search List', players: result})
        } else {
            res.render('404', {error: 'No player', title: 'no player found'})
        }
    })
    .catch((err) => {
        res.render('404', {error: 'No player', title: 'This shit broooke'});
        console.log(err)
    })
    
}

module.exports = {
        player_index,
        player_details,
        player_addPlayer_get,
        player_addPlayer_post,
        player_delete,
        player_search
}