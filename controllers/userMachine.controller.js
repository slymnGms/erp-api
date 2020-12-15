const db = require("../models");
const UserMachine = db.userMachines;
const Op = db.Sequelize.Op;

// Create and Save a new UserMachine
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a UserMachine
  const userMachine = {
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    createdBy: req.body.createdBy ?? null,
    updatedBy: null
  };

  // Save UserMachine in the database
  UserMachine.create(userMachine)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the UserMachine."
      });
    });
};

// Retrieve all UserMachines from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  UserMachine.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving userMachines."
      });
    });

};

// Find a single UserMachine with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  UserMachine.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving UserMachine with id=" + id
      });
    });
};

// Update a UserMachine by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  UserMachine.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "UserMachine was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update UserMachine with id=${id}. Maybe UserMachine was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating UserMachine with id=" + id
      });
    });
};

// Delete a UserMachine with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  UserMachine.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "UserMachine was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete UserMachine with id=${id}. Maybe UserMachine was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete UserMachine with id=" + id
      });
    });
};