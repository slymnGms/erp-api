module.exports = (sequelize, Sequelize) => {
    const ProductGenre = sequelize.define("productGenres", {
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
