const express = require("express");
const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");

const generateToken = require("../controllers/authControllerUser");

const Admin = require("../models/Admin");

const router = express.Router();

/*function generateToken(params) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}*/

router.post("/register", async (req, res) => {
  const { cpf } = req.body;

  try {
    if (await Admin.findOne({ cpf }))
      return res.status(400).send({ erro: "Admin already exists" });

    const adm = await Admin.create(req.body);

    adm.password = undefined;

    return res.send({
      adm,
      token: generateToken({ id: adm.id }),
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Registration failed" });
  }
});

router.post("/authenticate", async (req, res) => {
  const { cpf, password } = req.body;

  const adm = await Admin.findOne({ cpf }).select("+password");
  console.log(adm);

  if (!adm) return res.status(400).send({ erro: "User not found" });

  if (!(await bcrypt.compare(password, adm.password)))
    return res.status(400).send({ erro: "Password mismatch" });

  adm.password = undefined;

  res.send({
    user,
    token: generateToken({ id: adm.id }),
  });
});

module.exports = (app) => app.use("/admin", router);
