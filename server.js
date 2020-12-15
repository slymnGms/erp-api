const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//db 
const db = require("./models");
// db.sequelize.sync();
//for testing we reacreate them
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync Db');
  initial();
});
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Almak API." });
});
//user routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
//api routes
var customers=require('./routes/customer.routes.js');
var offers=require('./routes/offer.routes.js');
var orders=require('./routes/order.routes.js');
var personalEducationLevels=require('./routes/personalEducationLevel.routes.js');
var products=require('./routes/product.routes.js');
var productDesignFiles=require('./routes/productDesignFile.routes.js');
var productFiles=require('./routes/productFile.routes.js');
var productGenres=require('./routes/productGenre.routes.js');
var productProcessTypes=require('./routes/productProcessType.routes.js');
var productTypes=require('./routes/productType.routes.js');
var projects=require('./routes/project.routes.js');
var projectFiles=require('./routes/projectFile.routes.js');
var rawMaterialTypes=require('./routes/rawMaterialType.routes.js');
var semiProducts=require('./routes/semiProduct.routes.js');
var semiProductDesignFiles=require('./routes/semiProductDesignFile.routes.js');
var semiProductFiles=require('./routes/semiProductFile.routes.js');
var semiProductTypes=require('./routes/semiProductType.routes.js');
var userCuttintips=require('./routes/userCuttintip.routes.js');
var userDebits=require('./routes/userDebit.routes.js');
var userMachines=require('./routes/userMachine.routes.js');
var userPersonalInformations=require('./routes/userPersonalInformation.routes.js');
app._router.use('/customers/',customers);
app._router.use('/offers/',offers);
app._router.use('/orders/',orders);
app._router.use('/personalEducationLevels/',personalEducationLevels);
app._router.use('/products/',products);
app._router.use('/productDesignFiles/',productDesignFiles);
app._router.use('/productFiles/',productFiles);
app._router.use('/productGenres/',productGenres);
app._router.use('/productProcessTypes/',productProcessTypes);
app._router.use('/productTypes/',productTypes);
app._router.use('/projects/',projects);
app._router.use('/projectFiles/',projectFiles);
app._router.use('/rawMaterialTypes/',rawMaterialTypes);
app._router.use('/semiProducts/',semiProducts);
app._router.use('/semiProductDesignFiles/',semiProductDesignFiles);
app._router.use('/semiProductFiles/',semiProductFiles);
app._router.use('/semiProductTypes/',semiProductTypes);
app._router.use('/userCuttintips/',userCuttintips);
app._router.use('/userDebits/',userDebits);
app._router.use('/userMachines/',userMachines);
app._router.use('/userPersonalInformations/',userPersonalInformations);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
