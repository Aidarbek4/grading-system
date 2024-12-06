const { Grade, Lesson, Student } = require('../models');

// Создание оценки
exports.createGrade = async (req, res) => {
  try {
    const { grade, lesson_id, student_id } = req.body;

    const newGrade = await Grade.create({ grade, lesson_id, student_id });

    return res.status(201).json({ message: 'Grade created successfully', grade: newGrade });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating grade', error: error.message });
  }
};

// Получение всех оценок
exports.getAllGrades = async (req, res) => {
  try {
    const grades = await Grade.findAll({
      include: [
        { model: Lesson, as: 'lesson' },
        { model: Student, as: 'student' },
      ],
    });

    return res.status(200).json(grades);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching grades', error: error.message });
  }
};

// Получение оценки по ID
exports.getGradeById = async (req, res) => {
  try {
    const { gradeId } = req.params;

    const grade = await Grade.findByPk(gradeId, {
      include: [
        { model: Lesson, as: 'lesson' },
        { model: Student, as: 'student' },
      ],
    });

    if (!grade) {
      return res.status(404).json({ message: 'Grade not found' });
    }

    return res.status(200).json(grade);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching grade', error: error.message });
  }
};

// Обновление оценки
exports.updateGrade = async (req, res) => {
  try {
    const { gradeId } = req.params;
    const { grade } = req.body;

    const gradeEntry = await Grade.findByPk(gradeId);

    if (!gradeEntry) {
      return res.status(404).json({ message: 'Grade not found' });
    }

    gradeEntry.grade = grade || gradeEntry.grade;

    await gradeEntry.save();

    return res.status(200).json({ message: 'Grade updated successfully', grade: gradeEntry });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating grade', error: error.message });
  }
};

// Удаление оценки
exports.deleteGrade = async (req, res) => {
  try {
    const { gradeId } = req.params;

    const gradeEntry = await Grade.findByPk(gradeId);

    if (!gradeEntry) {
      return res.status(404).json({ message: 'Grade not found' });
    }

    await gradeEntry.destroy();

    return res.status(200).json({ message: 'Grade deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting grade', error: error.message });
  }
};
