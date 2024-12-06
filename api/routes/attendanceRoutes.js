const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// Роуты для работы с посещаемостью
router.post('/attendance', attendanceController.createAttendance); // Создать запись
router.get('/attendance', attendanceController.getAllAttendance); // Получить все записи
router.get('/attendance/:attendanceId', attendanceController.getAttendanceById); // Получить запись по ID
router.put('/attendance/:attendanceId', attendanceController.updateAttendance); // Обновить запись
router.delete('/attendance/:attendanceId', attendanceController.deleteAttendance); // Удалить запись

module.exports = router;
