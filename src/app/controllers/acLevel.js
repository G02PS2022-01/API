const express = require("express");

const Level = require("../models/Level");

const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.use(authMiddleware);

module.exports = (app) => app.use("/level", router);
