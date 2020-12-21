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

//////////////////////////////////////////////////////////////////////////////////////////////
//--relations----------------------

//////////////////////////////////////////////////////////////////////////////////////////////
//---customer
//altındaki projeler
db.customers.hasMany(db.projects, { as: "projects" });
//////////////////////////////////////////////////////////////////////////////////////////////
//---offer
//bağlı olduğu proje
db.offers.belongsTo(db.projects, {
    foreignKey: "projectId",
    as: "projects"
});
//teklifi veren kişi
db.offers.belongsTo(db.users, {
    foreignKey: "orderById",
    as: "users"
});
//altındaki ürünler
db.offers.hasMany(db.products, { as: "products" });
//////////////////////////////////////////////////////////////////////////////////////////////
//---order
//bağlı olduğu proje
db.orders.belongsTo(db.projects, {
    foreignKey: "projectId",
    as: "projects"
});
//siparişi hazırlayan kişi
db.orders.belongsTo(db.users, {
    foreignKey: "preparedBy",
    as: "users"
});
//altındaki ürünler
db.orders.hasMany(db.products, { as: "products" });
//////////////////////////////////////////////////////////////////////////////////////////////
//---personalEducationLevels
db.personalEducationLevels.hasMany(db.userPersonalInformations, { as: "userPersonalInformations" });
//---products
//bağlı olduğu proje
db.products.belongsTo(db.projects, {
    foreignKey: "projectId",
    as: "projects",
});
//bağlı olduğu teklif
db.products.belongsTo(db.offers, {
    foreignKey: "offerId",
    as: "offers",
});
//bağlı olduğu sipariş
db.products.belongsTo(db.orders, {
    foreignKey: "orderId",
    as: "orders",
});
//bağlı olduğu mamül türü
db.products.belongsTo(db.productGenres, {
    foreignKey: "productGenreId",
    as: "productGenres",
});
//bağlı olduğu mamül işlem çeşidi
db.products.belongsTo(db.productProcessTypes, {
    foreignKey: "productProcessTypeId",
    as: "productProcessTypes",
});
//bağlı olduğu maamül tipi
db.products.belongsTo(db.productTypes, {
    foreignKey: "productTypeId",
    as: "productTypes",
});
//mamülü oluşturuan kişi
db.products.belongsTo(db.users, {
    foreignKey: "producedById",
    as: "users",
});
//altındaki yarı mamüller
db.products.hasMany(db.semiProducts, { as: "semiProducts" });
//altındaki tasarım dosyaları
db.products.hasMany(db.productDesignFiles, { as: "productDesignFiles" });
//altındaki dosyalar
db.products.hasMany(db.productFiles, { as: "productFiles" });
//////////////////////////////////////////////////////////////////////////////////////////////
//---productFiles
db.productFiles.belongsTo(db.products, {
    foreignKey: "productId",
    as: "products",
});
//////////////////////////////////////////////////////////////////////////////////////////////
//---productDesignFiles
db.productDesignFiles.belongsTo(db.products, {
    foreignKey: "productId",
    as: "products",
});
//////////////////////////////////////////////////////////////////////////////////////////////
//---productGenres
//altındaki ürünler
db.productGenres.hasMany(db.products, { as: "products" });
//////////////////////////////////////////////////////////////////////////////////////////////
//---productProcessTypes
//altındaki ürünler
db.productProcessTypes.hasMany(db.products, { as: "products" });
//////////////////////////////////////////////////////////////////////////////////////////////
//---productTypes
//altındaki ürünler
db.productTypes.hasMany(db.products, { as: "products" });
//////////////////////////////////////////////////////////////////////////////////////////////
//---projects
//bağlı olduğu müşteriler
db.projects.belongsTo(db.customers, {
    foreignKey: "customerId",
    as: "customers",
});
//altındaki teklifler
db.projects.hasMany(db.offers, { as: "offers" });
//altındaki siparişler
db.projects.hasMany(db.orders, { as: "orders" });
//altındaki ürünler
db.projects.hasMany(db.products, { as: "products" });
//altındaki dosya adı/yolu
db.projects.hasMany(db.projectFiles, { as: "projectFiles" });
//////////////////////////////////////////////////////////////////////////////////////////////
//---projectFiles
//bağlı olduğu projeler
db.projectFiles.belongsTo(db.projects, {
    foreignKey: "projectId",
    as: "projects",
});
//////////////////////////////////////////////////////////////////////////////////////////////
//---rawMaterialTypes
//altındaki yarı mamüller
db.rawMaterialTypes.hasMany(db.semiProducts, { as: "semiProducts" });
//////////////////////////////////////////////////////////////////////////////////////////////
//---semiProducts
//bağlı olduğu ürünler
db.semiProducts.belongsTo(db.products, {
    foreignKey: "productId",
    as: "products",
});
//bağlı olduğu hammadde tipi
db.semiProducts.belongsTo(db.rawMaterialTypes, {
    foreignKey: "rawMaterialTypeId",
    as: "rawMaterialTypes",
});
//bağlı olduğu yarı mamül tipi
db.semiProducts.belongsTo(db.semiProductTypes, {
    foreignKey: "semiProductTypeId",
    as: "semiProductTypes",
});
//üreten ikişi
db.semiProducts.belongsTo(db.users, {
    foreignKey: "producedById",
    as: "users",
});
//altındaki tasarım dosyaları
db.semiProducts.hasMany(db.semiProductDesignFiles, { as: "semiProductDesignFiles" });
//altındaki dosyalar
db.semiProducts.hasMany(db.semiProductFiles, { as: "semiProductFiles" });
//////////////////////////////////////////////////////////////////////////////////////////////
//---semiProductFiles
db.semiProductFiles.belongsTo(db.semiProducts, {
    foreignKey: "semiProductId",
    as: "semiProducts",
});

//---semiProductDesignFiles
db.semiProductDesignFiles.belongsTo(db.semiProducts, {
    foreignKey: "semiProductId",
    as: "semiProducts",
});
//////////////////////////////////////////////////////////////////////////////////////////////
//---semiProductTypes
//altındaki yarı mamüller
db.semiProductTypes.hasMany(db.semiProducts, { as: "semiProducts" });
//////////////////////////////////////////////////////////////////////////////////////////////
//---userCuttinTips
//bağlı olduğu kullanıcılar
db.userCuttinTips.belongsTo(db.users, {
    foreignKey: "userId",
    as: "users",
});
//////////////////////////////////////////////////////////////////////////////////////////////
//---userDebits
//bağlı olduğu kullanıcılar
db.userDebits.belongsTo(db.users, {
    foreignKey: "userId",
    as: "users",
});
//////////////////////////////////////////////////////////////////////////////////////////////
//---userMachines
//bağlı olduğu kullanıcılar
db.userMachines.belongsTo(db.users, {
    foreignKey: "userId",
    as: "users",
});
//////////////////////////////////////////////////////////////////////////////////////////////
//---userPersonalInformation
//bağlı olduğu kullanıcı
db.userPersonalInformations.belongsTo(db.users, {
    foreignKey: "userId",
    as: "users",
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
//////////////////////////////////////////////////////////////////////////////////////////////
//---users
//altındaki teklifler
db.users.hasMany(db.offers, { as: "offers" });
//altındaki siparişler
db.users.hasMany(db.orders, { as: "orders" });
//altındaki mamüller
db.users.hasMany(db.products, { as: "products" });
//altındaki yarı mamüller
db.users.hasMany(db.semiProducts, { as: "semiProducts" });
//altındaki kesici uçlar
db.users.hasMany(db.userCuttinTips, { as: "userCuttinTips" });
//altındaki zimmetler
db.users.hasMany(db.userDebits, { as: "userDebits" });
//altındaki kullandığı makinalar
db.users.hasMany(db.userMachines, { as: "userMachines" });
//altındaki kullanıcı bilgileri
db.users.hasMany(db.userPersonalInformations, { as: "userPersonalInformations" });

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
