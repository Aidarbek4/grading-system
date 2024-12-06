const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');

// Роуты для работы с оценками
router.post('/grades', gradeController.createGrade); // Создать новую оценку
router.get('/grades', gradeController.getAllGrades); // Получить все оценки
router.get('/grades/:gradeId', gradeController.getGradeById); // Получить оценку по ID
router.put('/grades/:gradeId', gradeController.updateGrade); // Обновить оценку
router.delete('/grades/:gradeId', gradeController.deleteGrade); // Удалить оценку

module.exports = router;
