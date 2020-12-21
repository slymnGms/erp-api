const db = require("../models");
const UserPersonalInformation = db.userPersonalInformations;
const Op = db.Sequelize.Op;

// Create and Save a new UserPersonalInformation
exports.create = (req, res) => {
  // Validate request
  if (!req.body.firstName) {
    res.status(400).send({
      message: "firstName can not be empty!"
    });
    return;
  }
  if (!req.body.surName) {
    res.status(400).send({
      message: "surName can not be empty!"
    });
    return;
  }
  if (!req.body.identityNumber) {
    res.status(400).send({
      message: "identityNumber can not be empty!"
    });
    return;
  }
  if (!req.body.birthDate) {
    res.status(400).send({
      message: "birthDate can not be empty!"
    });
    return;
  }
  if (!req.body.birthPlace) {
    res.status(400).send({
      message: "birthPlace can not be empty!"
    });
    return;
  }
  if (!req.body.address) {
    res.status(400).send({
      message: "address can not be empty!"
    });
    return;
  }
  if (!req.body.phone) {
    res.status(400).send({
      message: "phone can not be empty!"
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

  // Create a UserPersonalInformation
  const userPersonalInformation = {
    firstName: req.body.firstName,
    middleName: req.body.middleName?? "",
    surName: req.body.surName,
    identityNumber: req.body.identityNumber,
    birthDate: req.body.birthDate,
    birthPlace: req.body.birthPlace,
    address: req.body.address,
    phone: req.body.phone,
    createdBy: req.body.createdBy,
    userId: req.body.userId,
    updatedBy: null
  };

  // Save UserPersonalInformation in the database
  UserPersonalInformation.create(userPersonalInformation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the UserPersonalInformation."
      });
    });
};

// Retrieve all UserPersonalInformations from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  UserPersonalInformation.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving userPersonalInformations."
      });
    });

};

// Find a single UserPersonalInformation with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  UserPersonalInformation.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving UserPersonalInformation with id=" + id
      });
    });
};

// Update a UserPersonalInformation by the id in the request
exports.update = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  UserPersonalInformation.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "UserPersonalInformation was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update UserPersonalInformation with id=${id}. Maybe UserPersonalInformation was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating UserPersonalInformation with id=" + id
      });
    });
};

// Delete a UserPersonalInformation with the specified id in the request
exports.delete = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  UserPersonalInformation.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "UserPersonalInformation was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete UserPersonalInformation with id=${id}. Maybe UserPersonalInformation was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete UserPersonalInformation with id=" + id
      });
    });
};