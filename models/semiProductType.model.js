module.exports = (sequelize, Sequelize) => {
    const SemiProductType = sequelize.define("semiProductType", {
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
