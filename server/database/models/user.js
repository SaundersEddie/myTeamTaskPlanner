// Our user model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

// mongoose.promise = Promise;
console.log("Inide user.js under models");

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

// userSchema.methods = {
//     checkPassword: function(inputPassword) { 
//         return bcrypt.compareSync(inputPassword, this.password)
//     },
//     hashPassword: plainTextPassword => {
//         return bcrypt.hashSync(plainTextPassword, 10)
//     }
// }

// userSchema.pre('save', function (next) {
//     if (!this.password) {
//       // console.log('No password provided!');
//       next()
//     } else {
//       this.password = this.hashPassword(this.password)
//       next()
//     }
//   })

// Create reference to User & export
const User = mongoose.model('User', userSchema)
module.exports = User;
