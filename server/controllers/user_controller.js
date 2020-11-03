// Uwer controller functions

const mongoose = require('mongoose');
const db = require('../database/models') // User model requirements
// const MyUser = require('../database/models/user');

const bcrypt = require('bcrypt');

console.log('Inside users_controller functions');
module.exports = {
    getUser: (req, res, next) => {
        console.log("Inside getUser");
        if (req.user) {
            return res.json({ user: req.user });
        } else {
            return res.json({ user: null });
        }
    },
    getUsers: (req, res) => {
        mongoose.connection.readyState !== 1 ? console.log("Not yet connected") : console.log("Database is connected ");
        db.User.find()
            .then((users) => {
                return res.json(users)
            })
            .catch(error => {
                res.json(error)
            });
    },
    getUserInfo: (req, res) => {
        if (req.user) {
            db.User.find({
                userName: req.params.userName
            })
                .then((user) => {
                    return res.json(user);
                })
                .catch(err => {
                    res.json(err);
                });
        } else {
            return res.json({ user: null });
        }
    }
}
