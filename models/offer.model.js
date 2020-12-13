module.exports = (sequelize, Sequelize) => {
    const Offer = sequelize.define("offer", {
        name: {
            type: Sequelize.STRING
        },
        duration: {
            type: Sequelize.STRING
        },
        becomeOrder: {
            type: Sequelize.BOOLEAN
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy: {
            type: Sequelize.STRING
        }
    });
    return Offer;
};
