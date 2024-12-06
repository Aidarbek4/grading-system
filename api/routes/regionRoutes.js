const express = require('express');
const router = express.Router();
const regionController = require('../controllers/regionController');

// Роуты для работы с регионами
router.post('/regions', regionController.createRegion); // Создание региона
router.get('/regions', regionController.getAllRegions); // Получение всех регионов
router.get('/regions/:regionId', regionController.getRegionById); // Получение региона по ID
router.put('/regions/:regionId', regionController.updateRegion); // Обновление региона
router.delete('/regions/:regionId', regionController.deleteRegion); // Удаление региона

module.exports = router;
