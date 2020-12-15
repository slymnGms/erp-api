module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
        name: {
            type: Sequelize.STRING
        },
        duration: {
            type: Sequelize.STRING
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy: {
            type: Sequelize.STRING
        }
    });
    return Order;
};
