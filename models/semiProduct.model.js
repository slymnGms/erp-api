module.exports = (sequelize, Sequelize) => {
    const SemiProduct = sequelize.define("semiProducts", {
        number: {
            type: Sequelize.STRING
        },
        code: {
            type: Sequelize.STRING
        },
        rawMaterialNumber: {
            type: Sequelize.STRING
        },
        duration: {
            type: Sequelize.STRING
        },
        deliveryTime: {
            type: Sequelize.DATE
        },
        startTime: {
            type: Sequelize.DATE
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy: {
            type: Sequelize.STRING
        }
    });
    return SemiProduct;
};
