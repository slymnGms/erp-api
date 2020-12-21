const db = require("../models");
const ProjectFile = db.projectFiles;
const Op = db.Sequelize.Op;

// Create and Save a new ProjectFile
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "name can not be empty!"
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

  // Create a ProjectFile
  const projectFile = {
    name: req.body.name,
    createdBy: req.body.createdBy,
    projectId: req.body.projectId,
    updatedBy: null
  };

  // Save ProjectFile in the database
  ProjectFile.create(projectFile)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ProjectFile."
      });
    });
};

// Retrieve all ProjectFiles from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  ProjectFile.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving projectFiles."
      });
    });

};

// Find a single ProjectFile with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ProjectFile.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving ProjectFile with id=" + id
      });
    });
};

// Update a ProjectFile by the id in the request
exports.update = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  ProjectFile.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "ProjectFile was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update ProjectFile with id=${id}. Maybe ProjectFile was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating ProjectFile with id=" + id
      });
    });
};

// Delete a ProjectFile with the specified id in the request
exports.delete = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  ProjectFile.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "ProjectFile was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete ProjectFile with id=${id}. Maybe ProjectFile was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete ProjectFile with id=" + id
      });
    });
};