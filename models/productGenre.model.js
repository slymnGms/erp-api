module.exports = (sequelize, Sequelize) => {
    const ProductGenre = sequelize.define("productGenre", {
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
    return ProductGenre;
};
