module.exports = (sequelize, Sequelize) => {
    const ProductProcessType = sequelize.define("productProcessTypes", {
        //mamül işlem çeşidi adı
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
