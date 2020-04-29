const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRouter = require('../auth/authRouter');
const usersRouter = require('../users/usersRouter');
const plantsRouter = require('../plants/plantsRouter');
const authenticator = require('../auth/authenticator');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/plants", plantsRouter);

server.get("/", (req, res) => {
    res.status(200).json({ message: "API is up and ready to go!"})
})

// delete the code below after we get some more routers going
// this was just a middleware test
server.get("/api/test", authenticator, (req, res) => {
    res.status(200).json({ message: "if you can see this, the authenticator works" })
})



module.exports = server;