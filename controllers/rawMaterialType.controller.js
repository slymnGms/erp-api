const db = require("../models");
const RawMaterialType = db.rawMaterialTypes;
const Op = db.Sequelize.Op;

// Create and Save a new RawMaterialType
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a RawMaterialType
  const rawMaterialType = {
    name: req.body.name,
    createdBy:req.body.createdBy??null,
    updatedBy:null
  };

  // Save RawMaterialType in the database
  RawMaterialType.create(rawMaterialType)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the RawMaterialType."
      });
    });
};

// Retrieve all RawMaterialTypes from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    RawMaterialType.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving rawMaterialTypes."
        });
      });
  
};

// Find a single RawMaterialType with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    RawMaterialType.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving RawMaterialType with id=" + id
        });
      });
};

// Update a RawMaterialType by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    RawMaterialType.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "RawMaterialType was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update RawMaterialType with id=${id}. Maybe RawMaterialType was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating RawMaterialType with id=" + id
        });
      });
};

// Delete a RawMaterialType with the specified id in the request
exports.delete = (req, res) => {
    exports.delete = (req, res) => {
        const id = req.params.id;
      
        RawMaterialType.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "RawMaterialType was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete RawMaterialType with id=${id}. Maybe RawMaterialType was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete RawMaterialType with id=" + id
            });
          });
      };
      
};