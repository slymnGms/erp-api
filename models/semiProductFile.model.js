module.exports = (sequelize, Sequelize) => {
    const SemiProductFile = sequelize.define("semiProductFile", {
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
    return SemiProductFile;
};
