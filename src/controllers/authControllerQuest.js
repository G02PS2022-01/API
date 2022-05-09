const express = require("express");

const Quest = require("../models/Quest");

const router = express.Router();

router.post("/question", async (req, res) => {
  try {
    const quest = await Quest.create(req.body);

    return res.send({ quest });
  } catch (err) {
    return res.status(400).send({ error: "Registrain failed" });
  }
});

module.exports = (app) => app.use("/authControllerQuest", router);