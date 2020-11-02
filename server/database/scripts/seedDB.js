// This is generally not run on prod, this will delete all
// current user entries and create a new one
// This is entirely self contained so there is no risk of
// accidental connection with the rest of the app


const mongoose = require ('mongoose');
const User = require ('../models/user');
const bcrypt = require('bcrypt');
require ('dotenv').config();    

let ourHashedPassword = bcrypt.hashSync("Test1234", 10);

console.log ("Executing database clear and reseed");

mongoose.connect(
    process.env.ATLAS_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );

const databaseConnection = mongoose.connection;
databaseConnection.once("open", () => {
console.log("MongoDB database connection established successfully");

  const userSeed = new User ({
      userName: "EddieTestPassword",
      firstName: "Eddie",
      lastName: "Saunders",
      password: ourHashedPassword,
      userEmail: "saunders.eddie@gmail.com",
      accessLevel: "User"
  });

//   Clear users then add
User.deleteMany({})
    .then((data) => {
        console.log ("Adding users: ", userSeed);
        userSeed.save(function(error, doc) {
            if (error) return console.error(error);
            console.log ("Saved");
            process.exit(0);
        });
    })
    .catch((err) => {
        console.log (`Error with database: ${err}`);
        process.exit(1);
    });
});



    // .then(() => User.collection.insertMany(userSeed))
    // .then((data) => {
    //     process.exit(0);
    // })
    // .catch((error) => {
    //     console.error(error);
    //     process.exit(1);

