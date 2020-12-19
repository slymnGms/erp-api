module.exports = (sequelize, Sequelize) => {
    const SemiProductType = sequelize.define("semiProductTypes", {
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
    return SemiProductType;
};
