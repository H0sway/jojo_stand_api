// Import express, instantiate the router

const express = require('express');
const standRouter = express.Router();

// Import the controller
const StandController = require('../controllers/stand-controller');

// Define all the routes
standRouter.get('/', StandController.findAll);
standRouter.get('/:id', StandController.findById);
standRouter.get('/stand-name', StandController.searchByName);
standRouter.get('/stand-user', StandController.searchByUser);

module.exports = standRouter;
