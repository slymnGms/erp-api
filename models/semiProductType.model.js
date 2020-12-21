module.exports = (sequelize, Sequelize) => {
    const SemiProductType = sequelize.define("semiProductTypes", {
        //yarı mamül türü adı
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
