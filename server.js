const express = require("express");

const application_router = require("./Router/application_router");

const server = express();

server.use(express.json());
server.use(application_router);

module.exports = server;