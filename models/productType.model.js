module.exports = (sequelize, Sequelize) => {
    const ProductType = sequelize.define("productType", {
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
