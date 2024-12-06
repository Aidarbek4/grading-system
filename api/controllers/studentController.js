const { Student } = require('../models');

// Создать нового студента
exports.createStudent = async (req, res) => {
  try {
    const { student_name, student_surname, student_patronymic, date_of_birth, address, phone, group_id, school_id, user_id } = req.body;

    const student = await Student.create({
      student_name,
      student_surname,
      student_patronymic,
      date_of_birth,
      address,
      phone,
      group_id,
      school_id,
      user_id,
    });

    return res.status(201).json({ message: 'Student created successfully', student });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating student', error: error.message });
  }
};

// Получить всех студентов
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    return res.status(200).json(students);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching students', error: error.message });
  }
};

// Получить студента по ID
exports.getStudentById = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findByPk(studentId);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching student', error: error.message });
  }
};

// Обновить студента
exports.updateStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const { student_name, student_surname, student_patronymic, date_of_birth, address, phone, group_id, school_id, user_id } = req.body;

    const student = await Student.findByPk(studentId);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    student.student_name = student_name || student.student_name;
    student.student_surname = student_surname || student.student_surname;
    student.student_patronymic = student_patronymic || student.student_patronymic;
    student.date_of_birth = date_of_birth || student.date_of_birth;
    student.address = address || student.address;
    student.phone = phone || student.phone;
    student.group_id = group_id || student.group_id;
    student.school_id = school_id || student.school_id;
    student.user_id = user_id || student.user_id;

    await student.save();

    return res.status(200).json({ message: 'Student updated successfully', student });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating student', error: error.message });
  }
};

// Удалить студента
exports.deleteStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findByPk(studentId);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    await student.destroy();
    return res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting student', error: error.message });
  }
};
