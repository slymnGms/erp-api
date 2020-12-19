module.exports = (sequelize, Sequelize) => {
    const SemiProductDesignFile = sequelize.define("semiProductDesignFiles", {
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
    return SemiProductDesignFile;
};
