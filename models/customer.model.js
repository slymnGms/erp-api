module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
        name: {
            type: Sequelize.STRING
        },
        contactName: {
            type: Sequelize.STRING
        },
        contactEmail: {
            type: Sequelize.STRING
        },
        contactPhone: {
            type: Sequelize.STRING
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy: {
            type: Sequelize.STRING
        }
    });
    return Customer;
};
