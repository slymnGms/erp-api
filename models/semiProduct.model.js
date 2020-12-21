module.exports = (sequelize, Sequelize) => {
    const SemiProduct = sequelize.define("semiProducts", {
        //yarı mamül kodu
        code: {
            type: Sequelize.STRING
        },
        //yarı mamül numarası
        number: {
            type: Sequelize.STRING
        },
        //yarı mamül oluşturma tarihi
        startTime: {
            type: Sequelize.DATE
        },
        //yarı mamül üretim süresi
        duration: {
            type: Sequelize.STRING
        },
        //yarı mamül teslim tarihi
        deliveryTime: {
            type: Sequelize.DATE
        },
        //hammadde numarası
        rawMaterialNumber: {
            type: Sequelize.STRING
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy: {
            type: Sequelize.STRING
        }
    });
    return SemiProduct;
};
