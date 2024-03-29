module.exports = (sequelize, Sequelize) => {
    const UserMachine = sequelize.define("userMachines", {
        //personel kullandığı makina adı
        name: {
            type: Sequelize.STRING
        },
        startDate: {
            type: Sequelize.DATE
        },
        endDate: {
            type: Sequelize.DATE
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy: {
            type: Sequelize.STRING
        }
    });
    return UserMachine;
};
