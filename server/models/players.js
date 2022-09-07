const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    }
}, {timestamps: true});