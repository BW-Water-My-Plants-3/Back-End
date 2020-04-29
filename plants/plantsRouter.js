const express = require("express");


const Plants = require("./plantsModel");

const router = express.Router();

// find
router.get("/", (req, res) => {
  Plants.find()
    .then(plants => {
      res.json(plants);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get plants." });
    });
});
// GET http://localhost:6870/api/plants