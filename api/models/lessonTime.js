module.exports = (sequelize, DataTypes) => {
  const LessonTime = sequelize.define('LessonTime', {
    lesson_time_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lesson_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  }, {
    tableName: 'lesson_time',
    timestamps: false,
  });

  return LessonTime;
}