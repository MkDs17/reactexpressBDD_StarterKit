var models   = require('../models');
const Company = require('../models').Company;

module.exports = {
  create(req, res) {
    return Company
    .create({
      name: req.body.name,
    })
    .then(company => res.status(201).send(company))
    .catch(error => res.status(400).send(error));
  },

  findAll(req, res) {
    return Company.findAll({
      attributes: ['name', 'id']
    })
    .then(company => res.status(201).send(company))
    .catch(error => res.status(400).send(error));
  },

}