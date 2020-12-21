const db = require("../models");
const UserCuttintip = db.userCuttintips;
const Op = db.Sequelize.Op;

// Create and Save a new UserCuttintip
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "name can not be empty!"
    });
    return;
  }
  if (!req.body.startDate) {
    res.status(400).send({
      message: "startDate can not be empty!"
    });
    return;
  }
  if (!req.body.endDate) {
    res.status(400).send({
      message: "endDate can not be empty!"
    });
    return;
  }
  if (!req.body.createdBy) {
    res.status(400).send({
      message: "createdBy can not be empty!"
    });
    return;
  }
  if (!req.body.userId) {
    res.status(400).send({
      message: "userId can not be empty!"
    });
    return;
  }

  // Create a UserCuttintip
  const userCuttintip = {
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    createdBy: req.body.createdBy,
    userId: req.body.userId,
    updatedBy: null
  };

  // Save UserCuttintip in the database
  UserCuttintip.create(userCuttintip)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the UserCuttintip."
      });
    });
};

// Retrieve all UserCuttintips from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  UserCuttintip.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving userCuttintips."
      });
    });

};

// Find a single UserCuttintip with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  UserCuttintip.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving UserCuttintip with id=" + id
      });
    });
};

// Update a UserCuttintip by the id in the request
exports.update = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  UserCuttintip.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "UserCuttintip was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update UserCuttintip with id=${id}. Maybe UserCuttintip was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating UserCuttintip with id=" + id
      });
    });
};

// Delete a UserCuttintip with the specified id in the request
exports.delete = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  UserCuttintip.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "UserCuttintip was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete UserCuttintip with id=${id}. Maybe UserCuttintip was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete UserCuttintip with id=" + id
      });
    });
};