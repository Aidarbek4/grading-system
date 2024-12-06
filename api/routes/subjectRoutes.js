const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');

// Роуты для работы с предметами
router.post('/subjects', subjectController.createSubject); // Создать новый предмет
router.get('/subjects', subjectController.getAllSubjects); // Получить все предметы
router.get('/subjects/:subjectId', subjectController.getSubjectById); // Получить предмет по ID
router.put('/subjects/:subjectId', subjectController.updateSubject); // Обновить данные предмета
router.delete('/subjects/:subjectId', subjectController.deleteSubject); // Удалить предмет

module.exports = router;
