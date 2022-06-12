const mongoose = require("mongoose");
const connectDB = require("../config/connectDB");
//const uriCFG = require("../config/uriCFG");

//colocar isso em lugar seguro
const username = encodeURIComponent(connectDB.usr);
const password = encodeURIComponent(connectDB.password);
const cluster = connectDB.clst;
//const authCluster = "Dog-test?retryWrites=true";
//const autMechanism = "w=majority";

const MONGODB_connect = `mongodb+srv://${username}:${password}@${cluster}/DogeBD?retryWrites=true&w=majority`;
//const MONGODB_connect = `mongodb+srv://admLocal:adminok@dogcode.aqwiq.mongodb.net/DogeBD?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_connect);

mongoose.Promise = global.Promise;

module.exports = mongoose;
