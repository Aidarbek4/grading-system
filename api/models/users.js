module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false, // добавлено чтобы поле не было пустым
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // исправлено
      unique: true,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false, // исправлено
    },
    user_role: {
      type: DataTypes.STRING,
      allowNull: false, // исправлено
    }
  }, {
    tableName: 'users',
    timestamps: false,
  });

  return User;
};
