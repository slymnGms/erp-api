module.exports = (sequelize, Sequelize) => {
    const ProductProcessType = sequelize.define("productProcessTypes", {
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
    return ProductProcessType;
};
