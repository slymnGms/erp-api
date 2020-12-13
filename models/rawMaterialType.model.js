module.exports = (sequelize, Sequelize) => {
    const RawMaterialType = sequelize.define("rawMaterialType", {
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
    return RawMaterialType;
};
