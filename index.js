import express from 'express';
import bodyParser from 'body-parser';
import usersRoute from './routes/users.js';
/* 
const express = require('express');
const bodyParser = require('body-parser');
const usersRoute = require('./routes/users');
*/
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/users', usersRoute);
app.get('/', (req, res) => {
    console.log('TEST');
    res.send('Hello APIs');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});