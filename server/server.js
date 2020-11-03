// API server file
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();
const userRoutes = require('./routes/users/users_routes')
const databaseConnection = require('./database/connection');

app.use(express.json());
app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});
