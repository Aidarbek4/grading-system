const express = require('express');
const router = express.Router();
const lessonTimeController = require('../controllers/lessonTimeController');

// Роуты для работы с временем уроков
router.post('/lesson-times', lessonTimeController.createLessonTime); // Создание времени урока
router.get('/lesson-times', lessonTimeController.getAllLessonTimes); // Получение всех времён уроков
router.get('/lesson-times/:lessonTimeId', lessonTimeController.getLessonTimeById); // Получение времени урока по ID
router.put('/lesson-times/:lessonTimeId', lessonTimeController.updateLessonTime); // Обновление времени урока
router.delete('/lesson-times/:lessonTimeId', lessonTimeController.deleteLessonTime); // Удаление времени урока

module.exports = router;
