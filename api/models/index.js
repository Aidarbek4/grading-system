const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = require('./users')(sequelize, DataTypes);
const Region = require('./region')(sequelize, DataTypes);
const City = require('./city')(sequelize, DataTypes);
const Attendance = require('./attendance')(sequelize, DataTypes);
const Exam = require('./exam')(sequelize, DataTypes);
const ExamGrade = require('./examGrade')(sequelize, DataTypes);
const Grade = require('./grade')(sequelize, DataTypes);
const Group = require('./group')(sequelize, DataTypes);
const Lesson = require('./lesson')(sequelize, DataTypes);
const LessonTime = require('./lessonTime')(sequelize, DataTypes);
const Room = require('./room')(sequelize, DataTypes);
const School = require('./school')(sequelize, DataTypes);
const Student = require('./student')(sequelize, DataTypes);
const Subject = require('./subject')(sequelize, DataTypes);
const Teacher = require('./teacher')(sequelize, DataTypes);

module.exports = {
  sequelize,
  Attendance,
  City,
  Exam,
  ExamGrade,
  Grade,
  Group,
  Lesson,
  LessonTime,
  Region,
  Room,
  School,
  Student,
  Subject,
  Teacher,
  User,
};
