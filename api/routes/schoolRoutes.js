const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// Роуты для работы с учебными заведениями
router.post('/schools', schoolController.createSchool); // Создание учебного заведения
router.get('/schools', schoolController.getAllSchools); // Получение всех учебных заведений
router.get('/schools/:schoolId', schoolController.getSchoolById); // Получение учебного заведения по ID
router.put('/schools/:schoolId', schoolController.updateSchool); // Обновление учебного заведения
router.delete('/schools/:schoolId', schoolController.deleteSchool); // Удаление учебного заведения

module.exports = router;
