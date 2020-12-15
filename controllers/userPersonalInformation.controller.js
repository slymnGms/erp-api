const db = require("../models");
const UserPersonalInformation = db.userPersonalInformations;
const Op = db.Sequelize.Op;

// Create and Save a new UserPersonalInformation
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a UserPersonalInformation
  const userPersonalInformation = {
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    surName: req.body.surName,
    identityNumber: req.body.identityNumber,
    birthDate: req.body.birthDate,
    birthPlace: req.body.birthPlace,
    address: req.body.address,
    phone: req.body.phone,
    createdBy:req.body.createdBy??null,
    updatedBy:null
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
    exports.delete = (req, res) => {
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
      
};