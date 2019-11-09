const Location = require("../models/Location");

class DislikeController {
  async store(req, res) {
    const { id } = req.params;
    const { user } = req.headers;

    const location = await Location.findById(id);

    if (!location) {
      return res
        .status(400)
        .json({ error: "Esse local não está mais cadastrado" });
    }

    console.log("like");

    const userDislikedLocation = location.dislikes.some(dislike => {
      if (!dislike) {
        return;
      }

      return dislike.equals(user);
    });

    const likeRemoved = location.likes.filter(like => String(like) !== user);

    location.likes = likeRemoved;

    if (userDislikedLocation) return res.json(location);

    location.dislikes.push(user);

    await location.save();

    return res.json(location);
  }
}

module.exports = new DislikeController();
