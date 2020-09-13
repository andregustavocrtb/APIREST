const express = require('express');

const routes = express.Router();

const userController = require('../controller/UserController');
const projectController = require('../controller/ProjectController');

routes.post('/usersid', userController.getid);
routes.get('/users', userController.index);
routes.post('/user/register', userController.execute);
routes.post('/user/login', userController.create);
routes.delete('/users/:email', userController.delete)

routes.get('/projects', projectController.index)
routes.get('/projects/:id', projectController.find)
routes.post('/projects', projectController.create)
routes.delete('/projects/:id', projectController.delete)

module.exports = routes;
