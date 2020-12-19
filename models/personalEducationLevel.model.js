module.exports = (sequelize, Sequelize) => {
    const PersonalEducationLevel = sequelize.define("personalEducationLevels", {
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
