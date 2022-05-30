const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


require('./controllers/authControllerLoginUser')(app);
require('./controllers/authControllerUser')(app);

app.listen(port, () =>{ 
  console.log(`Escutando na porta: ${port}`)
});
