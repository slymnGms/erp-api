module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
        //mamül adı
        name: {
            type: Sequelize.STRING
        },
        //mamül kalem numarası
        itemNumber: {
            type: Sequelize.STRING
        },
        //mamül sıra numarası
        orderNumber: {
            type: Sequelize.STRING
        },
        //mamül numarası
        number: {
            type: Sequelize.STRING
        },
        //mamüll bedeli
        cost: {
            type: Sequelize.STRING
        },
        //mamül üretim süresi
        duration: {
            type: Sequelize.STRING
        },
        //mamül teslim tarihi
        deliveryTime: {
            type: Sequelize.DATE
        },
        //mamül oluşturma tarihi
        startTime: {
            type: Sequelize.DATE
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy: {
            type: Sequelize.STRING
        }
    });
    return Product;
};
