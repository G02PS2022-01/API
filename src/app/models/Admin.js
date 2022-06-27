const mongoose = require("../../database");

const AdmSchema = new mongoose.Schema({
  nameAdm: {
    type: String,
    unique: true,
    require: true,
  },
  cpf: {
    type: Number,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  passwordResetToken: {
    type: String,
    select: false,
  },

  passwordResetExpires: {
    type: Date,
    select: false,
  },

  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Adm = mongoose.model("Adm", AdmSchema);

module.exports = Adm;
