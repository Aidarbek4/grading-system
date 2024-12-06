const { Exam, Subject, Group, Teacher } = require('../models');

// Создать экзамен
exports.createExam = async (req, res) => {
  try {
    const { exam_date, exam_time, subject_id, group_id, teacher_id } = req.body;

    const newExam = await Exam.create({
      exam_date,
      exam_time,
      subject_id,
      group_id,
      teacher_id,
    });

    return res.status(201).json({ message: 'Exam created successfully', exam: newExam });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating exam', error: error.message });
  }
};

// Получить все экзамены
exports.getAllExams = async (req, res) => {
  try {
    const exams = await Exam.findAll({
      include: [
        { model: Subject },
        { model: Group },
        { model: Teacher },
      ],
    });

    return res.status(200).json(exams);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching exams', error: error.message });
  }
};

// Получить экзамен по ID
exports.getExamById = async (req, res) => {
  try {
    const { examId } = req.params;

    const exam = await Exam.findByPk(examId, {
      include: [
        { model: Subject },
        { model: Group },
        { model: Teacher },
      ],
    });

    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    return res.status(200).json(exam);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching exam', error: error.message });
  }
};

// Обновить экзамен
exports.updateExam = async (req, res) => {
  try {
    const { examId } = req.params;
    const { exam_date, exam_time, subject_id, group_id, teacher_id } = req.body;

    const exam = await Exam.findByPk(examId);

    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    exam.exam_date = exam_date || exam.exam_date;
    exam.exam_time = exam_time || exam.exam_time;
    exam.subject_id = subject_id || exam.subject_id;
    exam.group_id = group_id || exam.group_id;
    exam.teacher_id = teacher_id || exam.teacher_id;

    await exam.save();

    return res.status(200).json({ message: 'Exam updated successfully', exam });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating exam', error: error.message });
  }
};

// Удалить экзамен
exports.deleteExam = async (req, res) => {
  try {
    const { examId } = req.params;

    const exam = await Exam.findByPk(examId);

    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    await exam.destroy();

    return res.status(200).json({ message: 'Exam deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting exam', error: error.message });
  }
};
