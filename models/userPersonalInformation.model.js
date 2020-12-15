module.exports = (sequelize, Sequelize) => {
    const UserPersonalInformation = sequelize.define("userPersonalInformations", {
        firstName: {
            type: Sequelize.STRING
        },
        middleName: {
            type: Sequelize.STRING
        },
        surName: {
            type: Sequelize.STRING
        },
        identityNumber: {
            type: Sequelize.STRING
        },
        birthDate: {
            type: Sequelize.DATE
        },
        birthPlace: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
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
