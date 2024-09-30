const User = require("../models/Users");
const Address = require("../models/Address");

exports.registerUser = async (req, res) => {
  try {
    const { name, address } = req.body;

    const user = await User.create({ name });

    await Address.create({ address, userId: user.id });

    res.status(201).json({ message: "User and address created successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while registering the user" });
  }
};
