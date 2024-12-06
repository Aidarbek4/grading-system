const { LessonTime } = require('../models');

// Создание нового времени урока
exports.createLessonTime = async (req, res) => {
  try {
    const { lesson_time } = req.body;

    const lessonTime = await LessonTime.create({
      lesson_time
    });

    return res.status(201).json({ message: 'Lesson time created successfully', lessonTime });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating lesson time', error: error.message });
  }
};

// Получение всех времён уроков
exports.getAllLessonTimes = async (req, res) => {
  try {
    const lessonTimes = await LessonTime.findAll();
    return res.status(200).json(lessonTimes);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching lesson times', error: error.message });
  }
};

// Получение времени урока по ID
exports.getLessonTimeById = async (req, res) => {
  try {
    const { lessonTimeId } = req.params;
    const lessonTime = await LessonTime.findByPk(lessonTimeId);

    if (!lessonTime) {
      return res.status(404).json({ message: 'Lesson time not found' });
    }

    return res.status(200).json(lessonTime);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching lesson time', error: error.message });
  }
};

// Обновление времени урока
exports.updateLessonTime = async (req, res) => {
  try {
    const { lessonTimeId } = req.params;
    const { lesson_time } = req.body;

    const lessonTime = await LessonTime.findByPk(lessonTimeId);
    if (!lessonTime) {
      return res.status(404).json({ message: 'Lesson time not found' });
    }

    lessonTime.lesson_time = lesson_time || lessonTime.lesson_time;
    await lessonTime.save();

    return res.status(200).json({ message: 'Lesson time updated successfully', lessonTime });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating lesson time', error: error.message });
  }
};

// Удаление времени урока
exports.deleteLessonTime = async (req, res) => {
  try {
    const { lessonTimeId } = req.params;
    const lessonTime = await LessonTime.findByPk(lessonTimeId);

    if (!lessonTime) {
      return res.status(404).json({ message: 'Lesson time not found' });
    }

    await lessonTime.destroy();
    return res.status(200).json({ message: 'Lesson time deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting lesson time', error: error.message });
  }
};
