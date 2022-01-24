import express from "express";
import { v4 as uuidv4 } from "uuid";
uuidv4()
//const express = require('express');

const router = express.Router();

let users = [

]

//all routes in here are starting with /users
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
})

router.post('/', (req, res) => {
    console.log('POST ROUTE REACHED')
    const user = req.body
    const userID = uuidv4();

    users.push({ ...user, id: userID });
    res.send('POST ROUTE REACHED')
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database`)
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);
    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
    res.send('User with the id ${id} hab been updated');
})

export default router;