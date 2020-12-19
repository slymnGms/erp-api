module.exports = (sequelize, Sequelize) => {
    const SemiProductFile = sequelize.define("semiProductFiles", {
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
