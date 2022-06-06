const mongoose = require("../database");

const LevelSchema = new mongoose.Schema({
  Level: {
    type: String,
    unique: true,
    require: true,
  },
  quest: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },

  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Level = mongoose.model("Level", LevelSchema);

module.exports = Level;
