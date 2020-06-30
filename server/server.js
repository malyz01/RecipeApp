if (process.env.NODE_ENV !== 'production') require('dotenv').config();
require('./config/mongodb');
const path = require('path');
const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(express.static(path.resolve('server', 'public')));

server.use('/api/v1/spoonacular', require('./routes/spoonacular'));

module.exports = server;
