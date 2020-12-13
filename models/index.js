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

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.customers = require("./customer.model.js")(sequelize, Sequelize);
db.projects = require("./project.model.js")(sequelize, Sequelize);
db.projectFiles = require("./projectFile.model.js")(sequelize, Sequelize);

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

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
