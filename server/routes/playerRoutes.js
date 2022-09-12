const express = require('express');

const playerController = require('../controllers/playerController');

const router = express.Router();

//player routes
router.get('/addPlayer', playerController.player_addPlayer_get);
router.get('/', playerController.player_index);
router.post('/', playerController.player_addPlayer_post);
router.get('/:id', playerController.player_details);
router.delete('/:id', playerController.player_delete);


module.exports = router;