const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');

// Роуты для работы с уроками
router.post('/lessons', lessonController.createLesson); // Создать новый урок
router.get('/lessons', lessonController.getAllLessons); // Получить все уроки
router.get('/lessons/:lessonId', lessonController.getLessonById); // Получить урок по ID
router.put('/lessons/:lessonId', lessonController.updateLesson); // Обновить урок
router.delete('/lessons/:lessonId', lessonController.deleteLesson); // Удалить урок

module.exports = router;
