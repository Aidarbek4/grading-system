module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('Lesson', {
    lesson_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lesson_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    lesson_time_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'lesson_time',
        key: 'lesson_time_id',
      },
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'subjects',
        key: 'subject_id',
      },
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'teachers',
        key: 'teacher_id',
      },
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'groups',
        key: 'group_id',
      }
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rooms',
        key: 'room_id',
      },
    },
  }, {
    tableName: 'lessons',
    timestamps: false,
  });

  return Lesson;
}