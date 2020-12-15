module.exports = (sequelize, Sequelize) => {
    const ProjectFile = sequelize.define("projectFiles", {
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
