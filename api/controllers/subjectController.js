const { Subject } = require('../models');

// Создание нового предмета
exports.createSubject = async (req, res) => {
  try {
    const { subject_name, subject_description, teacher_id } = req.body;

    const subject = await Subject.create({
      subject_name,
      subject_description,
      teacher_id,
    });

    return res.status(201).json({ message: 'Subject created successfully', subject });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating subject', error: error.message });
  }
};

// Получение всех предметов
exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    return res.status(200).json(subjects);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching subjects', error: error.message });
  }
};

// Получение предмета по ID
exports.getSubjectById = async (req, res) => {
  try {
    const { subjectId } = req.params;
    const subject = await Subject.findByPk(subjectId);

    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }

    return res.status(200).json(subject);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching subject', error: error.message });
  }
};

// Обновление предмета
exports.updateSubject = async (req, res) => {
  try {
    const { subjectId } = req.params;
    const { subject_name, subject_description, teacher_id } = req.body;

    const subject = await Subject.findByPk(subjectId);

    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }

    subject.subject_name = subject_name || subject.subject_name;
    subject.subject_description = subject_description || subject.subject_description;
    subject.teacher_id = teacher_id || subject.teacher_id;

    await subject.save();

    return res.status(200).json({ message: 'Subject updated successfully', subject });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating subject', error: error.message });
  }
};

// Удаление предмета
exports.deleteSubject = async (req, res) => {
  try {
    const { subjectId } = req.params;
    const subject = await Subject.findByPk(subjectId);

    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }

    await subject.destroy();
    return res.status(200).json({ message: 'Subject deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting subject', error: error.message });
  }
};
