module.exports = (sequelize, DataTypes) => {
  const ExamGrade = sequelize.define('ExamGrade', {
    exam_grade_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    exam_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'exams',
        key: 'exam_id',
      },
    },
    exam_grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'students',
        key: 'student_id',
      },
    },
  }, {
    tableName: 'exam_grades',
    timestamps: false,
  });

  // Ассоциации
  ExamGrade.associate = (models) => {
    ExamGrade.belongsTo(models.Exam, { foreignKey: 'exam_id' });
    ExamGrade.belongsTo(models.Student, { foreignKey: 'student_id' });
  };

  return ExamGrade;
};
