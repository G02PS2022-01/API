const mongoose = require("../../database");

const QuestSchema = new mongoose.Schema({
  introduction: {
    type: String,
    require: true,
  },
  level: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Level",
    require: true,
  },
  question: {
    type: String,
    require: true,
  },
  answers: {
    type: String,
    require: true,
  },
  flag: {
    type: Boolean,
    require: true,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Quest = mongoose.model("Quest", QuestSchema);

module.exports = Quest;
