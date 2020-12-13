module.exports = (sequelize, Sequelize) => {
    const UserPersonalInformation = sequelize.define("userPersonalInformation", {
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
    return UserPersonalInformation;
};
