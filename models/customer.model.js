module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
        //müşteri adı
        name: {
            type: Sequelize.STRING
        },
        //bağlantı adı soyadı
        contactName: {
            type: Sequelize.STRING
        },
        //bağlantı maili
        contactEmail: {
            type: Sequelize.STRING
        },
        //bağlantı telefonu
        contactPhone: {
            type: Sequelize.STRING
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy: {
            type: Sequelize.STRING
        }
    });
    return Customer;
};
