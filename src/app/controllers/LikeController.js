const Location = require("../models/Location");

class LikeController {
  async store(req, res) {
    const { id } = req.params;
    const { user } = req.headers;

    const location = await Location.findById(id);

    if (!location) {
      return res
        .status(400)
        .json({ error: "Esse local não está mais cadastrado" });
    }

    const userLikedLocation = location.likes.some(like => {
      if (!like) {
        return;
      }

      return like.equals(user);
    });

    const dislikeRemoved = location.dislikes.filter(
      dislike => String(dislike) !== user
    );

    location.dislikes = dislikeRemoved;

    if (userLikedLocation) return res.json(location);

    location.likes.push(user);

    await location.save();

    return res.json(location);
  }
}

module.exports = new LikeController();
