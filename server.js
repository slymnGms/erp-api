const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//db 
const db = require("./models");
// db.sequelize.sync();
//for testing we reacreate them
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Almak API." });
});
//user routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
//api routes
require("./routes/customer.routes")(app);
require("./routes/offer.routes")(app);
require("./routes/order.routes")(app);
require("./routes/personalEducationLevel.routes")(app);
require("./routes/product.routes")(app);
require("./routes/productDesignFile.routes")(app);
require("./routes/productFile.routes")(app);
require("./routes/productGenre.routes")(app);
require("./routes/productProcessType.routes")(app);
require("./routes/productType.routes")(app);
require("./routes/project.routes")(app);
require("./routes/projectFile.routes")(app);
require("./routes/rawMaterialType.routes")(app);
require("./routes/semiProduct.routes")(app);
require("./routes/semiProductDesignFile.routes")(app);
require("./routes/semiProductFile.routes")(app);
require("./routes/semiProductType.routes")(app);
require("./routes/userCuttintip.routes")(app);
require("./routes/userDebit.routes")(app);
require("./routes/userMachine.routes")(app);
require("./routes/userPersonalInformation.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  const Role = db.role;
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
