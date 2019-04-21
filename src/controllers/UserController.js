const User = require("../models/User");

class UserController {
  async store(req, res) {
    const { email } = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: "User alredy exists" });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }

  async show(req, res) {
    const users = User.find({});

    return res.json(users);
  }
}

module.exports = new UserController();
