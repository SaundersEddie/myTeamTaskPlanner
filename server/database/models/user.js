// Our user model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

mongoose.promise = Promise;

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    }, 
    firstName: {
        type: String,
        unique: false,
        required: true
    },
    lastName: {
        type: String,
        unique: false,
        required: true
    },
    password: {
        type: String,
        unique: false,
        required: true
    },
    userEmail: {
        type: String,
        unique: true,
        required: true
    },
    accessLevel: {
        type: String,
        unqiue: false,
        required: true
    }
})
