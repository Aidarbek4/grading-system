const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// Роуты для работы с комнатами
router.post('/rooms', roomController.createRoom); // Создать новую комнату
router.get('/rooms', roomController.getAllRooms); // Получить все комнаты
router.get('/rooms/:roomId', roomController.getRoomById); // Получить комнату по ID
router.put('/rooms/:roomId', roomController.updateRoom); // Обновить данные комнаты
router.delete('/rooms/:roomId', roomController.deleteRoom); // Удалить комнату

module.exports = router;
