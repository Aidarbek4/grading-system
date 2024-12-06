const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Роуты для работы со студентами
router.post('/students', studentController.createStudent); // Создать нового студента
router.get('/students', studentController.getAllStudents); // Получить всех студентов
router.get('/students/:studentId', studentController.getStudentById); // Получить студента по ID
router.put('/students/:studentId', studentController.updateStudent); // Обновить студента
router.delete('/students/:studentId', studentController.deleteStudent); // Удалить студента

module.exports = router;
