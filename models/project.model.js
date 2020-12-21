module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("projects", {
        //proje numarası
        name: {
            type: Sequelize.STRING
        },
        //proje açıklaması
        description: {
            type: Sequelize.STRING
        },
        //proje teklif mi
        isOffer: {
            type: Sequelize.BOOLEAN
        },
        //proje sipariş mi
        isOrder: {
            type: Sequelize.BOOLEAN
        },
        //proje iptal mi
        isCancelled: {
            type: Sequelize.BOOLEAN
        },
        //proje tamamlandı mı
        isCompleted: {
            type: Sequelize.BOOLEAN
        },
        //proje irsaliye kesildi mi
        hasReceipt: {
            type: Sequelize.BOOLEAN
        },
        //proje fatura kesildi mi
        hasInvoice: {
            type: Sequelize.BOOLEAN
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy: {
            type: Sequelize.STRING
        }
    });
    return Project;
};
