const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Роуты для пользователей
router.post('/users', userController.createUser); // Создание пользователя
router.get('/users', userController.getAllUsers); // Получение всех пользователей
router.get('/users/:userId', userController.getUserById); // Получение пользователя по ID
router.put('/users/:userId', userController.updateUser); // Обновление пользователя
router.delete('/users/:userId', userController.deleteUser); // Удаление пользователя

module.exports = router;
