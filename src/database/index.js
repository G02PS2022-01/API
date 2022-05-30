const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://amauri_1:adm12345@dogcode.aqwiq.mongodb.net/?retryWrites=true&w=majority");
mongoose.Promise = global.Promise;

module.exports = mongoose