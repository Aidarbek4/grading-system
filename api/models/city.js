module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    city_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    city_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'regions',
        key: 'region_id',
      },
    },
  }, {
    tableName: 'cities',
    timestamps: false,
  });

  // Добавляем ассоциацию с моделью Region
  City.associate = (models) => {
    City.belongsTo(models.Region, { foreignKey: 'region_id' });  // Город связан с регионом
  };

  return City;
}
