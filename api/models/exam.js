module.exports = (sequelize, DataTypes) => {
  const Exam = sequelize.define('Exam', {
    exam_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    exam_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    exam_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'subjects',
        key: 'subject_id',
      },
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'groups',
        key: 'group_id',
      },
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'teachers',
        key: 'teacher_id',
      }
    }
  }, {
    tableName: 'exams',
    timestamps: false,
  });

  // Ассоциации
  Exam.associate = (models) => {
    Exam.belongsTo(models.Subject, { foreignKey: 'subject_id' });
    Exam.belongsTo(models.Group, { foreignKey: 'group_id' });
    Exam.belongsTo(models.Teacher, { foreignKey: 'teacher_id' });
  };

  return Exam;
};
