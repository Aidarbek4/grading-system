const { ExamGrade, Exam, Student } = require('../models');

// Создать оценку за экзамен
exports.createExamGrade = async (req, res) => {
  try {
    const { exam_id, exam_grade, student_id } = req.body;

    const newExamGrade = await ExamGrade.create({
      exam_id,
      exam_grade,
      student_id,
    });

    return res.status(201).json({ message: 'Exam grade created successfully', examGrade: newExamGrade });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating exam grade', error: error.message });
  }
};

// Получить все оценки за экзамены
exports.getAllExamGrades = async (req, res) => {
  try {
    const examGrades = await ExamGrade.findAll({
      include: [
        { model: Exam },
        { model: Student },
      ],
    });

    return res.status(200).json(examGrades);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching exam grades', error: error.message });
  }
};

// Получить оценку по ID
exports.getExamGradeById = async (req, res) => {
  try {
    const { examGradeId } = req.params;

    const examGrade = await ExamGrade.findByPk(examGradeId, {
      include: [
        { model: Exam },
        { model: Student },
      ],
    });

    if (!examGrade) {
      return res.status(404).json({ message: 'Exam grade not found' });
    }

    return res.status(200).json(examGrade);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching exam grade', error: error.message });
  }
};

// Обновить оценку за экзамен
exports.updateExamGrade = async (req, res) => {
  try {
    const { examGradeId } = req.params;
    const { exam_id, exam_grade, student_id } = req.body;

    const examGrade = await ExamGrade.findByPk(examGradeId);

    if (!examGrade) {
      return res.status(404).json({ message: 'Exam grade not found' });
    }

    examGrade.exam_id = exam_id || examGrade.exam_id;
    examGrade.exam_grade = exam_grade || examGrade.exam_grade;
    examGrade.student_id = student_id || examGrade.student_id;

    await examGrade.save();

    return res.status(200).json({ message: 'Exam grade updated successfully', examGrade });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating exam grade', error: error.message });
  }
};

// Удалить оценку за экзамен
exports.deleteExamGrade = async (req, res) => {
  try {
    const { examGradeId } = req.params;

    const examGrade = await ExamGrade.findByPk(examGradeId);

    if (!examGrade) {
      return res.status(404).json({ message: 'Exam grade not found' });
    }

    await examGrade.destroy();

    return res.status(200).json({ message: 'Exam grade deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting exam grade', error: error.message });
  }
};
