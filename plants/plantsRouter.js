const express = require('express');
const Plants = require('./plantsModel');
const authenticator = require('../auth/authenticator');
const router = express.Router();

// GET / -- READ ALL PLANTS
router.get("/", authenticator, (req, res) => {
    const user_id = req.decodedToken.userId;
    Plants.getAll(user_id)
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json({ message: "could not retrieve plants at this time" }));
})

// GET /:ID -- READ ONE PLANT BY ID
router.get("/:id", authenticator, (req, res) => {
    const id = req.params.id;
    Plants.findById(id)
    .then(response => {
        if(!response) {
            res.status(400).json({ message: "there is no plant with this id" })
        } else {
            res.status(200).json(response)
        }
    })
    .catch(error => res.status(500).json({ message: "could not retrieve this plant at this time" }))
})

// POST / -- CREATE NEW PLANT
router.post("/", authenticator, (req, res) => {
    const newPlant = req.body;
    const user_id = req.decodedToken.userId;
    newPlant.user_id = user_id;
    if(!newPlant.nickname || !newPlant.species || !newPlant.h2oFrequency){
        res.status(400).json({ message: "Must provide nickname, species, and h2oFrequency" })
    } else {
        Plants.add(newPlant)
        .then(response => res.status(201).json({ message: "plant created"}))
        .catch(error => res.status(500).json({ message: "could not add new plant at this time", error: error.message }))
    }
})

// PUT /:ID -- UPDATE PLANT BY ID
router.put("/:id", authenticator, (req, res) => {
    const id = req.params.id;
    const updatedPlant = req.body;
    Plants.update(id, updatedPlant)
    .then(response => {
        if(response === 1){
            res.status(200).json({ message: "plant updated" })
        } else {
            res.status(400).json({ message: "could not find the plant with this id to update it" })
        }
    })
    .catch(error => res.status(500).json({ message: "could not update this plant at this time" }))
})


// DELETE /:ID -- DELETE PLANT BY ID
router.delete("/:id", authenticator, (req, res) => {
    const id = req.params.id;
    Plants.remove(id)
    .then(response => {
        if(response === 1){
            res.status(200).json({ message: "plant deleted"})
        } else {
            res.status(400).json({ message: "could not find this plant to delete it" })
        }
    })
    .catch(error => res.status(500).json({ message: "could not delete this plant at this time" }))
})

module.exports = router;