// Uwer controller functions

const mongoose = require('mongoose');
const db = require('../database/models') // User model requirements
// const User = require('../models/user');
const bcrypt = require('bcrypt');

console.log('Inside users_controller functions');
module.exports = {
    getUser: (req, res, next) => {
        mongoose.connection.readyState !== 1 ? console.log("Not yet connected") : console.log("Database is connected ");
        console.log("Inside getUser");
        if (req.user) {
            return res.json({ user: req.user });
        } else {
            return res.json({ user: null });
        }
    },
    getUsers: (req, res) => {
        console.log("Inside getUsers");
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
        mongoose.connection.readyState !== 1 ? console.log("Not yet connected") : console.log("Database is connected ");
        // console.log("Inside getUserInfo: ", req);

        db.User.find({
            userName: req.params.userName
        })
            .then((user) => {
                return res.json(user);
            })
            .catch(err => {
                return res.json(err);
            });
    },
    addUser: (req, res) => {
        mongoose.connection.readyState !== 1 ? console.log("Not yet connected") : console.log("Database is connected ");
        console.log("Inside addUser");

        const newUser = new db.User({
            userName: req.query.userName,
            firstName: req.query.firstName,
            lastName: req.query.lastName,
            password: bcrypt.hashSync(req.query.password, 10),
            userEmail: req.query.userEmail,
            accessLevel: req.query.accessLevel
        });

        newUser.save(function (error, doc) {
            if (error) return console.error(error);
            console.log("Saved");
        });

        return res.json();
    }

}
