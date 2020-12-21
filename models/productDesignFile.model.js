module.exports = (sequelize, Sequelize) => {
    const ProductDesignFile = sequelize.define("productDesignFiles", {
        //ürün tasarım dosyası adı/yolu
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
