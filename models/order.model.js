module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
        //sipariş numarası
        name: {
            type: Sequelize.STRING
        },
        //sipariş olma tarihi
        becomeOrderDate: {
            type: Sequelize.DATE
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
