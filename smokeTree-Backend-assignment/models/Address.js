const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Address = sequelize.define("Address", {
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Users",
      key: "id",
    },
  },
});

module.exports = Address;
