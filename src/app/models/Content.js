const mongoose = require("../../database");

const ContentSchema = new mongoose.Schema({
  nameContent: {
    type: String,
    unique: true,
    require: true,
  },

  quest: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quest",
    },
  ],

  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Content = mongoose.model("Content", ContentSchema);

module.exports = Content;
