const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

// Роуты для работы с группами
router.post('/groups', groupController.createGroup); // Создать новую группу
router.get('/groups', groupController.getAllGroups); // Получить все группы
router.get('/groups/:groupId', groupController.getGroupById); // Получить группу по ID
router.put('/groups/:groupId', groupController.updateGroup); // Обновить группу
router.delete('/groups/:groupId', groupController.deleteGroup); // Удалить группу

module.exports = router;
