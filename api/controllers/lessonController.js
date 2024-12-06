const { Lesson, LessonTime, Subject, Teacher, Group, Room } = require('../models');

// Создание нового урока
exports.createLesson = async (req, res) => {
  try {
    const { lesson_date, lesson_time_id, subject_id, teacher_id, group_id, room_id } = req.body;

    const newLesson = await Lesson.create({
      lesson_date,
      lesson_time_id,
      subject_id,
      teacher_id,
      group_id,
      room_id,
    });

    return res.status(201).json({ message: 'Lesson created successfully', lesson: newLesson });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating lesson', error: error.message });
  }
};

// Получение всех уроков
exports.getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.findAll({
      include: [
        { model: LessonTime, as: 'lesson_time' },
        { model: Subject, as: 'subject' },
        { model: Teacher, as: 'teacher' },
        { model: Group, as: 'group' },
        { model: Room, as: 'room' },
      ],
    });

    return res.status(200).json(lessons);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching lessons', error: error.message });
  }
};

// Получение урока по ID
exports.getLessonById = async (req, res) => {
  try {
    const { lessonId } = req.params;
    const lesson = await Lesson.findByPk(lessonId, {
      include: [
        { model: LessonTime, as: 'lesson_time' },
        { model: Subject, as: 'subject' },
        { model: Teacher, as: 'teacher' },
        { model: Group, as: 'group' },
        { model: Room, as: 'room' },
      ],
    });

    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }

    return res.status(200).json(lesson);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching lesson', error: error.message });
  }
};

// Обновление урока
exports.updateLesson = async (req, res) => {
  try {
    const { lessonId } = req.params;
    const { lesson_date, lesson_time_id, subject_id, teacher_id, group_id, room_id } = req.body;

    const lesson = await Lesson.findByPk(lessonId);

    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }

    lesson.lesson_date = lesson_date || lesson.lesson_date;
    lesson.lesson_time_id = lesson_time_id || lesson.lesson_time_id;
    lesson.subject_id = subject_id || lesson.subject_id;
    lesson.teacher_id = teacher_id || lesson.teacher_id;
    lesson.group_id = group_id || lesson.group_id;
    lesson.room_id = room_id || lesson.room_id;

    await lesson.save();

    return res.status(200).json({ message: 'Lesson updated successfully', lesson });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating lesson', error: error.message });
  }
};

// Удаление урока
exports.deleteLesson = async (req, res) => {
  try {
    const { lessonId } = req.params;

    const lesson = await Lesson.findByPk(lessonId);

    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }

    await lesson.destroy();

    return res.status(200).json({ message: 'Lesson deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting lesson', error: error.message });
  }
};
