const express = require("express");
const authMiddleware = require("../middlewares/auth");

const level = require("../models/Level");
const content = require("../models/Content");
const quest = require("../models/Quest");

const router = express.Router();

router.get("/", async (req, res) => {
  res.send({ ok: true, user: req.userId });
});

router.get("/:levelId", async (req, res) => {
  res.send({ ok: true, user: req.userId });
});

router.post("/", async (req, res) => {
  res.send({ ok: true, user: req.userId });
});

router.put("/:levelId", async (req, res) => {
  res.send({ ok: true, user: req.userId });
});

router.delete("/:levelId", async (req, res) => {
  res.send({ ok: true, user: req.userId });
});

router.use(authMiddleware);

module.exports = (app) => app.use("/level", router);
