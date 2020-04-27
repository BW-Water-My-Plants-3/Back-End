const express = require('express');
const helmet = require('helmet');
const authRouter = require('../auth/authRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api", authRouter);


module.exports = server;