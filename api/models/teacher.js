module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    teacher_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    teacher_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacher_surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacher_patronymic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passport: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    }, 
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id',
      },
    }
  }, {
    tableName: 'teachers',
    timestamps: false,
  });

  return Teacher;
}