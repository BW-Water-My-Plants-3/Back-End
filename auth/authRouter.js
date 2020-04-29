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
        const salt = bcrypt.genSaltSync(10);
        // const rounds = 14;
        const hash = bcrypt.hashSync(user.password, salt);
         // save hashed password
        user.password = hash;
        
        // add new user to the users table
        Users.add(user)
        .then(response => res.status(201).json( {message: "user created"}
            // send back only the username and the db-generated user id
            // not the rest of the user info
            // message: "sign up successful",
            // newUser: { id: response.id, username: response.username } 
        ))
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "could not complete sign up at this time", error: error.message })})
    }
})

// login
router.post("/login", (req, res) => {
    let { username, password } = req.body;

    // look up by username
    Users.findBy({ username })
    .then(user => {
        // check that they're using the right password
        if(user && bcrypt.compareSync(password, user.password)){
            // proceed to log them in
            // produce token
            const token = generateToken(user);
            // send token to the client
            res.status(200).json({ message: "login successful", token })
        } else {
            res.status(401).json({ message: "invalid username or password" })
        }
    })
    .catch(error => res.status(500).json({ message: "Oops! Something went wrong" }))
})

function generateToken(user){
    const payload = {
        userId: user.id,
        username: user.username
    };
    const secret = secrets.jwtSecret;

    const options = {
        expiresIn: "1d"
    };

    return jwt.sign(payload, secret, options);
}

module.exports = router;