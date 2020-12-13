module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        name: {
            type: Sequelize.STRING
        },
        cost: {
            type: Sequelize.STRING
        },
        itemNumber: {
            type: Sequelize.STRING
        },
        orderNumber: {
            type: Sequelize.STRING
        },
        number: {
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
    return Product;
};
