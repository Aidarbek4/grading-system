module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define('Region', {
    region_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    region_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'regions',
    timestamps: false,
  });

  return Region;
}