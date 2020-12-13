module.exports = (sequelize, Sequelize) => {
    const ProjectFile = sequelize.define("projectFile", {
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
