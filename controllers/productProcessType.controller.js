const db = require("../models");
const ProductProcessType = db.productProcessTypes;
const Op = db.Sequelize.Op;

// Create and Save a new ProductProcessType
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a ProductProcessType
  const productProcessType = {
    name: req.body.name,
    createdBy:req.body.createdBy??null,
    updatedBy:null
  };

  // Save ProductProcessType in the database
  ProductProcessType.create(productProcessType)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ProductProcessType."
      });
    });
};

// Retrieve all ProductProcessTypes from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    ProductProcessType.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving productProcessTypes."
        });
      });
  
};

// Find a single ProductProcessType with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ProductProcessType.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving ProductProcessType with id=" + id
        });
      });
};

// Update a ProductProcessType by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    ProductProcessType.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ProductProcessType was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update ProductProcessType with id=${id}. Maybe ProductProcessType was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating ProductProcessType with id=" + id
        });
      });
};

// Delete a ProductProcessType with the specified id in the request
exports.delete = (req, res) => {
    exports.delete = (req, res) => {
        const id = req.params.id;
      
        ProductProcessType.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "ProductProcessType was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete ProductProcessType with id=${id}. Maybe ProductProcessType was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete ProductProcessType with id=" + id
            });
          });
      };
      
};