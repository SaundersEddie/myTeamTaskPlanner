// This is generally not run on prod, this will delete all
// current user entries and create a new one
// This is entirely self contained so there is no risk of
// accidental connection with the rest of the app


const mongoose = require ('mongoose');
const db = ("../models/user")
require ('dotenv').config();

console.log ("Executing database clear and reseed");

mongoose.connect(
    process.env.ATLAS_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );

  const userSeed = {
      userName: "Eddie",
      firstName: "Eddie",
      lastName: "Saunders",
      password: "Test12345",
      userEmail: "saunders.eddie@gmail.com",
      accessLevel: "User"
  }

//   Clear users then add
db.User.deleteMany({})
    .then(() => {
        console.log ("Adding users: ", userSeed)
    })
    .then(() => db.User.collection.insertMany(userSeed))
    .then((data) => {
        process.exit(0);
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })

