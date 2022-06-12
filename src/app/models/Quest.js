const mongoose = require("../../database");

const QuestSchema = new mongoose.Schema({
  intro_content: {
    type: String,
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
  created_at: {
    type: Date,
    default: Date.now(),
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Quest = mongoose.model("Quest", QuestSchema);

module.exports = Quest;
