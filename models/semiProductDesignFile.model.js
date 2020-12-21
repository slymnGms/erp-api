module.exports = (sequelize, Sequelize) => {
    const SemiProductDesignFile = sequelize.define("semiProductDesignFiles", {
        //yarı mamül tasarım adı/yolu
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
