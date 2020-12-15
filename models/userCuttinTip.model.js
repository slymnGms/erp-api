module.exports = (sequelize, Sequelize) => {
    const UserCuttintip = sequelize.define("userCuttintips", {
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
    return UserCuttintip;
};
