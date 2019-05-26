const Location = require("../models/Location");

class LocationController {
  async store(req, res) {
    const location = await Location.create(req.body);

    res.json(location);
  }

  async index(req, res) {
    const filters = {};

    if (req.query.nome) {
      filters.nome = new RegExp(req.query.nome, "i");
    }

    const locations = await Location.paginate(filters, {
      page: req.query.page || 1,
      limit: 20,
      populate: ["author"],
      sort: "-createdAt"
    });

    return res.json(locations);
  }

  async show(req, res) {
    const location = await Location.findById(req.params.id);
    res.json(location);
  }
}

module.exports = new LocationController();
