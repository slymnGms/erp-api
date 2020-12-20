module.exports = (sequelize, Sequelize) => {
    const PersonalEducationLevel = sequelize.define("personalEducationLevels", {
        //personel eğitim seviye adı
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
