const express = require('express');
const router = express.Router();
const examController = require('../controllers/examController');

// Роуты для работы с экзаменами
router.post('/exams', examController.createExam); // Создать экзамен
router.get('/exams', examController.getAllExams); // Получить все экзамены
router.get('/exams/:examId', examController.getExamById); // Получить экзамен по ID
router.put('/exams/:examId', examController.updateExam); // Обновить экзамен
router.delete('/exams/:examId', examController.deleteExam); // Удалить экзамен

module.exports = router;
