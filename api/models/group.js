module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    group_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    group_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    group_start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    group_end_date: {
      type: DataTypes.DATE,
      allowNull: true, 
    },
    school_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'schools',
        key: 'school_id',
      },
    },
  }, {
    tableName: 'groups',
    timestamps: false,
  });

  return Group;
};
