const mongoose = require("../../database");

const QuestSchema = new mongoose.Schema({
  intro_content: {
    type: String,
    require: true,
  },
  question: {
    type: String,
    require: true,
    lowercase: true,
  },
  answer: {
    type: String,
    require: true,
    lowercase: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Quest = mongoose.model("Quest", QuestSchema);

module.exports = Quest;
