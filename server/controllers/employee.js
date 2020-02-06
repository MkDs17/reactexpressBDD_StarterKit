var models   = require('../models');
const Employee = require('../models').Employee;

module.exports = {
  create(req, res) {
    return Employee
    .create({
      name: req.body.name,
      designation: req.body.name,
      compagnyId: req.body.id,
    })
    .then(employee => res.status(201).send(employee))
    .catch(error => res.status(400).send(error));
  },

  findAll(req, res) {
    return Employee.findAll({
      attributes: ['id', 'name', 'designation', 'companyId',]
    })
    .then(employee => res.status(201).send(employee))
    .catch(error => res.status(400).send(error));
  },

}