const db = require("../models");
const SemiProduct = db.semiProducts;
const Op = db.Sequelize.Op;

// Create and Save a new SemiProduct
exports.create = (req, res) => {
  // Validate request
  if (!req.body.code) {
    res.status(400).send({
      message: "code can not be empty!"
    });
    return;
  }
  if (!req.body.number) {
    res.status(400).send({
      message: "number can not be empty!"
    });
    return;
  }
  if (!req.body.startTime) {
    res.status(400).send({
      message: "startTime can not be empty!"
    });
    return;
  }
  if (!req.body.duration) {
    res.status(400).send({
      message: "duration can not be empty!"
    });
    return;
  }
  if (!req.body.deliveryTime) {
    res.status(400).send({
      message: "deliveryTime can not be empty!"
    });
    return;
  }
  if (!req.body.rawMaterialNumber) {
    res.status(400).send({
      message: "rawMaterialNumber can not be empty!"
    });
    return;
  }
  if (!req.body.createdBy) {
    res.status(400).send({
      message: "createdBy can not be empty!"
    });
    return;
  }
  if (!req.body.productId) {
    res.status(400).send({
      message: "productId can not be empty!"
    });
    return;
  }
  if (!req.body.rawMaterialTypeId) {
    res.status(400).send({
      message: "rawMaterialTypeId can not be empty!"
    });
    return;
  }
  if (!req.body.semiProductTypeId) {
    res.status(400).send({
      message: "semiProductTypeId can not be empty!"
    });
    return;
  }
  if (!req.body.producedById) {
    res.status(400).send({
      message: "producedById can not be empty!"
    });
    return;
  }

  // Create a SemiProduct
  const semiProduct = {
    code: req.body.code,
    number: req.body.number,
    startTime: req.body.startTime,
    duration: req.body.duration,
    deliveryTime: req.body.deliveryTime,
    rawMaterialNumber: req.body.rawMaterialNumber,
    createdBy: req.body.createdBy,
    productId: req.body.productId,
    rawMaterialTypeId: req.body.rawMaterialTypeId,
    semiProductTypeId: req.body.semiProductTypeId,
    producedById: req.body.producedById,
    updatedBy: null
  };

  // Save SemiProduct in the database
  SemiProduct.create(semiProduct)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SemiProduct."
      });
    });
};

// Retrieve all SemiProducts from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  SemiProduct.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving semiProducts."
      });
    });

};

// Find a single SemiProduct with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  SemiProduct.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving SemiProduct with id=" + id
      });
    });
};

// Update a SemiProduct by the id in the request
exports.update = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  SemiProduct.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "SemiProduct was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update SemiProduct with id=${id}. Maybe SemiProduct was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating SemiProduct with id=" + id
      });
    });
};

// Delete a SemiProduct with the specified id in the request
exports.delete = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  SemiProduct.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "SemiProduct was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete SemiProduct with id=${id}. Maybe SemiProduct was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete SemiProduct with id=" + id
      });
    });
};