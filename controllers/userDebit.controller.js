const db = require("../models");
const UserDebit = db.userDebits;
const Op = db.Sequelize.Op;

// Create and Save a new UserDebit
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a UserDebit
  const userDebit = {
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    createdBy: req.body.createdBy ?? null,
    updatedBy: null
  };

  // Save UserDebit in the database
  UserDebit.create(userDebit)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the UserDebit."
      });
    });
};

// Retrieve all UserDebits from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  UserDebit.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving userDebits."
      });
    });

};

// Find a single UserDebit with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  UserDebit.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving UserDebit with id=" + id
      });
    });
};

// Update a UserDebit by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  UserDebit.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "UserDebit was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update UserDebit with id=${id}. Maybe UserDebit was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating UserDebit with id=" + id
      });
    });
};

// Delete a UserDebit with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  UserDebit.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "UserDebit was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete UserDebit with id=${id}. Maybe UserDebit was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete UserDebit with id=" + id
      });
    });
};