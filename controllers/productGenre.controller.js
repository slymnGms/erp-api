const db = require("../models");
const ProductGenre = db.productGenres;
const Op = db.Sequelize.Op;

// Create and Save a new ProductGenre
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a ProductGenre
  const productGenre = {
    name: req.body.name,
    createdBy:req.body.createdBy??null,
    updatedBy:null
  };

  // Save ProductGenre in the database
  ProductGenre.create(productGenre)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ProductGenre."
      });
    });
};

// Retrieve all ProductGenres from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    ProductGenre.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving productGenres."
        });
      });
  
};

// Find a single ProductGenre with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ProductGenre.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving ProductGenre with id=" + id
        });
      });
};

// Update a ProductGenre by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    ProductGenre.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ProductGenre was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update ProductGenre with id=${id}. Maybe ProductGenre was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating ProductGenre with id=" + id
        });
      });
};

// Delete a ProductGenre with the specified id in the request
exports.delete = (req, res) => {
    exports.delete = (req, res) => {
        const id = req.params.id;
      
        ProductGenre.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "ProductGenre was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete ProductGenre with id=${id}. Maybe ProductGenre was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete ProductGenre with id=" + id
            });
          });
      };
      
};