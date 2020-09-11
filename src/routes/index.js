const jwt = require('jsonwebtoken')
const express = require('express');

const routes = express.Router();

const userController = require('../controller/UserController');
const projectController = require('../controller/ProjectController');

routes.get('/users', userController.index);
routes.get('/token', function (req, res) {
    const token = jwt.sign({}, 'segredo',{expiresIn: '7d'});
  res.json(token)
})
routes.post('/users', userController.create);
routes.delete('/users/:email', userController.delete)

routes.get('/projects', projectController.index)
routes.get('/projects/:id', projectController.find)
routes.post('/projects', projectController.create)
routes.delete('/projects/:id', projectController.delete)

module.exports = routes;
