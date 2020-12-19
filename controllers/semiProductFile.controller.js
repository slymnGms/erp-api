const db = require("../models");
const SemiProductFile = db.semiProductFiles;
const Op = db.Sequelize.Op;

// Create and Save a new SemiProductFile
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a SemiProductFile
  const semiProductFile = {
    name: req.body.name,
    createdBy: req.body.createdBy ?? null,
    updatedBy: null
  };

  // Save SemiProductFile in the database
  SemiProductFile.create(semiProductFile)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SemiProductFile."
      });
    });
};

// Retrieve all SemiProductFiles from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  SemiProductFile.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving semiProductFiles."
      });
    });

};

// Find a single SemiProductFile with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  SemiProductFile.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving SemiProductFile with id=" + id
      });
    });
};

// Update a SemiProductFile by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  SemiProductFile.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "SemiProductFile was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update SemiProductFile with id=${id}. Maybe SemiProductFile was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating SemiProductFile with id=" + id
      });
    });
};

// Delete a SemiProductFile with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  SemiProductFile.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "SemiProductFile was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete SemiProductFile with id=${id}. Maybe SemiProductFile was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete SemiProductFile with id=" + id
      });
    });
};