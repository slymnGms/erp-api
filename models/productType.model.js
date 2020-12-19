module.exports = (sequelize, Sequelize) => {
    const ProductType = sequelize.define("productTypes", {
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
    return ProductType;
};
