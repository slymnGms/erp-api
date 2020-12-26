module.exports = (sequelize, Sequelize) => {
    const UserCuttinTip = sequelize.define("userCuttinTips", {
        //personel zimmet kullandığı kesici uç adı
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
    return UserCuttinTip;
};
