module.exports = (sequelize, Sequelize) => {
    const UserDebit = sequelize.define("userDebit", {
        name: {
            type: Sequelize.STRING
        },
        startDate: {
            type: Sequelize.DATE
        },
        endDate: {
            type: Sequelize.DATE
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy: {
            type: Sequelize.STRING
        }
    });
    return UserDebit;
};
