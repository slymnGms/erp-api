const db = require("../models");
const PersonalEducationLevel = db.personalEducationLevels;
const Op = db.Sequelize.Op;

// Create and Save a new PersonalEducationLevel
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a PersonalEducationLevel
  const personalEducationLevel = {
    name: req.body.name,
    createdBy:req.body.createdBy??null,
    updatedBy:null
  };

  // Save PersonalEducationLevel in the database
  PersonalEducationLevel.create(personalEducationLevel)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the PersonalEducationLevel."
      });
    });
};

// Retrieve all PersonalEducationLevels from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    PersonalEducationLevel.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving personalEducationLevels."
        });
      });
  
};

// Find a single PersonalEducationLevel with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    PersonalEducationLevel.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving PersonalEducationLevel with id=" + id
        });
      });
};

// Update a PersonalEducationLevel by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    PersonalEducationLevel.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "PersonalEducationLevel was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update PersonalEducationLevel with id=${id}. Maybe PersonalEducationLevel was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating PersonalEducationLevel with id=" + id
        });
      });
};

// Delete a PersonalEducationLevel with the specified id in the request
exports.delete = (req, res) => {
    exports.delete = (req, res) => {
        const id = req.params.id;
      
        PersonalEducationLevel.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "PersonalEducationLevel was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete PersonalEducationLevel with id=${id}. Maybe PersonalEducationLevel was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete PersonalEducationLevel with id=" + id
            });
          });
      };
      
};