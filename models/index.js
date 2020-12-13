const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require("./customer.model.js")(sequelize, Sequelize);
db.offers = require("./offer.model.js")(sequelize, Sequelize);
db.orders = require("./order.model.js")(sequelize, Sequelize);
db.personalEducationLevels = require("./personalEducationLevel.model.js")(sequelize, Sequelize);
db.products = require("./product.model.js")(sequelize, Sequelize);
db.productDesignFiles = require("./productDesignFile.model.js")(sequelize, Sequelize);
db.productFiles = require("./productFile.model.js")(sequelize, Sequelize);
db.productGenres = require("./productGenre.model.js")(sequelize, Sequelize);
db.ProductProcessTypes = require("./ProductProcessType.model.js")(sequelize, Sequelize);
db.productTypes = require("./productType.model.js")(sequelize, Sequelize);
db.projects = require("./project.model.js")(sequelize, Sequelize);
db.projectFiles = require("./projectFile.model.js")(sequelize, Sequelize);
db.rawMaterialTypes = require("./rawMaterialType.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.semiProducts = require("./semiProduct.model.js")(sequelize, Sequelize);
db.semiProductDesignFiles = require("./semiProductDesignFile.model.js")(sequelize, Sequelize);
db.semiProductFiles = require("./semiProductFile.model.js")(sequelize, Sequelize);
db.semiProductTypes = require("./semiProductType.model.js")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.userCuttinTips = require("./userCuttinTip.model.js")(sequelize, Sequelize);
db.userDebits = require("./userDebit.model.js")(sequelize, Sequelize);
db.userMachines = require("./userMachine.model.js")(sequelize, Sequelize);
db.userPersonalInformations = require("./userPersonalInformation.model.js")(sequelize, Sequelize);

//relations

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

db.customers.hasMany(db.projects, { as: "projects" });
db.projects.belongsTo(db.customers, {
    foreignKey: "customerId",
    as: "customers",
});

db.projects.hasMany(db.projectFiles, { as: "projectFiles" });
db.projectFiles.belongsTo(db.projects, {
    foreignKey: "projectId",
    as: "projects",
});

db.projects.hasMany(db.offers, { as: "offers" });
db.offers.belongsTo(db.projects, {
    foreignKey: "projectId",
    as: "projects",
});

db.projects.hasMany(db.orders, { as: "orders" });
db.orders.belongsTo(db.projects, {
    foreignKey: "projectId",
    as: "projects",
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
