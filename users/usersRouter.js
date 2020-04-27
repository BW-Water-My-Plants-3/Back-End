const express = require('express');
const router = express.Router();
const Users = require('./usersModel');
const bcrypt = require('bcryptjs');

router.put("/:id", (req, res) => {
    let updatedUser = req.body;
    const id = req.params.id;
    // hash the password
    const rounds = process.env.HASH_ROUNDS || 14;
    const hash = bcrypt.hashSync(updatedUser.password, rounds);
    updatedUser.password = hash;
    // update user
    Users.update(id, updatedUser)
    .then(response => {
        if(response === 1){
            res.status(200).json({ message: "user updated successfully" });
        } else {
            res.status(400).json({ message: "Oops! Something went wrong" })
        }
    })
    .catch(error => res.status(500).json({ message: "could not update user at this time" }))
})

module.exports = router;