module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("projects", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        isOffer: {
            type: Sequelize.BOOLEAN
        },
        isOrder: {
            type: Sequelize.BOOLEAN
        },
        isCancelled: {
            type: Sequelize.BOOLEAN
        },
        isCompleted: {
            type: Sequelize.BOOLEAN
        },
        hasReceipt: {
            type: Sequelize.BOOLEAN
        },
        hasInvoice: {
            type: Sequelize.BOOLEAN
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy: {
            type: Sequelize.STRING
        }
    });
    return Project;
};
