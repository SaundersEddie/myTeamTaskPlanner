// API server file
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());

const users = [];

// Build a test route for users, this is not for final production
app.get ('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req,res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 5);

    const user = { name: req.body.name, password: hashedPassword}
    users.push(user)
    res.status(201).send()
});

app.post('/users/login', (req,res) => {
    const user = users.find(user => user.name === req.body.name);
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send("Success")
    } else {
        res.send ("You get an F");
    }

})

app.listen(3000);
