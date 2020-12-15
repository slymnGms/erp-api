module.exports = (sequelize, Sequelize) => {
    const ProductFile = sequelize.define("productFiles", {
        name: {
            type: Sequelize.STRING
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy: {
            type: Sequelize.STRING
        }
    });
    return ProductFile;
};
