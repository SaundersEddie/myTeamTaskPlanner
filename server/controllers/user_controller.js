// Uwer controller functions

const mongoose = require('mongoose');
const db = require('../database/models') // User model requirements
// const User = require('../models/user');
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
        console.log("Inside getUserInfo");
        console.log(`params passed ${req.params.userName}`);
        // if (req.user) {

        db.User.find({
            userName: req.params.userName
        })
            .then((user) => {
                return res.json(user);
            })
            .catch(err => {
                res.json(err);
            });
        // }
        // else {
        // return res.json({ user: null });
        // }
    },
    addUser: (req, res) => {
        console.log("Inside addUser");
        // return res.json();
        // Test tp make sure all copies first
        const userTest = new db.User({
            userName: "TestyMcTestface",
            firstName: "Testy",
            lastName: "McTestface",
            password: "testypassword",
            userEmail: "testymctestface@gmail.com",
            accessLevel: "Test"
        });

        userTest.save(function (error, doc) {
            if (error) return console.error(error);
            console.log("Saved");
        });
    }

}
