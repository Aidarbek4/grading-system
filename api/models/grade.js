module.exports = (sequelize, DataTypes) => {
  const Grade = sequelize.define('Grade', {
    grade_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
        key: 'student_id', // Исправлено на корректное поле
      },
    },
  }, {
    tableName: 'grades',
    timestamps: false,
  });

  Grade.associate = (models) => {
    Grade.belongsTo(models.Lesson, { foreignKey: 'lesson_id' });
    Grade.belongsTo(models.Student, { foreignKey: 'student_id' });
  };

  return Grade;
};
