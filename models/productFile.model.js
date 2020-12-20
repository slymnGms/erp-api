module.exports = (sequelize, Sequelize) => {
    const ProductFile = sequelize.define("productFiles", {
        //ürün foto adı/yolu
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
    return ProductFile;
};
