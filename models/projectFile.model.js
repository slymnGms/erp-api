module.exports = (sequelize, Sequelize) => {
    const ProjectFile = sequelize.define("projectFiles", {
        //proje dosya adı/yolu
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
    return ProjectFile;
};
