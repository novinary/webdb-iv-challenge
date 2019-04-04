const express = require('express');
const helmet = require('helmet');

const tracksRouter = require('../dish/dish-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dish', tracksRouter);

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;
