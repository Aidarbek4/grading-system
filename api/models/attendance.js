module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    attendance_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lesson_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'lessons',
        key: 'lesson_id',
      },
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'students',
        key: 'student_id',
      },
    },
    status: {
      type: DataTypes.ENUM('PRESENT', 'ABSENT', 'LATE'),
      allowNull: false,
    },
  }, {
    tableName: 'attendance',
    timestamps: false,
  });

  // Ассоциации
  Attendance.associate = (models) => {
    Attendance.belongsTo(models.Lesson, { foreignKey: 'lesson_id' });
    Attendance.belongsTo(models.Student, { foreignKey: 'student_id' });
  };

  return Attendance;
};
