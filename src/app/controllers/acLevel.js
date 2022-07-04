const express = require("express");
const authMiddleware = require("../middlewares/auth");

const Quest = require("../models/Quest");
const Level = require("../models/Level");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const levels = await Level.find();

    return res.send({ levels });
  } catch (err) {
    return res.status(404).send({ error: "Error loading levels" });
  }
});

router.get("/:levelId", async (req, res) => {
  try {
    const levels = await Level.findById(req.params.levelId);

    return res.send({ levels });
  } catch (err) {
    return res.status(404).send({ error: "Error loading level" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { nameLevel, content, quests } = req.body;

    const level = await Level.create({ nameLevel, content });

    await Promise.all(
      quests.map(async (quest) => {
        const levelQuests = new Quest({ ...quest, level: level._id });

        await levelQuests.save();

        level.quests.push(levelQuests);
      })
    );

    await level.save();

    return res.send({ level });
  } catch (err) {
    return res.status(404).send({ error: "Error regsitration" });
  }
});

router.put("/:levelId", async (req, res) => {
  res.send({ ok: true, user: req.userId });
});

router.delete("/:levelId", async (req, res) => {
  try {
    awaitLevel.findByIdAndRemove(req.params.levelId);

    return res.send();
  } catch (err) {
    return res.status(404).send({ error: "Error deleting level" });
  }
});

router.use(authMiddleware);

module.exports = (app) => app.use("/level", router);
