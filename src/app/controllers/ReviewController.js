const Review = require("../models/Review");

class ReviewController {
  async store(req, res) {
    const review = await Review.create(req.body);

    res.json(review);
  }

  async index(req, res) {
    const filters = {};

    if (req.query.nome) {
      filters.nome = new RegExp(req.query.nome, "i");
    }

    const reviews = await Review.paginate(filters, {
      page: req.query.page || 1,
      limit: 20,
      populate: ["author", "location"],
      sort: "-createdAt"
    });

    return res.json(reviews);
  }

  async show(req, res) {
    const review = await review.findById(req.params.id);
    res.json(review);
  }
}

module.exports = new ReviewController();
