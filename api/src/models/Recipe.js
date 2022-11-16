const { DataTypes, ENUM } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("recipe", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    types: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING(10000),
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      max: 100,
      min: 1,
    },
    stepByStep: {
      type: DataTypes.STRING(10000),
    },
  });
};
