const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", userRoutes);

const PORT = 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
