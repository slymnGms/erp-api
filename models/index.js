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
db.productProcessTypes = require("./productProcessType.model.js")(sequelize, Sequelize);
db.productTypes = require("./productType.model.js")(sequelize, Sequelize);
db.projects = require("./project.model.js")(sequelize, Sequelize);
db.projectFiles = require("./projectFile.model.js")(sequelize, Sequelize);
db.rawMaterialTypes = require("./rawMaterialType.model.js")(sequelize, Sequelize);
db.roles = require("../models/role.model.js")(sequelize, Sequelize);
db.semiProducts = require("./semiProduct.model.js")(sequelize, Sequelize);
db.semiProductDesignFiles = require("./semiProductDesignFile.model.js")(sequelize, Sequelize);
db.semiProductFiles = require("./semiProductFile.model.js")(sequelize, Sequelize);
db.semiProductTypes = require("./semiProductType.model.js")(sequelize, Sequelize);
db.users = require("../models/user.model.js")(sequelize, Sequelize);
db.userCuttinTips = require("./userCuttinTip.model.js")(sequelize, Sequelize);
db.userDebits = require("./userDebit.model.js")(sequelize, Sequelize);
db.userMachines = require("./userMachine.model.js")(sequelize, Sequelize);
db.userPersonalInformations = require("./userPersonalInformation.model.js")(sequelize, Sequelize);

//--relations----------------------
//---customer
db.customers.hasMany(db.projects, { as: "projects" });
//---offer
db.offers.belongsTo(db.projects,{
    foreignKey:"projectId",
    as:"projects"
});
//---order
db.orders.belongsTo(db.projects,{
    foreignKey:"projectId",
    as:"projects"
});
//---personalEducationLevels
db.personalEducationLevels.hasMany(db.userPersonalInformations,{as:"userPersonalInformations"});
//---products
db.products.belongsTo(db.projects,{
    foreignKey:"projectId",
    as:"projects",
});
db.products.belongsTo(db.productGenres,{
    foreignKey:"productGenreId",
    as:"productGenres",
});
db.products.belongsTo(db.productProcessTypes,{
    foreignKey:"productProcessTypeId",
    as:"productProcessTypes",
});
db.products.belongsTo(db.productTypes,{
    foreignKey:"productTypeId",
    as:"productTypes",
});
db.products.belongsTo(db.users,{
    foreignKey:"producedById",
    as:"users",
});
db.products.hasMany(db.semiProducts,{as:"semiProducts"});
db.products.hasMany(db.productDesignFiles,{as:"productDesignFiles"});
db.products.hasMany(db.productFiles,{as:"productFiles"});
//---productFiles
db.productFiles.belongsTo(db.products,{
    foreignKey:"productId",
    as:"products",
});
//---productGenres
db.productGenres.hasMany(db.products,{as:"products"});
//---productProcessTypes
db.productProcessTypes.hasMany(db.products,{as:"products"});
//---productTypes
db.productTypes.hasMany(db.products,{as:"products"});
//---projects
db.projects.belongsTo(db.customers, {
    foreignKey: "customerId",
    as: "customers",
});
db.projects.hasMany(db.offers,{as:"offers"});
db.projects.hasMany(db.orders,{as:"orders"});
db.projects.hasMany(db.products,{as:"products"});
db.projects.hasMany(db.projectFiles,{as:"projectFiles"});
//---projectFiles
db.projectFiles.belongsTo(db.projects,{
    foreignKey:"projectId",
    as:"projects",
});
//---rawMaterialTypes
db.rawMaterialTypes.hasMany(db.semiProducts,{as:"semiProducts"});
//---semiProducts
db.semiProducts.belongsTo(db.products,{
    foreignKey:"productId",
    as:"products",
});
db.semiProducts.belongsTo(db.rawMaterialTypes,{
    foreignKey:"rawMaterialTypeId",
    as:"rawMaterialTypes",
});
db.semiProducts.belongsTo(db.semiProductTypes,{
    foreignKey:"semiProductTypeId",
    as:"semiProductTypes",
});
db.semiProducts.belongsTo(db.users,{
    foreignKey:"producedById",
    as:"users",
});
//---productTypes
db.semiProductTypes.hasMany(db.semiProducts,{as:"semiProducts"});
//---userCuttinTips
db.userCuttinTips.belongsTo(db.users,{
    foreignKey:"userId",
    as:"users",
});
//---userDebits
db.userDebits.belongsTo(db.users,{
    foreignKey:"userId",
    as:"users",
});
//---userMachines
db.userMachines.belongsTo(db.users,{
    foreignKey:"userId",
    as:"users",
});
//---userPersonalInformation
db.userPersonalInformations.belongsTo(db.users,{
    foreignKey:"userId",
    as:"users",
});
db.roles.belongsToMany(db.users, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.users.belongsToMany(db.roles, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});
//---users
db.users.hasMany(db.products,{as:"products"});
db.users.hasMany(db.semiProducts,{as:"semiProducts"});
db.users.hasMany(db.userCuttinTips,{as:"userCuttinTips"});
db.users.hasMany(db.userDebits,{as:"userDebits"});
db.users.hasMany(db.userMachines,{as:"userMachines"});
db.users.hasMany(db.userPersonalInformations,{as:"userPersonalInformations"});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
