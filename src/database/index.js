const mongoose = require("mongoose");

//colocar isso em lugar seguro
const username = encodeURIComponent("amauri_1");
const password = encodeURIComponent("adm12345");
const cluster = "dogcode.aqwiq.mongodb.net";
//const authCluster = "Dog-test?retryWrites=true";
//const autMechanism = "w=majority";

const MONGODB_connect = `mongodb+srv://${username}:${password}@${cluster}/Doge?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_connect);

mongoose.Promise = global.Promise;

module.exports = mongoose;
