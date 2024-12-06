module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subject_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subject_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'teachers',
        key: 'teacher_id',
      },
    },
  }, {
    tableName: 'subjects',
    timestamps: false,
  });

  return Subject;
}