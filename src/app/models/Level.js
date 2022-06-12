const mongoose = require("../../database");

const LevelSchema = new mongoose.Schema({
  nameLevel: {
    type: String,
    unique: true,
    require: true,
  },
  content: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Content",
    required: true,
  },

  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  conclude: {
    type: Boolean,
    required: true,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Level = mongoose.model("Level", LevelSchema);

module.exports = Level;
