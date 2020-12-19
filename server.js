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
require("./routes/offers.routes")(app);
require("./routes/orders.routes")(app);
require("./routes/personalEducationLevels.routes")(app);
require("./routes/products.routes")(app);
require("./routes/productDesignFiles.routes")(app);
require("./routes/productFiles.routes")(app);
require("./routes/productGenres.routes")(app);
require("./routes/productProcessTypes.routes")(app);
require("./routes/productTypes.routes")(app);
require("./routes/projects.routes")(app);
require("./routes/projectFiles.routes")(app);
require("./routes/rawMaterialTypes.routes")(app);
require("./routes/semiProducts.routes")(app);
require("./routes/semiProductDesignFiles.routes")(app);
require("./routes/semiProductFiles.routes")(app);
require("./routes/semiProductTypes.routes")(app);
require("./routes/userCuttintips.routes")(app);
require("./routes/userDebits.routes")(app);
require("./routes/userMachines.routes")(app);
require("./routes/userPersonalInformations.routes")(app);
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
