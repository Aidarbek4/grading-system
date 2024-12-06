const { Attendance, Lesson, Student } = require('../models');

// Создать запись о посещении
exports.createAttendance = async (req, res) => {
  try {
    const { lesson_id, student_id, status } = req.body;

    const newAttendance = await Attendance.create({
      lesson_id,
      student_id,
      status,
    });

    return res.status(201).json({ message: 'Attendance record created successfully', attendance: newAttendance });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating attendance record', error: error.message });
  }
};

// Получить все записи посещаемости
exports.getAllAttendance = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.findAll({
      include: [
        { model: Lesson },
        { model: Student },
      ],
    });

    return res.status(200).json(attendanceRecords);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching attendance records', error: error.message });
  }
};

// Получить посещаемость по ID
exports.getAttendanceById = async (req, res) => {
  try {
    const { attendanceId } = req.params;

    const attendance = await Attendance.findByPk(attendanceId, {
      include: [
        { model: Lesson },
        { model: Student },
      ],
    });

    if (!attendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    return res.status(200).json(attendance);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching attendance record', error: error.message });
  }
};

// Обновить запись о посещении
exports.updateAttendance = async (req, res) => {
  try {
    const { attendanceId } = req.params;
    const { lesson_id, student_id, status } = req.body;

    const attendance = await Attendance.findByPk(attendanceId);

    if (!attendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    attendance.lesson_id = lesson_id || attendance.lesson_id;
    attendance.student_id = student_id || attendance.student_id;
    attendance.status = status || attendance.status;

    await attendance.save();

    return res.status(200).json({ message: 'Attendance record updated successfully', attendance });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating attendance record', error: error.message });
  }
};

// Удалить запись о посещении
exports.deleteAttendance = async (req, res) => {
  try {
    const { attendanceId } = req.params;

    const attendance = await Attendance.findByPk(attendanceId);

    if (!attendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    await attendance.destroy();

    return res.status(200).json({ message: 'Attendance record deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting attendance record', error: error.message });
  }
};
