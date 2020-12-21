const db = require("../models");
const Offer = db.offers;
const Product = db.products;
const Op = db.Sequelize.Op;

// Create and Save a new Offer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  if (!req.body.duration) {
    res.status(400).send({
      message: "Duration can not be empty!"
    });
    return;
  }
  if (!req.body.orderById) {
    res.status(400).send({
      message: "orderById can not be empty!"
    });
    return;
  }
  if (!req.body.createdBy) {
    res.status(400).send({
      message: "createdBy can not be empty!"
    });
    return;
  }
  // Create a Offer
  const offer = {
    name: req.body.name,
    duration: req.body.duration,
    becomeOrder: req.body.becomeOrder ?? false,
    createdBy: req.body.createdBy,
    orderById: req.body.orderById,
    updatedBy: null
  };

  // Save Offer in the database
  Offer.create(offer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Offer."
      });
    });
};

// Retrieve all Offers from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Offer.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving offers."
      });
    });

};

// Find a single Offer with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Offer.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Offer with id=" + id
      });
    });
};

// Update a Offer by the id in the request
exports.update = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  Offer.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Offer was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Offer with id=${id}. Maybe Offer was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Offer with id=" + id
      });
    });
};

// Delete a Offer with the specified id in the request
exports.delete = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  Offer.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Offer was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Offer with id=${id}. Maybe Offer was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Offer with id=" + id
      });
    });
};
// Extras
exports.getOfferProducts = (req, res) => {
  const id = req.params.id;
  var condition =  { offerId: id  };
  Product.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Offer Products with id=" + id
      });
    });
};