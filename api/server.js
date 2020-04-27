const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRouter = require('../auth/authRouter');
const authenticator = require('../auth/authenticator');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api", authRouter);

// delete the code below after we get some more routers going
// this was just a middleware test
server.get("/api/test", authenticator, (req, res) => {
    res.status(200).json({ message: "if you can see this, the authenticator works" })
})



module.exports = server;