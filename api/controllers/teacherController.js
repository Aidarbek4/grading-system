const { Teacher } = require('../models');

// Создание нового учителя
exports.createTeacher = async (req, res) => {
  try {
    const { teacher_name, teacher_surname, teacher_patronymic, passport, date_of_birth, phone, email, user_id } = req.body;

    const teacher = await Teacher.create({
      teacher_name,
      teacher_surname,
      teacher_patronymic,
      passport,
      date_of_birth,
      phone,
      email,
      user_id,
    });

    return res.status(201).json({ message: 'Teacher created successfully', teacher });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating teacher', error: error.message });
  }
};

// Получение всех учителей
exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    return res.status(200).json(teachers);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching teachers', error: error.message });
  }
};

// Получение учителя по ID
exports.getTeacherById = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const teacher = await Teacher.findByPk(teacherId);

    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    return res.status(200).json(teacher);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching teacher', error: error.message });
  }
};

// Обновление учителя
exports.updateTeacher = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const { teacher_name, teacher_surname, teacher_patronymic, passport, date_of_birth, phone, email, user_id } = req.body;

    const teacher = await Teacher.findByPk(teacherId);

    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    teacher.teacher_name = teacher_name || teacher.teacher_name;
    teacher.teacher_surname = teacher_surname || teacher.teacher_surname;
    teacher.teacher_patronymic = teacher_patronymic || teacher.teacher_patronymic;
    teacher.passport = passport || teacher.passport;
    teacher.date_of_birth = date_of_birth || teacher.date_of_birth;
    teacher.phone = phone || teacher.phone;
    teacher.email = email || teacher.email;
    teacher.user_id = user_id || teacher.user_id;

    await teacher.save();

    return res.status(200).json({ message: 'Teacher updated successfully', teacher });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating teacher', error: error.message });
  }
};

// Удаление учителя
exports.deleteTeacher = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const teacher = await Teacher.findByPk(teacherId);

    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    await teacher.destroy();
    return res.status(200).json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting teacher', error: error.message });
  }
};
