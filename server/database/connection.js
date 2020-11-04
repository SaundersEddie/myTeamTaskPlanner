// Connect to database

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const databaseConnection = mongoose.connection;
databaseConnection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

module.exports = databaseConnection;
