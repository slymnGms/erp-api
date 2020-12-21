module.exports = (sequelize, Sequelize) => {
    const Offer = sequelize.define("offers", {
        //teklif numarası
        name: {
            type: Sequelize.STRING
        },
        //teklifin süresi
        duration: {
            type: Sequelize.STRING
        },
        //teklif siparişe döndü mü
        becomeOrder: {
            type: Sequelize.BOOLEAN
        },
        //teklif tarihi
        orderDate: {
            type: Sequelize.DATE
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy: {
            type: Sequelize.STRING
        }
    });
    return Offer;
};
