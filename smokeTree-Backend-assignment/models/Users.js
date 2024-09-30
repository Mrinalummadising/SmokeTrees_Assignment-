const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Users = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Users;
