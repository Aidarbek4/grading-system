const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// Роуты для работы с учителями
router.post('/teachers', teacherController.createTeacher); // Создать нового учителя
router.get('/teachers', teacherController.getAllTeachers); // Получить всех учителей
router.get('/teachers/:teacherId', teacherController.getTeacherById); // Получить учителя по ID
router.put('/teachers/:teacherId', teacherController.updateTeacher); // Обновить данные учителя
router.delete('/teachers/:teacherId', teacherController.deleteTeacher); // Удалить учителя

module.exports = router;
