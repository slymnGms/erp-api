module.exports = (sequelize, Sequelize) => {
    const ProductType = sequelize.define("productTypes", {
        //mamül tipi adı
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
    return ProductType;
};
