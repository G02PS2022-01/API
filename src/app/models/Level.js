const mongoose = require("../../database");

const LevelSchema = new mongoose.Schema({
  nameLevel: {
    type: String,
    unique: true,
    require: true,
  },
  content: {
    type: String,
    unique: true,
    required: true,
  },
  quests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quest",
      required: true,
    },
  ],
  adm: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Level = mongoose.model("Level", LevelSchema);

module.exports = Level;
