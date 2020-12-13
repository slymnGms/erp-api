module.exports = (sequelize, Sequelize) => {
    const ProductDesignFile = sequelize.define("productDesignFile", {
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
    return ProductDesignFile;
};
