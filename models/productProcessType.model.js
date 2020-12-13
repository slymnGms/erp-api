module.exports = (sequelize, Sequelize) => {
    const ProductProcessType = sequelize.define("productProcessType", {
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
