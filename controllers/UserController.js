const Users = require("../models/Users");

const UserController = {
  async getUser(req, res) {
    const user = await Users.findById(req.params.id);

    if (!user) {
      res.status(404).json({
        message: "not found",
      });
    }

    res.json(user);
  },

  async getUsers(_, res) {
    const users = await Users.findAll();

    res.json(users);
  },
};

module.exports = UserController;
