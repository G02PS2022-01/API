const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./controllers/authControllerUser")(app);
require("./controllers/authControllerQuest")(app);
require("./controllers/authControllerLevel")(app);
require("./controllers/authControllerContent")(app);
app.listen(3000);
