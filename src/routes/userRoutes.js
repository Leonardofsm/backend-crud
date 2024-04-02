// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/', userController.getUsers);
router.get('/exportUsersToExcel', userController.exportUsersToExcel);

// Implementar outras rotas aqui

module.exports = router;
