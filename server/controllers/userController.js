// Uwer controller functions

const db = require('../database/models') // User model requirements
const bcrypt = require('bcrypt');
const { model } = require('mongoose');

module.exports = {
    getUser: (req, res, next) => {
        if (req.user) {
            return res.json({user: req.user});
        } else {
            return res.json ({user: null});
        }
    },
    getUsers: (req, res) => {
        if (req.user) {
            db.User.find({})
            .then((users) => {
                return res.json(users);
            })
            .catch(err => {
                res.json(err)
            });
        } else {
            return res.json({ user: null});
        }
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
