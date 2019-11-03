const Location = require("../models/Location");

class LocationController {
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

  async store(req, res) {
    const location = await Location.create(req.body);

    res.json(location);
  }

  async update(req, res) {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(location);
  }

  async destroy(req, res) {
    await Location.findByIdAndDelete(req.params.id);

    return res.send();
  }
}

module.exports = new LocationController();
