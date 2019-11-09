const Review = require("../models/Review");

class ReviewController {
  async store(req, res) {
    const review = await Review.create(req.body);

    return res.json(review);
  }

  async index(req, res) {
    const filters = {};

    if (req.query.nome) {
      filters.nome = new RegExp(req.query.nome, "i");
    }

    filters.location = req.params.id;

    const reviews = await Review.paginate(filters, {
      page: req.query.page || 1,
      limit: 20,
      populate: ["author"],
      sort: "-createdAt"
    });

    return res.json(reviews);
  }
}

module.exports = new ReviewController();
