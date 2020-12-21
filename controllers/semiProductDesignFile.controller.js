const db = require("../models");
const SemiProductDesignFile = db.semiProductDesignFiles;
const Op = db.Sequelize.Op;

// Create and Save a new SemiProductDesignFile
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
  if (!req.body.semiProductId) {
    res.status(400).send({
      message: "semiProductId can not be empty!"
    });
    return;
  }

  // Create a SemiProductDesignFile
  const semiProductDesignFile = {
    name: req.body.name,
    createdBy: req.body.createdBy,
    semiProductId: req.body.semiProductId,
    updatedBy: null
  };

  // Save SemiProductDesignFile in the database
  SemiProductDesignFile.create(semiProductDesignFile)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SemiProductDesignFile."
      });
    });
};

// Retrieve all SemiProductDesignFiles from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  SemiProductDesignFile.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving semiProductDesignFiles."
      });
    });

};

// Find a single SemiProductDesignFile with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  SemiProductDesignFile.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving SemiProductDesignFile with id=" + id
      });
    });
};

// Update a SemiProductDesignFile by the id in the request
exports.update = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  SemiProductDesignFile.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "SemiProductDesignFile was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update SemiProductDesignFile with id=${id}. Maybe SemiProductDesignFile was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating SemiProductDesignFile with id=" + id
      });
    });
};

// Delete a SemiProductDesignFile with the specified id in the request
exports.delete = (req, res) => {
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  if (!req.body.updatedBy) {
    res.status(400).send({
      message: "updatedBy can not be empty!"
    });
    return;
  }
  const id = req.params.id;

  SemiProductDesignFile.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "SemiProductDesignFile was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete SemiProductDesignFile with id=${id}. Maybe SemiProductDesignFile was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete SemiProductDesignFile with id=" + id
      });
    });
};