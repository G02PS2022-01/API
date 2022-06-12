const express = require("express");

const Level = require("../models/Level");

const router = express.Router();

router.post("/level", async (req, res) => {
  try {
    if (await Level.findOne({ level }))
      return res.status(400).send({ erro: "Level exists" });

    const level = await Level.create(req.body);

    return res.send({ level });
  } catch (err) {
    return res.status(400).send({ error: "Registrain failed" });
  }
});

module.exports = (app) => app.use("/auth", router);
