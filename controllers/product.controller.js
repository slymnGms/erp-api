const db = require("../models");
const Product = db.products;
const ProductDesignFile=db.productDesignFiles;
const ProductFile=db.productFiles;
const SemiProduct=db.semiProducts;
const Op = db.Sequelize.Op;

// Create and Save a new Product
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "name can not be empty!"
    });
    return;
  }
  if (!req.body.itemNumber) {
    res.status(400).send({
      message: "itemNumber can not be empty!"
    });
    return;
  }
  if (!req.body.orderNumber) {
    res.status(400).send({
      message: "orderNumber can not be empty!"
    });
    return;
  }
  if (!req.body.number) {
    res.status(400).send({
      message: "number can not be empty!"
    });
    return;
  }
  if (!req.body.cost) {
    res.status(400).send({
      message: "cost can not be empty!"
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
  if (!req.body.startTime) {
    res.status(400).send({
      message: "startTime can not be empty!"
    });
    return;
  }
  if (!req.body.createdBy) {
    res.status(400).send({
      message: "createdBy can not be empty!"
    });
    return;
  }
  if (!req.body.projectId) {
    res.status(400).send({
      message: "projectId can not be empty!"
    });
    return;
  }
  if (!req.body.offerId) {
    res.status(400).send({
      message: "offerId can not be empty!"
    });
    return;
  }
  if (!req.body.orderId) {
    res.status(400).send({
      message: "orderId can not be empty!"
    });
    return;
  }
  if (!req.body.productGenreId) {
    res.status(400).send({
      message: "productGenreId can not be empty!"
    });
    return;
  }
  if (!req.body.productProcessTypeId) {
    res.status(400).send({
      message: "productProcessTypeId can not be empty!"
    });
    return;
  }
  if (!req.body.productTypeId) {
    res.status(400).send({
      message: "productTypeId can not be empty!"
    });
    return;
  }
  if (!req.body.producedById) {
    res.status(400).send({
      message: "producedById can not be empty!"
    });
    return;
  }

  // Create a Product
  const product = {
    name: req.body.name,
    itemNumber: req.body.itemNumber,
    orderNumber: req.body.orderNumber,
    number: req.body.number,
    cost: req.body.cost,
    duration: req.body.duration,
    deliveryTime: req.body.deliveryTime,
    startTime: req.body.startTime,
    createdBy: req.body.createdBy,
    projectId: req.body.projectId,
    offerId: req.body.offerId,
    orderId: req.body.orderId,
    productGenreId: req.body.productGenreId,
    productProcessTypeId: req.body.productProcessTypeId,
    productTypeId: req.body.productTypeId,
    producedById: req.body.producedById,
    updatedBy: null
  };

  // Save Product in the database
  Product.create(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Product.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });

};

// Find a single Product with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Product with id=" + id
      });
    });
};

// Update a Product by the id in the request
exports.update = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  Product.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Product with id=" + id
      });
    });
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  Product.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Product with id=" + id
      });
    });
};
// Extras
exports.getProductProductDesignFiles = (req, res) => {
  const id = req.params.id;
  var condition =  { productId: id  };
  ProductDesignFile.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Product ProductDesignFiless with id=" + id
      });
    });
};
exports.getProductProductFiles = (req, res) => {
  const id = req.params.id;
  var condition =  { productId: id  };
  ProductFile.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Product ProductFiles with id=" + id
      });
    });
};
exports.getProductSemiProducts = (req, res) => {
  const id = req.params.id;
  var condition =  { productId: id  };
  SemiProduct.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Product SemiProducts with id=" + id
      });
    });
};