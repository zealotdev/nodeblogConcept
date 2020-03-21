const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome home');
});

const server = mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('DB connected succesful');
    }
);

app.listen(8080, () => {
    console.log('App is running on port 8080');
});
