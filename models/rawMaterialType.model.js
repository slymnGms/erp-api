module.exports = (sequelize, Sequelize) => {
    const RawMaterialType = sequelize.define("rawMaterialTypes", {
        //hammadde tipi adı
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
