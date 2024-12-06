const express = require('express');
const router = express.Router();
const examGradeController = require('../controllers/examGradeController');

// Роуты для работы с оценками за экзамены
router.post('/exam-grades', examGradeController.createExamGrade); // Создать оценку
router.get('/exam-grades', examGradeController.getAllExamGrades); // Получить все оценки
router.get('/exam-grades/:examGradeId', examGradeController.getExamGradeById); // Получить оценку по ID
router.put('/exam-grades/:examGradeId', examGradeController.updateExamGrade); // Обновить оценку
router.delete('/exam-grades/:examGradeId', examGradeController.deleteExamGrade); // Удалить оценку

module.exports = router;
