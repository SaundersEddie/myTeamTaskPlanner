// Connect to database

const mongoose = require ('mongoose');

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
