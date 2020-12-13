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
  console.log("Drop and re-sync db.");
  console.log('Drop and Resync Db');
  initial();
});
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Almak API." });
});
//user routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
//api routes
var customers=require('./routes/customer.routes.js');
app._router.use('/customers/',customers);
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
