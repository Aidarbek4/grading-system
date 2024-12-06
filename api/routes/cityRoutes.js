const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

// Роуты для работы с городами
router.post('/cities', cityController.createCity); // Создание города
router.get('/cities', cityController.getAllCities); // Получение всех городов
router.get('/cities/:cityId', cityController.getCityById); // Получение города по ID
router.put('/cities/:cityId', cityController.updateCity); // Обновление города
router.delete('/cities/:cityId', cityController.deleteCity); // Удаление города

module.exports = router;
