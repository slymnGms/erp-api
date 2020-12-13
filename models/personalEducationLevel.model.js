module.exports = (sequelize, Sequelize) => {
    const PersonalEducationLevel = sequelize.define("personalEducationLevel", {
        name: {
            type: Sequelize.STRING
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy: {
            type: Sequelize.STRING
        }
    });
    return PersonalEducationLevel;
};
