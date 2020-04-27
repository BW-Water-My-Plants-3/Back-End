const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('./secrets');
const Users = require('../users/usersModel');

const router = express.Router();

// signup
router.post("/signup", (req, res) => {
    let user = req.body;
    if(!user.username || !user.phoneNumber || !user.password || user.phoneNumber.length !== 10){
        res.status(400).json({ message: "Must provide username, password, and 10-digit phone number to sign up" })
    } else {
         // hash the password
        const rounds = process.env.HASH_ROUNDS || 14;
        const hash = bcrypt.hashSync(user.password, rounds);
         // save hashed password
        user.password = hash;
        
        // add new user to the users table
        Users.add(user)
        .then(response => res.status(201).json({ 
            // send back only the username and the db-generated user id
            // not the rest of the user info
            message: "sign up successful",
            newUser: { id: response.id, username: response.username } 
        }))
        .catch(error => res.status(500).json({ message: "could not complete sign up at this time" }))
    }
})

// login


module.exports = router;